import sql from "../../lib/db";

async function editActivity (uid, id, activityName, type, sets, reps, weight_kg, notes) {
    const activity = await sql `
        UPDATE activity
        SET activity = ${ activityName },
            type = ${ type },
            sets = ${ sets },
            reps = ${ reps },
            weight_kg = ${ weight_kg },
            notes = ${ notes }
        WHERE id = ${ id } AND uid = ${ uid }
        RETURNING *
    `
    return activity
}

export default async function handler(req, res) {
    console.log(req.body)
    const uid = req.query.uid
    const id = req.query.id
    const activityName = req.body.activityName
    const type = req.body.type
    const sets = req.body.sets
    const reps = req.body.reps
    const weight_kg = req.body.weight_kg
    const notes = req.body.notes

    const result = await editActivity(uid, id, activityName, type, sets, reps, weight_kg, notes)
    res.status(200).json(result)
}