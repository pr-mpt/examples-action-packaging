import { Greeter } from "../src/greeter";

describe("greeter", () => {
  it("greets user by name", () => {
    expect(new Greeter("Hello, {name}!").greet("Sam")).toBe("Hello, Sam!");
  });

  it("greets world when name is empty", () => {
    expect(new Greeter("Hello, {name}!").greet("")).toBe("Hello, World!");
  });
});
