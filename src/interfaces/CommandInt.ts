import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export interface CommandInt {
    data: SlashCommandBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}