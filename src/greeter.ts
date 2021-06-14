export class Greeter {
  private greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet(name: string): string {
    return this.greeting.replace("{name}", name.length > 0 ? name : "World");
  }
}
