"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function SignOut() {
  return (
    <Link
      href="/"
      className={buttonVariants({ variant: "outline" })}
      onClick={() => signOut()}
    >
      Sign out
    </Link>
  );
}
