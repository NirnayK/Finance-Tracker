import db from "@/db";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.expense_id && Number.isInteger(req.body.expense_id) && req.body.expense_id > 0) {
            try {
                const result = db.query(`DELETE FROM expenses WHERE expense_id=${req.body.expense_id}`);
                res.status(200).json({result});
            } catch (e) {
                console.log(`[server] ${e.toString()}`);
                res.status(200).json({error: e.toString()});
            }
        } else {
            res.status(200).json({expense_id: 'Please provide a valid expense_id'});
        }
    }
}