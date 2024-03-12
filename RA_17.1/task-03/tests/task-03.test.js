const supertest = require("supertest");
const { app, close } = require("../index");

describe("Post operations", () => {
  let token;
  let postId;

  beforeAll(async () => {
    const loginResponse = await supertest(app)
      .post("/login")
      .send({ email: "admin@example.com", password: "admin123" });

    token = loginResponse.body.token;
  });

  afterAll(() => {
    close();
  });

  test("Create a post", async () => {
    const postData = { title: "Test Post", content: "This is a test post" };
    const response = await supertest(app)
      .post("/posts/create")
      .set("Authorization", token)
      .send(postData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    postId = response.body.id;
  });

  test("Edit a post", async () => {
    const editData = { title: "Updated Test Post", content: "Updated content" };
    const response = await supertest(app)
      .put(`/posts/edit/${postId}`)
      .set("Authorization", token)
      .send(editData);

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(editData.title);
    expect(response.body.content).toBe(editData.content);
  });

  test("Delete a post", async () => {
    const response = await supertest(app)
      .delete(`/posts/delete/${postId}`)
      .set("Authorization", token);

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Post deleted");
  });
});

describe("Post operations by non-admin", () => {
  let userToken;
  let postId;

  beforeAll(async () => {
    const userLoginResponse = await supertest(app)
      .post("/login")
      .send({ email: "user@example.com", password: "user123" });

    userToken = userLoginResponse.body.token;
  });

  afterAll(() => {
    close();
  });

  test("Non-admin should not create a post", async () => {
    const postData = {
      title: "User Test Post",
      content: "This is a test post by user",
    };
    const response = await supertest(app)
      .post("/posts/create")
      .set("Authorization", userToken)
      .send(postData);

    expect(response.statusCode).toBe(403);
  });

  test("Non-admin should not edit a post", async () => {
    const editData = {
      title: "Updated User Post",
      content: "Updated content by user",
    };
    const response = await supertest(app)
      .put(`/posts/edit/${postId}`)
      .set("Authorization", userToken)
      .send(editData);

    expect(response.statusCode).toBe(403);
  });

  test("Non-admin should not delete a post", async () => {
    const response = await supertest(app)
      .delete(`/posts/delete/${postId}`)
      .set("Authorization", userToken);

    expect(response.statusCode).toBe(403);
  });
});
