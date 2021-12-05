import Collection from "@discordjs/collection";
import { CommandInt } from "../interfaces/CommandInt";
import { echo } from "./echo";
import { whitelist } from "./whitelist";


export const CommandList: Collection<string, CommandInt> = new Collection();
CommandList.set(whitelist.data.name, whitelist);
CommandList.set(echo.data.name, echo);
