import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { Router } from "next/router";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 1500,
    secret: "ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=",
  },
  providers: [
    CredentialsProviders({
      name: "Custom Provider",
      async authorize(credentials) {
        let { email, password } = credentials;
        console.log(credentials, "for credentials");
        let data = { email: email, password: password };
        console.log(data, "form email and password");
        let response = await axios.post(
          "http://18.204.222.172:6000/api/v1/auth/loginadmin",
          data
        );
        console.log(response, "response");
        let user = response.data;
        let token = response.data.data;
      localStorage.setItem("token",token)
        // console.log(token, 'for token')

        // if (!token) {
        //   throw new Error("Invalid token");
        // }
        if (!(response.status == 200)) {
          throw new Error("Invalid Credentials" + email);
        }
        if (response.status == 200) {
          return (user = {
            name: token,
            email: email,
          });
        
        }
      },
    }),
  ],
});
