import { SlashCommandBuilder } from "@discordjs/builders";
import { TextChannel } from "discord.js";
import { CommandInt } from "../interfaces/CommandInt";


export const whitelist: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("whitelist")
        .addStringOption(option =>
            option.setName("username")
                .setDescription("The username of your minecraft account.")
                .setRequired(true))
        .setDescription("Whitelist yourself to the Atomic SMP minecraft server!"),
    run: async (interaction) => {
        try {
            const consoleChannel = await interaction.guild?.channels.fetch("910160166236880926")!;
            (consoleChannel as TextChannel).send("whitelist add " + interaction.options.getString("username"));
            interaction.reply({
                content: "You have successfully been whitelisted to the minecraft server, enjoy your stay!",
                ephemeral: true
            })
        } catch (error) {
            console.error(error);
        }
    }
}
