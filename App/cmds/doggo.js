const Discord = require('discord.js')
const superagent = require('superagent')

module.exports.run = async (client, message, args) => {
  let {
    body
  } = await superagent
    .get(`https://random.dog/woof.json`)

  let dogEmbed = new Discord.RichEmbed()
    .setColor('#ff9900')
    .setTitle('Doggo :dog:')
    .setImage(body.url)

  message.channel.send(dogEmbed)
}

module.exports.help = {
  name: 'doggo'
}
