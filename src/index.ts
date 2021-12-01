import { Client, Intents } from "discord.js";
import { token } from "./config.json";
import { onInteractionCreate } from "./events/onInteractionCreate";


(async () => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS]
    });
    
    client.once("ready", () => {
        console.log("Connected to Discord!")
    });
    client.on("interactionCreate", async interaction => onInteractionCreate(interaction));
    
    await client.login(token);
})();
