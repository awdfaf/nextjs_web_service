export default function handler(req, resp){
    let a = new Date()
    resp.status(200).json(a)
}