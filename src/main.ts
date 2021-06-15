import * as core from "@actions/core";
import { Greeter } from "./greeter";

async function run(): Promise<void> {
  try {
    const greeter: Greeter = new Greeter("Hello, {name}!");
    const name: string = core.getInput("name");

    core.setOutput("greeting", greeter.greet(name));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();