import db from "@/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        if (req.body.user_id && !isNaN(req.body.user_id)) {
            const q = `SELECT * FROM expenses WHERE user_id=${req.body.user_id}`;
            try {
                const result = await db.query(q);
                res.status(200).json({data: result.rows});
            } catch (e) {
                console.log(`[server] ${e.toString()}`);
                res.status(200).json({error: e.toString()});
            }
        } else {
            res.status(200).json({user_id: "Please provide a valid user_id"});
        }
    }
}