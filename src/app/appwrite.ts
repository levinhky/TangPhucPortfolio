import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://appwrite.1202design.com/v1")
  .setProject("674d8b64001cb527872c");

export const account = new Account(client);
export { ID } from "appwrite";
