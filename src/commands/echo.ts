import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";

export const echo: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("Sends a message through the bot!"),
    run: async (interaction) => {
        console.log("Not implemented yet!");
    }
}