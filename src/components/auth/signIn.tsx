"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function SignIn() {
  return (
    <Link
      href="/"
      className={buttonVariants({ variant: "outline" })}
      onClick={() => signIn()}
    >
      Sign in
    </Link>
  );
}
