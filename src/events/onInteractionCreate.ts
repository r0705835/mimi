import { Interaction } from "discord.js";
import { client } from "..";

export const onInteractionCreate = async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    try {
        const { commandName } = interaction;
        client.commands.get(commandName)?.run(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}
