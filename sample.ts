import cli from './index';

let data: any;

cli.addCommand('cheese', () => {
  cli.respond('🧀 🧀 🧀 ');
});
cli.addCommand('sad', () => cli.warn('theres no crying in baseball'));
cli.addCommand('mean', () =>
  cli.error('theres enough shitty people in this world')
);
cli.addCommand('json', () => {
  var data = {
    love_from_me: 'none',
    side_of_best_friends_ride: true,
    scrub: true
  };

  cli.json(data);
});

cli.start('hello world');
cli.respond('what would you like to do today?');
