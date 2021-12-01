import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInt } from "../interfaces/CommandInt";

export const ping: CommandInt = {
    data: new SlashCommandBuilder(),
    run: async (Interaction) => {
        console.log("Not implemented yet!");
    }
}