import { cookies } from "next/headers";

/**
 * Checks if the user is logged in.
 * @returns {Promise<boolean>} A promise that resolves to true if the user is logged in, false otherwise.
 */
export async function isUserLoggedIn() {
    return cookies().has("token");
}