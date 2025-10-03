export interface PostgresDatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

export interface DatabaseConfig {
    Postgres: PostgresDatabaseConfig;
}

export interface ServerConfig {
    env: string;
    port: number;
    limiter: {
        limit: number;
        windowMs: number;
    };
}