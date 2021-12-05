import { onceReady } from "./events/onceReady";
import { onInteractionCreate } from "./events/onInteractionCreate";
import { ExtendedClient }  from "./structures/Client";
require("dotenv").config();

export const client = new ExtendedClient();
client.start();
(async () => {
    client.once("ready", () => onceReady(client));
    client.on("interactionCreate", async interaction => onInteractionCreate(interaction));
})();
