import chalk from 'chalk';
var prettyjson = require('prettyjson');

class PhilsCLI {
  commands: object = {};

  start(name: string) {
    console.log('\n\n\n');

    this.commands['help'] = () => {
      var keys = Object.keys(this.commands);
      this.respond('available commands are: ' + keys);
    };

    this.title(name);
    process.openStdin().addListener('data', d => {
      let input = d
        .toString()
        .trim()
        .split(' ');
      let command = input[0];
      let params = input.slice(1);
      try {
        let com = this.commands[command](params);
      } catch (err) {
        this.error(`I have no clue what '${command}' means...`);
        console.log(err);
        this.respond("type 'help' for a list of commands");
      }
    });
  }

  addCommand(title: string, command) {
    this.commands[title] = command;
  }

  //FORMATTING + RESPONSES

  respond(res) {
    console.log(chalk.cyan('> ' + res));
  }

  warn(res) {
    console.log(chalk.yellow('> ' + res));
  }

  error(res) {
    console.log(chalk.red('> ' + res));
  }

  congrats(res) {
    console.log(chalk.green('> ' + res));
  }

  json(res) {
    console.log(prettyjson.render(res));
  }

  title(res) {
    this.line(res.length);
    this.yell('|| ' + res + ' ||');
    this.line(res.length);
    this.respond("type 'help' for a list of commands");
  }

  line(len: number) {
    this.yell(new Array(len + 7).join('='));
  }

  yell(res: string) {
    console.log(chalk.bold.white(res.toUpperCase()));
  }
}

const cli = new PhilsCLI();

export default cli;
