### Task Instructions: Implement Dynamic JWT Token Generation

In the provided `auth.js` starter code, you have a static implementation for token assignment. Your task is to enhance the authentication mechanism by generating a dynamic JWT token based on the user's information.

**Your Goals:**

1. **Dynamic Token Generation:**

   - Identify the line where the token is assigned a static value (`const token = "123";`).
   - Modify this line to instead assign `token` a value using `jwt.sign()`. You should create the token based on the `userData` object, which contains the user's ID and role.

2. **Incorporate the SECRET_KEY:**

   - Ensure that the `jwt.sign()` method utilizes `SECRET_KEY` for token encryption.

3. **Configure Token Expiration:**
   - Set the token to expire in 1 hour. This involves configuring the appropriate option in the `jwt.sign()` method.

**Guidance:**

- Use the `jwt.sign()` method, which requires at least two arguments: the payload (user data) and the secret key. There's also an optional third parameter, an options object, where you can specify the token's expiration.
- The `userData` object, which includes the user's ID and role, should be utilized as the payload for `jwt.sign()`.
- Review the JWT documentation or relevant resources if you're unfamiliar with the `jwt.sign()` method's syntax and usage.

**Testing Your Implementation:**

- Click on the 'Try It' button to test your code

Try it command:

```bash
curl -X POST http://localhost:3000/login \
 -H "Content-Type: application/json" \
 -d '{"email": "user@example.com", "password": "user123"}'
```
