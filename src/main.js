import {ActivityFlagsBitField, Client, GatewayIntentBits} from "discord.js";
import {onPokeTwoMSG} from "./events/onPokeTwoMSG.js";
import {onBotMessage} from "./events/onBotMessage.js";


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(ActivityFlagsBitField.Flags.SPECTATE)
});

const pokeTwoID = '716390085896962058'
const pokeTwoHintMsg = "The pokémon is"

client.on("messageCreate",(msg) => {
    if (msg.author.id === pokeTwoID && msg.content.startsWith(pokeTwoHintMsg)) onPokeTwoMSG(msg);
    if (msg.author.id !== pokeTwoID && msg.content.startsWith("tb!")) onBotMessage(msg) ;
});


client.login(process.env.TOKEN).then(() => console.log("Bot logged in promise"));