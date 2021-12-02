import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
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
        const interactionEmbed = new MessageEmbed();
        interactionEmbed.setTitle(interaction.options.getString("title")!);
        interactionEmbed.setDescription(interaction.options.getString("message")!);
        interactionEmbed.setColor("#00D166");
        await interaction.channel?.send({
            embeds: [interactionEmbed]
        });
        await interaction.reply({
            content: "The message should have been sent!",
            ephemeral: true
        });
    }
}