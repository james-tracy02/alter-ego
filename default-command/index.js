
module.exports = function (alterEgo) {
  return {
    help: require('./help.js')(alterEgo),
    info: require('./info.js')(alterEgo),
    invite: require('./invite.js')(alterEgo),
  }
};
