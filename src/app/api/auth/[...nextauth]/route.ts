// src/app/api/auth/[...nextauth].ts
import NextAuth from "next-auth/next";
import { authOptions } from "./routeConfig";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import prisma from "@/lib/prisma";

// import NextAuth,{NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import * as bcrypt from "bcrypt";
// // import NextAuth from "next-auth/next";

// import { use } from "react";
// import { User } from "@prisma/client";

// export const authOptions: NextAuthOptions = {
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//       idToken: true,
//       authorization: {
//         params: {
//           scope: "openid profile email https://www.googleapis.com/auth/user.phonenumbers.read ",
//         },
//       },
//       // profile(profile) {
//       //   return {
//       //     id: profile.sub,
//       //     name: `${profile.given_name} ${profile.family_name}`,
//       //     email: profile.email,
//       //     image: profile.picture,
//       //     role: profile.role ? profile.role : "user",
//       //     phone: profile.phonenumbers,
//       //   };
//       // },
    
//     }),

//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         username: {
//           label: "User Name",
//           type: "text",
//           placeholder: "Your User Name",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials?.username,
//           },
//         });

//         if (!user) throw new Error("User name or password is not correct");

//         // This is Naive Way of Comparing The Passwords
//         // const isPassowrdCorrect = credentials?.password === user.password;
//         if (!credentials?.password) throw new Error("Please Provide Your Password");
//         const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);

//         if (!isPassowrdCorrect) throw new Error("User name or password is not correct");

//         if (!user.emailVerified) throw new Error("Please verify your email first!");

//         const { password, ...userWithoutPass } = user;
//         return userWithoutPass;
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user as User;
     
//       return token;
     
//     },

//     async session({ token, session }) {
//       session.user = token.user;
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

