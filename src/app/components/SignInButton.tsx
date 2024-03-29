"use client";

import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();
  console.log("Session:", session);

  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          {session.user.name ? (
            <Link href={"/profile"}>{session.user.name}</Link>
          ) : session.user.firstName && session.user.lastName ? (
            <Link href={"/profile"}>
              {`${session.user.firstName} ${session.user.lastName}`}
            </Link>
          ) : (
            <span>No Name Available</span>
          )}
          <Link
            className="tex-sky-500 hover:text-sky-600 transition-colors"
            href={"/api/auth/signout"}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign In</Button>
          <Button as={Link} href={"/auth/signup"}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
};

export default SigninButton;
