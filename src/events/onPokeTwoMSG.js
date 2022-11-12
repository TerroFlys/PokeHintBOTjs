import {pokeUtility} from "../util/pokeUtility.js";

export function onPokeTwoMSG(msg) {
    msg.channel.send(pokeUtility(msg.content.replace("The pokémon is", '').split(" ")))
}