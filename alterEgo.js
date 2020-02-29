
const parse = require('./parse');

module.exports = class AlterEgo {
  constructor(client) {
    this.client = client;
  }

  setPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(desc) {
    this.desc = desc;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setOwnerId(ownerId) {
    this.ownerId = ownerId;
    return this;
  }

  setInvite(invite) {
    this.invite = invite;
    return this;
  }

  setEvents(events) {
    this.events = events;
    return this;
  }

  setCommands(commands) {
    this.commands = commands;
    return this;
  }

  async execute() {
    await this.client.login(process.env.TOKEN);
    this.owner = await this.client.fetchUser(this.ownerId);
    this.commands = { ...require('./default-command')(this), ...this.commands(this) };
    this.client.on('message', (msg) => {
      if(msg.author.bot) return;
      if(msg.content.startsWith(this.prefix)) {
        const cmd = parse(msg.content.substring(this.prefix.length), this.commands);
        console.log(this.commands);
        if(!cmd) return;
        return this.commands[cmd.type].execute(msg, cmd);
      };
    });

    Object.keys(this.events).forEach((eventName) => {
      this.client.on(eventName, this.events[eventName](this));
    });
  }
}
