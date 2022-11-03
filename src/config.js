export default Config = {
    firebase: {},
    mongodb: {
        url: "mongodb+srv://Johnny:4321@codercluster.t32ywpi.mongodb.net/?retryWrites=true&w=majority",
        options: {
            serverSelectionTimeoutMS: 5000,
        },
    },
    mariadb: {
        client: "mysql",
        connection: {
            host: "localhost",
            port: 3306,
            user: "root",
            database: "coderhouse-db",
        },
    },
    sqlite: {
        client: "sqlite3",
        connection: {
            filename: "./src/DB/ecommerce.sqlite3",
        },
        useNullAsDefault: true,
    },
};