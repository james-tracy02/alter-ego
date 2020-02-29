
const { RichEmbed } = require('discord.js');

module.exports = function (alterEgo) {
  return {
    meta: {
      name: 'invite',
      description: 'Generate an invite link!',
      aliases: [],
      usage: `${alterEgo.prefix}invite`,
      parameters: [],
    },

    execute: function (msg, args) {
      msg.channel.send(new RichEmbed()
        .setColor(alterEgo.color)
        .setTitle('Click here to invite me to your server!')
        .setAuthor('Search Bot', msg.client.user.avatarURL)
        .setURL(alterEgo.invite)
        .setFooter(`Made by ${alterEgo.owner.username}`,
          alterEgo.owner.avatarURL));
    },
  };
};
