import { ExtendedClient }  from "./structures/Client";
require("dotenv").config();

const client = new ExtendedClient();
client.start();
