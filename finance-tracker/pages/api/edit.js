import db from "@/db";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.expense_id && Number.isInteger(req.body.expense_id)) {
            let q = `UPDATE expenses SET `;
            let error = {};
            if (req.body.desc) {
                q = q + `expense_desc = '${req.body.desc}' `;
            }

            if (req.body.amount) {
                if (!isNaN(req.body.amount)) {
                    q = q + `expense_amt = ${req.body.amount} `;
                } else {
                    error = {
                        ...error,
                        amount: 'Enter a valid amount'
                    };
                }
            }

            if (req.body.date) {
                if (!isNaN(Date.parse(req.body.date))) {
                    q = q + `expense_date = '${req.body.date}'`
                } else {
                    error = {
                        ...error,
                        expense_date: 'Enter a valid date'
                    };
                }
            }

            if (Object.keys(error).length !== 0) {
                res.status(200).json({error});
            } else {
                q = q + `WHERE expense_id=${req.body.expense_id}`;

                try {
                    const result = await db.query(q);
                    res.status(200).json({data: result});
                } catch (e) {
                    console.log(`[server] ${e.toString()}`);
                    res.status(200).json({error: e.toString()});
                }
            }
        } else {
            res.status(200).json({expense_id: 'Please provide a valid expense_id'});
        }
    }
}