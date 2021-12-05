import Collection from "@discordjs/collection";
import { ApplicationCommandDataResolvable, Client, ClientEvents, Intents } from "discord.js";
import glob from "glob";
import { promisify } from "util";
import { RegisterCommandsOptions } from "../typings/Client";
import { CommandType } from "../typings/Command";
import { Event } from "./Event";

const globPromise = promisify(glob);

class ExtendedClient extends Client {
    public commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({ intents: Intents.FLAGS.GUILDS });
    }

    start() {
        this.registerModules();
        this.login(process.env.token);
    }

    async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
        if (guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands);
            console.log(`Registering commands to ${guildId}`);
        } else {
            this.application?.commands.set(commands);
            console.log("Registering global commands");
        }
    }

    async registerModules() {
        const slashCommands: ApplicationCommandDataResolvable[] = [];
        const commandFiles = await globPromise(
            `${__dirname}/../commands/*/*{.ts,.js}`
        );
        commandFiles.forEach(async (filePath) => {
            const command: CommandType = await this.importFile(filePath);
            if (command.name === "ping") {
                console.log(command);

                this.commands.set(command.name, command);
                slashCommands.push(command);
            }
        });

        this.once("ready", () => {
            this.registerCommands({
                commands: slashCommands,
                guildId: process.env.guildId
            });
        });

        const eventFiles = await globPromise(
            `${__dirname}/../events/*{.ts,.js}`
        );

        eventFiles.forEach(async (filePath) => {
            const event: Event<keyof ClientEvents> = await this.importFile(
                filePath
            );
            this.on(event.event, event.run);
        });
    }
}

export default ExtendedClient;