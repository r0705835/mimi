import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";

export const echo: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .addStringOption(option =>
            option.setName("message")
                .setDescription("The content of the message."))
        .setDescription("Sends a message through the bot!"),
    run: async (interaction) => {
        interaction.reply({
            content: interaction.options.getString("message")!,
            ephemeral: true
        })
    }
}