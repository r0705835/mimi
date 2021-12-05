import { Client, Collection, Intents } from "discord.js";
import { CommandInt } from "../interfaces/CommandInt";

class ExtendedClient extends Client {
    commands: Collection<string, CommandInt> = new Collection();

    constructor() {
        super({
            intents: [Intents.FLAGS.GUILDS]
        });
    }
}