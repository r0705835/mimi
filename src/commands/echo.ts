import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";

export const echo: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .addStringOption(option =>
            option.setName("title")
                .setDescription("The title of the the message.")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("message")
                .setDescription("The content of the message.")
                .setRequired(true))
        .setDescription("Sends a message through the bot!"),
    run: async (interaction) => {
        await interaction.reply({
            content: "The message should have been sent!",
            ephemeral: true
        })
    }
}