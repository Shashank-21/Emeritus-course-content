#!/bin/zsh

# Endpoint URLs
LOGIN_URL="http://localhost:3000/login"
CREATE_POST_URL="http://localhost:3000/posts/create"
EDIT_POST_URL="http://localhost:3000/posts/edit/"  # ID will be appended later
DELETE_POST_URL="http://localhost:3000/posts/delete/"  # ID will be appended later

# User credentials
NAME="admin@example.com"
PASSWORD="admin123"

# Post data
NEW_POST_DATA='{"title": "New Post Title", "content": "New post content"}'
EDIT_POST_DATA='{"title": "Updated Post Title", "content": "Updated post content"}'

# Perform login and capture the full response
LOGIN_RESPONSE=$(curl -s -X POST $LOGIN_URL \
     -H "Content-Type: application/json" \
     -d "{\"email\": \"$NAME\", \"password\": \"$PASSWORD\"}")

# Print the login response (for debugging)
echo "Login response: $LOGIN_RESPONSE"

# Extract token using jq and print error if parsing fails
TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.token')
if [[ "$TOKEN" == "null" ]] || [[ -z "$TOKEN" ]]; then
  echo "Login failed or token not received"
  exit 1
fi

# Create a post
echo "Creating a new post..."
CREATE_RESPONSE=$(curl -s -X POST $CREATE_POST_URL \
     -H "Content-Type: application/json" \
     -H "Authorization: $TOKEN" \
     -d $NEW_POST_DATA)

echo "Create post response: $CREATE_RESPONSE"

# Extract the ID of the created post to use for edit and delete
POST_ID=$(echo $CREATE_RESPONSE | jq -r '.id')

# Edit the post
if [[ "$POST_ID" != "null" ]] && [[ -n "$POST_ID" ]]; then
  echo "Editing post with ID: $POST_ID"
  curl -s -X PUT ${EDIT_POST_URL}${POST_ID} \
       -H "Content-Type: application/json" \
       -H "Authorization: $TOKEN" \
       -d $EDIT_POST_DATA
  echo "Post edited."
else
  echo "Could not extract post ID for editing."
fi

# Delete the post
if [[ "$POST_ID" != "null" ]] && [[ -n "$POST_ID" ]]; then
  echo "Deleting post with ID: $POST_ID"
  curl -s -X DELETE ${DELETE_POST_URL}${POST_ID} \
       -H "Authorization: $TOKEN"
  echo "Post deleted."
else
  echo "Could not extract post ID for deleting."
fi
