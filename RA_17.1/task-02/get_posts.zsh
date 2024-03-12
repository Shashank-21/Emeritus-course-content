#!/bin/zsh

# Endpoint URLs
LOGIN_URL="http://localhost:3000/login"
POSTS_URL="http://localhost:3000/posts"

# User credentials
NAME="admin@example.com"
PASSWORD="admin123"

# Perform login and capture the full response
RESPONSE=$(curl -s -X POST $LOGIN_URL \
     -H "Content-Type: application/json" \
     -d "{\"email\": \"$NAME\", \"password\": \"$PASSWORD\"}")

# Print the response (for debugging)
echo "Server response: $RESPONSE"

# Extract token using jq
TOKEN=$(echo $RESPONSE | jq -r '.token')

# Check if we got a token
if [[ "$TOKEN" == "null" ]] || [[ -z "$TOKEN" ]]; then
  echo "Login failed or token not received"
  exit 1
fi

# Use the token to get the posts
curl -X GET $POSTS_URL -H "Authorization: $TOKEN"
