interface PostgresDatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

interface DatabaseConfig {
    Postgres: PostgresDatabaseConfig;
}

interface ServerConfig {
    env: string;
    port: number;
    limiter: {
        limit: number;
        windowMs: number;
    };
}