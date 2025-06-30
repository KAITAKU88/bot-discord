// index.js
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once('ready', () => {
  console.log(`✅ Bot đã sẵn sàng! (${client.user.tag})`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

//Gửi tin nhắn chào mừng khi có thành viên mới gia nhập: 
client.on('guildMemberAdd', (member) => {
//   Tìm kênh có tên chính xác
  const channel = member.guild.channels.cache.find(
    ch =>
      ch.name.includes('chào-mừng-tự-giới-thiệu') &&
      ch.type === 0 // type 0 là TextChannel (Discord.js v14)
  );



  if (channel) {
    channel.send(`👋 Chào mừng <@${member.id}> đến với server! Hãy giới thiệu một chút về bạn nhé: `);
  } else {
    console.log('⚠️ Không tìm thấy kênh chào mừng!');
  }
});

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is alive!');
}).listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});


client.login(process.env.DISCORD_TOKEN);
