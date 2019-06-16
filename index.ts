import chalk from 'chalk';

class PhilsCLI {
  commands: object = {};

  start(toolName: string) {
    console.log('\n\n\n');

    this.commands['help'] = () => {
      var keys = Object.keys(this.commands);
      this.respond('available commands are: ' + keys);
    };

    this.title(toolName);
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
        this.respond(`I have no clue what '${command}' means...`);
        this.respond("type 'help' for a list of commands");
      }
    });
  }

  addCommand(title, command) {
    this.commands[title] = command;
  }

  //FORMATTING + RESPONSES

  respond(res) {
    console.log(chalk.cyan('> ' + res));
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
