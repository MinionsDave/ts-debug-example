# Debugging TypeScript in VS Code Without Compiling (using `ts-node`)

This repo contains a sample TypeScript project with a Visual Studio Code `launch.json` that
allows you run TypeScript code and mocha tests without a seperate build step.

## Usage

```
git clone https://github.com/MinionsDave/ts-debug-example
npm install
```

## VS Code Debug Tasks

This repo contains the following VS Code Debug tasks (accessible via the debug button on the left)

 * `Debug Current TS Tests File` - Allows you to debug the currently open `mocha` unit tests file (try it with `src/user.spec.ts`)

 * `Debug by ts-node` - Allows you to run and debug the program

These tasks should allow you to hit breakpoints in your code, without needing to compile first.

## Further Details

Further details in a blog post here:
https://segmentfault.com/a/1190000010605261
