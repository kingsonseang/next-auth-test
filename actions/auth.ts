"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { object, number, string } from "zod";
import { signIn } from "@/auth";

const authValidator = object({
  id: number(),
  username: string(),
  email: string().email(),
  firstName: string(),
  lastName: string(),
  gender: string(),
  image: string(),
  token: string(),
  refreshToken: string(),
}).transform((transform) => ({
  name: `${transform.firstName} ${transform.lastName}`,
  image: transform.image,
  id: String(transform.id),
}));

export async function authenticate({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const auth = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    }).then((res) => res.json());

    // do zod validation
    const parsedData = authValidator.safeParse(auth);

    // user found and schema validated
    if (parsedData.success) {
      return parsedData.data;
    }

    console.log(auth);
    // user not found
    return null;
  } catch (e) {
    console.error(e);

    // an unexected error occured
    return null;
  }
}

/**
 * @param prevState - the previous error state
 * @param formData - the form data
 * @returns the updated error state
 */
export async function authenticateUser(
  prevState: string | undefined,
  formData: FormData,
) {
  let errored = false;
  try {
    await signIn("credentials", formData, { redirectTo: "/" });
  } catch (error) {
    errored = true;
    return authErrorHandler(error);
  } finally {
    if (!errored) {
      console.log("came here");
      redirect("/");
    }
  }
}
const authErrorHandler = (error: unknown) => {
  if (error instanceof AuthError) {
    switch (error.type) {
      case "CredentialsSignin":
        return "Invalid credentials.";
      default:
        return "Something went wrong.";
    }
  }

  if (isRedirectError(error)) {
    redirect("/");
    // throw error;
  }

  return "An unexpected error occurred.";
};
