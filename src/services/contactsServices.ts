import { promises as fs } from "fs";
import path from "path";

import { HttpError } from "../helpers/HttpError";

export interface Contact {
  email: string;
  number?: string;
}

const contactsPath = path.join("src", "db", "contacts.json");

export async function listContacts(): Promise<Contact[]> {
  try {
    const readResult = await fs.readFile(contactsPath, { encoding: "utf-8" });

    const parsedRes: Contact[] = JSON.parse(readResult);

    return parsedRes;
  } catch (error) {
    throw HttpError(500, "Internal server error");
  }
}

export async function getContactByEmail(
  contactEmail: string,
  number: string | undefined
): Promise<Contact | Contact[] | null> {
  try {
    const contactsArr = await listContacts();

    const filteredContacts = contactsArr.filter(
      (contact) =>
        contact.email === contactEmail &&
        (number === undefined || contact.number === number)
    );

    if (filteredContacts.length === 0) {
      return null;
    }

    return number === undefined
      ? filteredContacts
      : filteredContacts[0] || null;
  } catch (error) {
    throw HttpError(500, "Internal server error");
  }
}
