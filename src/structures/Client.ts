import { Client, Collection, Intents } from "discord.js";
import { echo } from "../commands/echo";
import { ping } from "../commands/ping";
import { whitelist } from "../commands/whitelist";
import { onceReady } from "../events/onceReady";
import { onInteractionCreate } from "../events/onInteractionCreate";
import { CommandInt } from "../interfaces/CommandInt";

export class ExtendedClient extends Client {
    commands: Collection<string, CommandInt> = new Collection();

    constructor() {
        super({
            intents: [Intents.FLAGS.GUILDS]
        });
    }

    async start() {
        this.registerCommands();
        this.registerEvents();
        await this.login(process.env.token);
    }

    registerCommands() {
        this.commands.set(ping.data.name, ping);
        this.commands.set(whitelist.data.name, whitelist);
        this.commands.set(echo.data.name, echo);
    }

    async registerEvents() {
        this.once("ready", async () => onceReady());
        this.on("interactionCreate", async interaction => onInteractionCreate(interaction));
    }
}
