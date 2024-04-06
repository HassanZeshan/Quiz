const portfinder = require("portfinder");
const supertest = require("supertest");
const app = require("../app.js");

describe("Express App", () => {
  let server;

  beforeAll(async () => {
    const port = await portfinder.getPortPromise();
    server = app.listen(port);
  });

  afterAll((done) => {
    server.close(done);
  });

  it("should set the Access-Control-Allow-Origin header to *", async () => {
    const response = await supertest(server).get("/api/quiz");
    expect(response.headers["access-control-allow-origin"]).toBe("*");
  });

  it("should set the Access-Control-Allow-Methods header", async () => {
    const response = await supertest(server).get("/api/quiz");
    expect(response.headers["access-control-allow-methods"]).toBe("GET");
  });
});
