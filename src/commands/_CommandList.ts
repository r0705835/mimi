import Collection from "@discordjs/collection";
import { CommandInt } from "../interfaces/CommandInt";
import { ping } from "./ping";

export const CommandList: Collection<string, CommandInt> = new Collection();
CommandList.set(ping.data.name, ping);