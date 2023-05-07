import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, resp){
    let session = await getServerSession(req, resp, authOptions)
    if (session) {
        req.body.author = session.user.email
    }
    if (req.method == "POST"){
        if (req.body.title == '') {
            return resp.status(500).json('제목써라')
        }
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(req.body)
            return resp.redirect(302,'/list')
        } catch (error) {
            
        }
        
        
        
        
    }
    
}