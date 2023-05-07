import { connectDB } from "@/util/database"

import DetailLink from "./DetailLink"
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic'

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    // Convert ObjectId to string
    result = result.map(item => {
        return {
            ...item,
            _id: item._id.toString()
        }
    })


    
    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
        )
    }