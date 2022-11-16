import sql from "../../lib/db";

async function addActivity (uid, activityName, type, day, sets, reps, weight_kg, weight_lb, distance_km, distance_mi, distance_m, distance_yd, incline, duration_min, notes) {
    const activity = await sql `
            insert into activity (uid, activity, type, day, sets, reps, weight_kg, weight_lb, distance_km, distance_mi, distance_m, distance_yd, incline, duration_min, notes) 
            values (${ uid }, ${ activityName }, ${ type }, ${ day }, ${ sets }, ${ reps }, ${ weight_kg }, ${weight_lb}, ${distance_km}, ${distance_mi}, ${distance_m}, ${distance_yd}, ${incline}, ${duration_min}, ${ notes }) 
            returning *
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
    const weight_lb = req.body.weight_lb
    const distance_km = req.body.distance_km
    const distance_mi = req.body.distance_mi
    const distance_m = req.body.distance_m
    const distance_yd = req.body.distance_yd
    const incline = req.body.incline
    const duration_min = req.body.duration_min
    const notes = req.body.notes

    const result = await addActivity(uid, activityName, type, day, sets, reps, weight_kg, weight_lb, distance_km, distance_mi, distance_m, distance_yd, incline, duration_min, notes)
    res.status(200).json(result)
}

