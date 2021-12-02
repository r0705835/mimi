import Collection from "@discordjs/collection";
import { CommandInt } from "../interfaces/CommandInt";
import { echo } from "./echo";
import { ping } from "./ping";
import { whitelist } from "./whitelist";


export const CommandList: Collection<string, CommandInt> = new Collection();
CommandList.set(ping.data.name, ping);
CommandList.set(whitelist.data.name, whitelist);
CommandList.set(echo.data.name, echo);
