import { connectDB } from "@/util/database"

export default async function viewList(req, resp){

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    // console.log(result)
    resp.status(200).json(result)
    // if (req.method == 'GET'){
    //     resp.status(200).json({result})
    // }
    // if (req.method == 'POST'){
    //     resp.status(200).json({ name: '바보' })
    // }
}