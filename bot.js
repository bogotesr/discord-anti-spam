require('dotenv').config();
const{ Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

const usersMap = new Map();

/*
'id' => {
    msgCount: 0,
    LastMessage: 'message',
    timer: fn()

}
 */
client.on('message', message => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        let msgCount = usersData.msgCount;
        if(parseInt(msgCount) === 5) {
            const role = message.guild.roles.cache.get('753330172358295580');
            message.member.roles.add(role);
            message.channel.send('You have been muted.');
        } else {
            msgCount++;
            userData.msgCount = msgCount;
            usersMap.set(message.author.id, userData);
        }
    }
    else {
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
        });
        setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('removed from map.');
        }, 5000);
    }
});