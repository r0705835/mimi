import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";


export const whitelist: CommandInt = {
    data: new SlashCommandBuilder()
        .setName("whitelist")
        .setDescription("Whitelist yourself to the Atomic SMP minecraft server!"),
    run: async (interaction) => {
        console.log("Not implemented yet!");
    }
}
