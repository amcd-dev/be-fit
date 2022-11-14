import sql from "../../lib/db";

async function deleteActivity (uid, activityId) {
    const activity = await sql `DELETE FROM activity WHERE uid = ${uid} AND id = ${activityId} returning * `
    return activity
}

export default async function handler(req, res) {
    const uid = req.query.uid
    const activityId = req.query.id
    const result = await deleteActivity(uid, activityId)
    res.status(200).json(result)
}