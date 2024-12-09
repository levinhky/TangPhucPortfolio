import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://appwrite.1202design.com/v1")
  .setProject("675674020009e7e1580a");

export const account = new Account(client);
export { ID } from "appwrite";
