import Collection from "@discordjs/collection";
import { Client, Intents } from "discord.js";
import { onceReady } from "../events/onceReady";
import { onInteractionCreate } from "../events/onInteractionCreate";
import { CommandInt } from "../interfaces/CommandInt";

class ExtendedClient extends Client {
    public commands: Collection<string, CommandInt> = new Collection();

    constructor() {
        super({ intents: Intents.FLAGS.GUILDS });
    }

    start() {
        this.events();
        this.login(process.env.token);
    }

    async events() {
        this.once("ready", (client) => onceReady(client));
        this.on("interactionCreate", async interaction => onInteractionCreate(interaction));
    }
}

export default ExtendedClient;