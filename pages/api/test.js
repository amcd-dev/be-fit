import sql from "../../lib/db";
import NextCors from "nextjs-cors";

async function getStrength (uid, day) {
    const activity = await sql `
            select * from activity where uid = ${ uid } AND day = ${ day }
    `
    return activity
}

export default async function handler(req, res) {
    console.log('Received time line fetch')
    // console.log('>>> logging req.query', req.query)
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });


    const uid = req.query.uid
    const day = req.query.day
    const result = await getStrength(uid, day)
    res.status(200).json(result)
}

