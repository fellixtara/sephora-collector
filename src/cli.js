const { Command } = require('commander');

const program = new Command();

program
    .name('sephora')
    .version('5.0.0');

program
    .command('discover')
    .description('Discover products from categories');

program
    .command('collect')
    .description('Collect product details');

program
    .command('retry')
    .description('Retry failed jobs');

module.exports={program};
