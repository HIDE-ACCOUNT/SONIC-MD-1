
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
🇱🇰 *DONATE* 🇱🇰
If you get more info of 💝 SONIC-MD 💝 Please Contact 94758179948 💰`
let img = 'https://imgur.com/a/JtCzwRm'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
