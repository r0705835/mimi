import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Sends pong back!",
    run: async ({ interaction }) => {
        interaction.followUp({
            content: "Pong!",
            ephemeral: true
        });
    }
});
