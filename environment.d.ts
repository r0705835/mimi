declare global {
    namespace NodeJS {
        interface ProcessEnv {
            token: string;
            clientId: string;
            guildId: string
            consoleChannelId: string;
        }
    }
}

export {};
