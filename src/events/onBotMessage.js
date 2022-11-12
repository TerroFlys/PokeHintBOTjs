export function onBotMessage(msg) {
    const parts = msg.content.split(" ");
    if (parts.length === 1) {
        msg.channel.send("Type 'tb! help' for more info")
        return
    }
    if (parts[1].includes("help")) msg.reply("This bot only works with PokeTwo messages or if you have a hint from eg. another server, you can type 'tb! hint <hint>'")

}