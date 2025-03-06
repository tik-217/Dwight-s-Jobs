// import { AuthOptions, getServerSession } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
//
// const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//         },
//         password: {
//           label: "Password",
//           type: "text",
//         },
//       },
//       // async authorize(credentials, req) {
//       //   if (typeof credentials === "undefined") return null;
//       //
//       //
//       // },
//     }),
//   ],
//   jwt: {},
// };
//
// const getSession = () => getServerSession(authOptions);
//
// export { authOptions, getSession };
