import * as dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ryblu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export { connectionString };