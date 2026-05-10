const request = require("supertest");
const app = require("./index");

describe("API Gimnasio Valus", () => {
  
  // Test 1: Ruta raíz
  test("GET / debe retornar 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  // Test 2: Registro de usuario
  test("POST /api/auth/register debe retornar 201", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "Test User",
      email: `test${Date.now()}@test.com`,
      password: "123456",
    });
    expect(res.statusCode).toBe(201);
  });

  // Test 3: Login con credenciales inválidas
  test("POST /api/auth/login con credenciales inválidas debe retornar 401", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "noexiste@test.com",
      password: "wrongpassword",
    });
    expect(res.statusCode).toBe(401);
  });

  // Test 4: GET reviews sin token debe retornar 200
  test("GET /api/reviews debe retornar 200", async () => {
    const res = await request(app).get("/api/reviews");
    expect(res.statusCode).toBe(200);
  });

  // Test 5: POST review sin token debe retornar 401
  test("POST /api/reviews sin token debe retornar 401", async () => {
    const res = await request(app).post("/api/reviews").send({
      rating: 5,
      comment: "Excelente gimnasio",
    });
    expect(res.statusCode).toBe(401);
  });
});