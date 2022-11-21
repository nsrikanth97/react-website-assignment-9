interface Config
{
    server : string;   
    port: number;   
    settings: string[];
}

export const CONFIG: Config = {
    server : "http://localhost:",
    port: 3000,
    settings: [
        "=[tor.start]",
        "=[copp.start]"
    ]
}