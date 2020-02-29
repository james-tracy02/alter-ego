
const { RichEmbed } = require('discord.js');
const print = require('../print.js');

module.exports = function (alterEgo) {
  return {
    meta: {
      name: 'help',
      description: 'Display this help message.',
      aliases: [],
      usage: `${alterEgo.prefix}help`,
      parameters: []
    },

    execute: function (msg) {
      msg.channel.send(new RichEmbed()
      .setColor(alterEgo.color)
      .setTitle(`${alterEgo.title} | Prefix ${alterEgo.prefix}`)
      .setAuthor('Search Bot', msg.client.user.avatarURL)
      .setDescription(
        alterEgo.desc + '\n\n' +
        '**Commands**\n' +
        '*Say* `'+ alterEgo.prefix + 'info <command>` *to find out more!*\n\n' +
        print.commands(alterEgo.commands))
      .setFooter(`Made by ${alterEgo.owner.username}`,
      alterEgo.owner.avatarURL));
    }
  }
};
