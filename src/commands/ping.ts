import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";

export const ping: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Sends pong back!"),
    run: async (interaction) => {
        console.log("Not implemented yet!");
    }
}