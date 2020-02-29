
const { RichEmbed } = require('discord.js');
const print = require('../print.js');

module.exports = function (alterEgo) {
  return {
    meta: {
      name: 'info',
      description: 'Look up information on a given command.',
      aliases: [],
      usage: `${alterEgo.prefix}info <command>`,
      parameters: [
        {
          name: 'command',
          type: {
            type: 'String',
          },
          description: 'The command to lookup.',
          optional: false,
        },
      ],
    },

    execute: function (msg, args) {
      const desc = print.command(args.command, alterEgo.commands);
      if (desc === '') {
        msg.channel.send('Invalid command name.');
        return;
      }
      msg.channel.send(new RichEmbed()
        .setColor(alterEgo.color)
        .setTitle(args.command)
        .setDescription(desc));
    },
  };
};
