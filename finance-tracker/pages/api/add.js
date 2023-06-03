import db from "@/db";

const checkBody = (body) => {
    let error = {};

    if (!Boolean(body.user_id)) {
        error = {
            ...error,
            user_id: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.desc)) {
        error = {
            ...error,
            desc: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.amount)) {
        error = {
            ...error,
            amount: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.date)) {
        error = {
            ...error,
            date: 'This field cannot be empty',
        };
    }

    if (isNaN(body.amount)) {
        error = {
            ...error,
            amount: 'Enter a valid amount',
        };
    }

    if (isNaN(Date.parse(body.date))) {
        error = {
            ...error,
            date: 'Enter a valid amount',
        };
    }

    return error;
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        // const result = await db.query(`SELECT * FROM users

        const error = checkBody(req.body);

        if (Object.keys(error).length !== 0) {
            res.status(200).json({
                error,
            });
        } else {
            try {
                const query = `INSERT INTO expenses (expense_desc, user_id, expense_amt, expense_date) VALUES ('${req.body.desc}',
                    ${req.body.user_id},
                    ${req.body.amount},
                    '${req.body.date}'
                );`

                const result = await db.query(query);

                res.status(200).json({
                    message: 'Success',
                    data: result
                });
            } catch (e) {
                console.log(`[server] ${e}`);
                res.status(200).json({error: e.toString()});
            }
        }
    }
}