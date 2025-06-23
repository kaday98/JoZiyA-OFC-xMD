/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PUT YOUR SESSION ID HERE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/c8nfl9.png",
MENU_IMG: process.env.MENU_IMG || "https://mega.nz/file/jRlk2BSB#hIafScnEXfk0h0EvMweXUgYwS9MRkHX5XyeBIqWPSSY",
ALIVE_MSG: process.env.ALIVE_MSG || "🥵𝐇𝐈. 𝐈 𝐀𝐌 👑𝐉𝐎𝐒𝐈𝐘𝐀_𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋-𝐗𝐌𝐃, 𝐀 𝐅𝐑𝐈𝐄𝐍𝐃𝐋𝐘 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐅𝐑𝐎𝐌 𝐒𝐋🇱🇰😅, 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐑𝐀𝐌𝐄𝐒𝐇 𝐒𝐀𝐌𝐏𝐀𝐓𝐇. 𝐃𝐎𝐍𝐓 𝐖𝐎𝐑𝐑𝐘, 𝐈 𝐦 𝐬𝐭𝐢𝐥𝐥l 𝐚𝐥𝐢𝐯𝐞.𝐨𝐤 𝐡𝐚𝐯𝐞 𝐚 𝐧𝐢𝐜𝐞 𝐝𝐚𝐲 𝐞𝐧𝐣𝐨𝐲 𝐭𝐡𝐞 𝐛𝐨𝐭☺🚀",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "✦⚜JoZiyA-OFC-xMD🚀💥✦",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};