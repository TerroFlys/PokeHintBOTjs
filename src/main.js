import {ActivityFlagsBitField, Client, Events, GatewayIntentBits} from "discord.js";
import {onPokeTwoMSG} from "./events/onPokeTwoMSG.js";
import {onBotMessage} from "./events/onBotMessage.js";


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(ActivityFlagsBitField.Flags.SPECTATE)
});

const pokeTwoID = 716390085896962058
const pokeTwoHintMsg = "The pokémon is"

client.on("messageCreate",(msg) => {
    if (msg.author.id === pokeTwoID && msg.content.includes(pokeTwoHintMsg)) onPokeTwoMSG(msg);
    if (msg.author.id !== pokeTwoID && msg.content.startsWith("tb!")) onBotMessage(msg) ;
});

// client.on(Events.InteractionCreate, (interaction) => {
//     console.log(interaction)
// } )


client.login(process.env.TOKEN);