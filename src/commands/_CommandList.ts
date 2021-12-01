import { SlashCommandBuilder } from "@discordjs/builders";
import Collection from "@discordjs/collection";

export const CommandList: Collection<string, SlashCommandBuilder> = new Collection();