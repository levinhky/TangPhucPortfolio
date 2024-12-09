import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://appwrite.1202design.com/v1")
  .setProject("674d8b64001cb527872c");

export const account = new Account(client);
export const databases = new Databases(client)
export { ID } from "appwrite";
