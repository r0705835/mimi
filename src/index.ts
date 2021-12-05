import { Client, Intents } from "discord.js";
import { onceReady } from "./events/onceReady";
import { onInteractionCreate } from "./events/onInteractionCreate";
require("dotenv").config();


(async () => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS]
    });
    
    client.once("ready", (client) => onceReady(client));
    client.on("interactionCreate", async interaction => onInteractionCreate(interaction));
    
    await client.login(process.env.token);
})();
