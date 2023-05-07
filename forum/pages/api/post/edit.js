import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, resp){
    if (req.method == "POST"){
        let changes = {
            title : req.body.title,
            content : req.body.content
        }
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').updateOne({_id : new ObjectId(req.body._id)},
        {$set : changes})
        resp.redirect(302, '/list')
    }
}