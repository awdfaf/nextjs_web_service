import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, resp){
    if (req.method == 'POST'){
        try {

            let session = await getServerSession(req, resp, authOptions)
            const db = (await connectDB).db('forum')
            let find = await db.collection('post').findOne({ _id : new ObjectId(req.body) })
            
            if (find.author == session.user.email){
                let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
                if (result.deletedCount == 1){
                    resp.status(200).json("삭제완료")
                }
                else{
                    resp.status(500)
                }
            }
            else{
                return resp.status(500).json('현재유저와 작성자 불일치')
            }    
        } catch (error) {
            resp.status(500)
        }
    }
        
        

}