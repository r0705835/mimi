import { Client, Intents } from "discord.js";
import { token } from './config.json';


(async () => {
    const client = new Client({
        intents: [Intents.FLAGS.GUILDS]
    });
    
    client.once("ready", () => {
        console.log("Connected to Discord!")
    });
    await client.login(token);
})();
