import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { ExtendedClient } from "../structures/Client";

export const onceReady = async (client: ExtendedClient) => {
    console.log("Connected to Discord!");

    const commands = client.commands.map(command => command.data.toJSON());
    const rest = new REST({ version: '9' }).setToken(process.env.token!);

    rest.put(Routes.applicationGuildCommands(process.env.clientId!, process.env.guildId!), { body: commands });
}
