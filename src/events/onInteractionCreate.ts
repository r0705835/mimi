import { Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList";


export const onInteractionCreate = async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    try {
        const { commandName } = interaction;
        CommandList.get(commandName)?.run(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}
