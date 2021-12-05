import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandList";
require("dotenv").config();


export const onceReady = async (client: Client) => {
    console.log("Connected to Discord!");

    const commands = CommandList.map(command => command.data.toJSON());
    const rest = new REST({ version: '9' }).setToken(process.env.token!);

    rest.put(Routes.applicationGuildCommands(process.env.clientId!, process.env.guildId!), { body: commands });
}
