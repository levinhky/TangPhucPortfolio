import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67566d5800398e6657ba");

export const account = new Account(client);
export { ID } from "appwrite";
