import { Collection, Client, GatewayIntentBits, Partials, Events, REST, Routes } from "discord.js";
import { onPokeTwoMSG } from "./events/onPokeTwoMSG.js";
import { onBotMessage } from "./events/onBotMessage.js";
const BOT_VERSION = "1.0"

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


const commands = [
  {
    name: 'hint',
    description: 'Replies with possible answer!',
    options: [
      {
        name: "hint",
        description: "Hint that the PokeTwo Bot gave",
        type: "3",
        required: "true"
      }
    ]
  },
];

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`BOT version:  ${BOT_VERSION}`)
});

const pokeTwoID = '716390085896962058'
const pokeTwoHintMsg = "The pokémon is"

client.on("messageCreate", (msg) => {
  if (msg.author.id === pokeTwoID && msg.content.startsWith(pokeTwoHintMsg)) onPokeTwoMSG(msg);
  if (msg.author.id !== pokeTwoID && msg.content.startsWith("tb!")) onBotMessage(msg);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hint') {
    await interaction.reply('Please continue using `tb! hint` instead of this!');
  }
});


client.login(process.env.TOKEN).then(() => console.log("Bot logged in promise"));