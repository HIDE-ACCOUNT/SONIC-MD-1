//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('🇱🇰 The welcome message is configured by *💝 SONIC-MD 💝*')
  } else throw `🔊 Enter the Welcome message to *💝 SONIC-MD 💝*\n\n@user (mention)\n@group (Group name)\n@desc (description of group)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
