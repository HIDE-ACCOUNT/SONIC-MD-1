
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}SONIC-MD WA BOT
          
                 PING 
                 
pong : ${latensi.toFixed(4)} ms    

Created By  KALINDU

🔊  https://github.com/KALINDU-LK/SONIC-MD`);
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
