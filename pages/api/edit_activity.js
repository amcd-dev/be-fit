import sql from "../../lib/db";

async function editActivity (uid, id, activityName, type, sets, reps, weight_kg, weight_lb, distance_km, distance_mi, distance_m, distance_yd, incline, duration_min, notes) {
    const activity = await sql `
        UPDATE activity
        SET activity = ${ activityName },
            type = ${ type },
            sets = ${ sets },
            reps = ${ reps },
            weight_kg = ${ weight_kg },
            weight_lb = ${ weight_lb },
            distance_km = ${ distance_km },
            distance_mi = ${ distance_mi },
            distance_m = ${ distance_m },
            distance_yd = ${ distance_yd },
            incline = ${ incline },
            duration_min = ${ duration_min },
            notes = ${ notes }
        WHERE id = ${ id } AND uid = ${ uid }
        RETURNING *
    `
    return activity
}

export default async function handler(req, res) {
    //TODO turn below into an object to import for edit and add activity APIs
    const uid = req.query.uid
    const id = req.query.id
    const activityName = req.body.activityName
    const type = req.body.type
    const sets = req.body.sets
    const reps = req.body.reps
    const weight_kg = req.body.weight_kg
    const weight_lb = req.body.weight_lb
    const distance_km = req.body.distance_km
    const distance_mi = req.body.distance_mi
    const distance_m = req.body.distance_m
    const distance_yd = req.body.distance_yd
    const incline = req.body.incline
    const duration_min = req.body.duration_min
    const notes = req.body.notes

    const result = await editActivity(uid, id, activityName, type, sets, reps, weight_kg, weight_lb, distance_km, distance_mi, distance_m, distance_yd, incline, duration_min, notes)
    res.status(200).json(result)
}