# PhilsCLI

A simple way to make a terminal application in Node

```
const cli = require('philscli')

cli.addCommand('hello', () => {
  cli.respond('hello to you too!')
})

cli.start('hello world app')

```

# Installation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js.

Installation is done using the npm install command:

```
npm i philscli
```

# Adding Commands

In order for your user to interact with the CLI, you have to designate some commands, and actions for the program to do.

If you want the user to be able to execute a function, you need to add a command.

You do this by using `cli.addcommand()`

This function takes 2 parameters:

- `name` - the name of the command can only be 1 word
- `callback function` - this is the function to be executed when a user inputs your command.

If you want the user to be able to specify criteria for their commands, read more about 'command parameters'.

## Command parameters

Since commands are only one word long, anything written by the user in CLI after the first word separated by a " " will be treated as additional optional parameters you can use in your functions.

You can access these by parameters by adding parameters to your call back function.

_Please note: the order that the parameters are entered is the order they will be passed into your function_

# Responding

Responses are ways to format the output from your program to the console.

They are more expressive than a simple `console.log('foo')`

## Basic Response

This is the generic way to talk to users. We format the text with a `>>>` to show that it's coming from the CLI. This helps the user to differentiate generic console output from the comments from the CLI application.

```
cli.respond('Hello friendo.')
```

```
>>> Hello friendo.
```

Seems pretty simple, no?

We also offer some other response types:

## Titles

Titles are used for large section headings in your app. In fact, when you first launch your app, a title is used to annount it.

```
cli.title('Star Trek: The Next Generation')
```

```
====================================
|| STAR TREK: THE NEXT GENERATION ||
====================================

```

## Line

Lines are used to create a solid line of `n` length.

```
cli.line(20)
```

```
=====================
```

## Yell

This will respond back in all capitals.

```
cli.yell('you are fired')
```

```
YOU ARE FIRED
```
