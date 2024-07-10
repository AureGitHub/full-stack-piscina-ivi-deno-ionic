
import { Client } from "../../dep/deps.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const { DATABASE_URL } = Deno.env.toObject();
const client = new Client(DATABASE_URL);
await client.connect();

export default client;