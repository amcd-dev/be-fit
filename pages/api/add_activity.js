import sql from "../../lib/db";

async function addActivity (uid, activityName, type, day, sets, reps, weight_kg, notes) {
    const activity = await sql `
            insert into activity (uid, activity, type, day, sets, reps, weight_kg, notes) values (${ uid }, ${ activityName }, ${ type }, ${ day }, ${ sets }, ${ reps }, ${ weight_kg }, ${ notes }) returning *
    `
    return activity
}

export default async function handler(req, res) {
    const uid = req.query.uid
    const activityName = req.body.activityName
    const type = req.body.type
    const day = req.body.day
    const sets = req.body.sets
    const reps = req.body.reps
    const weight_kg = req.body.weight_kg
    const notes = req.body.notes

    const result = await addActivity(uid, activityName, type, day, sets, reps, weight_kg, notes)
    res.status(200).json(result)
}

