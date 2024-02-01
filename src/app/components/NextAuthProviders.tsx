import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

const NextAuthProviders = () => {
  const googleSignIn = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: "/",
        redirect: false, // Prevent automatic redirection after sign in
      });

      console.log("Authentication Result:", result);
    } catch (error) {
      console.error("Authentication Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 border-t m-3">
      <Button onClick={googleSignIn}>Sign in with Google</Button>
    </div>
  );
};

export default NextAuthProviders;
