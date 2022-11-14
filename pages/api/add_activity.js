import sql from "../../lib/db";

async function addActivity (uid, activityName, type, day, notes) {
    const activity = await sql `
            insert into activity (uid, activity, type, day, notes) values (${ uid }, ${ activityName }, ${ type }, ${ day }, ${ notes }) returning *
    `
    return activity
}

export default async function handler(req, res) {
    // console.log('>>> logging req.query', req.query)
    const uid = req.query.uid
    const activityName = req.query.activityName
    const type = req.query.type
    const day = req.query.day
    const notes = req.query.notes
    const result = await addActivity(uid, activityName, type, day, notes)
    res.status(200).json(result)
}

