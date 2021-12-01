import { Client, Intents } from "discord.js";
import { token } from "./config.json";
import { onceReady } from "./events/onceReady";
import { onInteractionCreate } from "./events/onInteractionCreate";


(async () => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS]
    });
    
    client.once("ready", (client) => onceReady(client));
    client.on("interactionCreate", async interaction => onInteractionCreate(interaction));
    
    await client.login(token);
})();
