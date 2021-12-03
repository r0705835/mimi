import Collection from "@discordjs/collection";
import { Client } from "discord.js";
import { CommandInt } from "../interfaces/CommandInt";

class ExtendedClient extends Client {
    public commands: Collection<string, CommandInt> = new Collection();
}

export default ExtendedClient;