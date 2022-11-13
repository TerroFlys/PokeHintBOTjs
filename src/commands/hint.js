import { SlashCommandBuilder } from "discord.js"



const hint = new SlashCommandBuilder().setName('hint')
  .setDescription('Gives a hint!').addStringOption((option) =>
    option.setName('given hint').setDescription('Give the Given pokeTwo Hint to the bot').setRequired(true))

export default hint.toJSON()