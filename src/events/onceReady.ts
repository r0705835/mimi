import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandList";
import { clientId, guildId, token } from "../config.json";


export const onceReady = async (client: Client) => {
    console.log("Connected to Discord!");

    const commands = CommandList.map(command => command.data.toJSON());
    const rest = new REST({ version: '9' }).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
}
