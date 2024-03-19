**Task 2: Using the DAL to write data into mongoDB**

**Instructions:**

1. **Review the existing code:**

   - Understand the overall structure of the code and how it interacts with the database.
   - Identify the parts that are already implemented and the parts needing completion.

2. **Implement missing functionality:**

   - **Get a reference to the "messages" collection:**
     - Use the appropriate method on the `db` object to retrieve a collection reference and assign it to a variable.
   - **Insert a new document into the collection:**
     - Use the `insertOne` method on the collection reference to create a new document.
     - Provide an object as an argument to `insertOne` that contains a field named "message" with the value from the request body.

3. **Follow coding guidelines:**
   - Use clear and descriptive variable names.
   - Indent code properly for readability.
   - Add comments to explain the purpose of different code blocks.

**Testing Instructions**

- In the terminal, run the command `npm run start`
- Open a separate terminal window
- Click on the `Try it` button

**Try it command:**

```sh
curl -X POST http://localhost:3000/message -H "Content-Type: application/json" -d '{"message": "This is a test message"}'
```
