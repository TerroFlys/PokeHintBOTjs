import { pokeUtility } from "../util/pokeUtility.js";

export function onBotMessage(msg) {
  const parts = msg.content.split(" ");
  if (parts.length === 1) {
    msg.channel.send("Type 'tb! help' for more info")
    return
  }
  if (parts[1].includes("help")) {
    msg.reply("This bot only works with PokeTwo messages or if you have a hint from eg. another server, you can type 'tb! hint <hint>'");
    return
  }
  if (parts[1].includes("hint")) {
    if (parts.length === 2) {
      msg.reply("Usage: `tb! hint <hint>`\nExample: `tb! hint ____ ____`")
      return
    }
    msg.reply(pokeUtility(parts.slice(2, parts.length)))

    return
  }
  msg.reply("Unknown Command!")
}