const axios = require('axios');
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const { exec } = require('child_process')
const {runtime} = require('../lib/functions')


cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*👨‍💻ＪＯＺＩＹＡ-ＯＦＣ-ＸＭＤ👨‍💻*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡Owner name -: 𝚁𝙰𝙼𝙴𝚂𝙷 𝚂𝙰𝙼𝙿𝙰𝚃𝙷 𝙳𝙸𝚂𝙰𝙽𝙰𝚈𝙰𝙺𝙰*
*⚡Number* -: 94723369091

 ⚡️◦ https://chat.whatsapp.com/DHr93RmkBkRAFIroe6VExx

> *JØⱫłɎ₳ Ø₣₵ Ӿ₥Đ*
`;
await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "owner",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍ℝ𝔼ℙ𝕆-𝕃𝕀ℕ𝕂 ❤️‍🔥👇*

👨‍💻◦https://github.com/kaday98/JOZIYA-XMD


*📍 JØł₦ ØVɆⱤ ₲ⱤɄØ₱ ❤️‍🔥👇*

👨‍💻◦ https://chat.whatsapp.com/DHr93RmkBkRAFIroe6VExx

> *ﾌㄖ乙丨ㄚ卂 ㄖ千匚 乂爪ᗪ*
`;
await conn.sendMessage(from,{image:{url: config.MENU_IMG},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `┌───────────────────────
├ ⏰ *Runtime:-* ${runtime(process.uptime())}
├ 📟 *Ram usage:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform:-* ${os.hostname()}
├ 👨‍💻 *Owners:-* RAMESH_SAMPATH_DISANAYAKA
├ 🧬 *Version:-* 1.0.0
└───────────────────────

> *𝘗𝘖𝘞𝘌𝘙𝘌𝘋 𝘣𝘺 𝘑𝘖𝘡𝘐𝘠𝘈 𝘰𝘧𝘤 𝘟𝘔𝘋*
`;
return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "👋",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});

cmd({
    pattern: "jid",
    desc: "Get the JID of the chat.",
    category: "owner",
   // react: "🔍",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
       
        
        const chatJid = from;

        
       await reply (`${chatJid}`)

    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "restart",
    desc: "restart the bot",
    react :"🔄",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return reply(`only for owner`);
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
// 1. Shutdown Bot
cmd({
    pattern: "shutdown",
    desc: "Shutdown the bot.",
    category: "owner",
    react: "🛑",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    reply("🛑 Shutting down...").then(() => process.exit());
});

// 2. Broadcast Message to All Groups
cmd({
    pattern: "broadcast",
    desc: "Broadcast a message to all groups.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (args.length === 0) return reply("📢 Please provide a message to broadcast.");

    const message = args.join(' ');
    const groups = Object.keys(await conn.groupFetchAllParticipating());

    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: message }, { quoted: mek });
    }

    reply("📢 Message broadcasted to all groups.");
});

// 3. Set Profile Picture
cmd({
    pattern: "setpp",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!quoted || !quoted.message.imageMessage) return reply("❌ Please reply to an image.");

    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply("🖼️ Profile picture updated successfully!");
    } catch (error) {
        reply(`❌ Error updating profile picture: ${error.message}`);
    }
});

// 4. Block User
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!quoted) return reply("❌ Please reply to the user you want to block.");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(`🚫 User ${user} blocked successfully.`);
    } catch (error) {
        reply(`❌ Error blocking user: ${error.message}`);
    }
});

// 5. Unblock User
cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!quoted) return reply("❌ Please reply to the user you want to unblock.");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(`✅ User ${user} unblocked successfully.`);
    } catch (error) {
        reply(`❌ Error unblocking user: ${error.message}`);
    }
});


// 6. Clear All Chats
cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply("🧹 All chats cleared successfully!");
    } catch (error) {
        reply(`❌ Error clearing chats: ${error.message}`);
    }
});

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `📍ﾌㄖ乙丨ㄚ卂 乂爪ᗪ 丂卩乇乇ᗪ : ${ping}ms` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});
