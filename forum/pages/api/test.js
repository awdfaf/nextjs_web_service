export default function handler(req, resp) {
    if (req.method == 'GET'){
        console.log(req.query)
        resp.status(200).json()
    }
    if (req.method == 'POST'){
        console.log(req.query)
        resp.status(200).json()
    }
}