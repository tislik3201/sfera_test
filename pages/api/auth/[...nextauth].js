import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import {compare} from 'bcryptjs'
 
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { input: "Username", type: "text", placeholder: "username" },
                password: { input: "Password", type: "password" }
              },
            async autorize(credentials, req){
                connectMongo().catch(error=> {error: "Connection Failed"})

                const result = await Users.findOne({username: credentials.username})
                if(!result) {
                    throw new Error("No user found with username Please Sign Up!")
                }

                const checkPassword = await compare(credentials.password, result.password)
                if(!checkPassword || result.username !== credentials.username) {
                    throw new Error("Username  or password doesnt match")
                }
               
                return result || null
               
            }
        })
    ],
    secret: "XH6bp/TkLvnUkQiPDEZNyHcOCV+VV5RL/n+HdVjoHNo=",
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token }) {
          token.userRole = "user"
          return token
        },
      },
}) 
