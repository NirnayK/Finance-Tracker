import db from "@/db";
import {v4 as uuidv4} from 'uuid';

const checkBody = (body) => {
    let error = {};

    if (!Boolean(body.email)) {
        error = {
            ...error,
            email: 'email field cannot be empty',
        };
    }

    if (!Boolean(body.desc)) {
        error = {
            ...error,
            desc: 'Description name field cannot be empty',
        };
    }

    if (!Boolean(body.amount)) {
        error = {
            ...error,
            amount: 'amount field cannot be empty',
        };
    }

    if (!Boolean(body.date)) {
        error = {
            ...error,
            date: 'date field cannot be empty',
        };
    }

    if (!Boolean(body.category)) {
        error = {
            ...error,
            category: 'Category field cannot be empty',
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

    if (!(body.category === 'Miscellaneous' ||
        body.category === 'Entertainment' ||
        body.category === 'Shopping' ||
        body.category === 'Groceries' ||
        body.category === 'Travel')) {
        error = {
            ...error,
            category: 'Enter a valid category'
        }
    }

    return error;
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        const error = checkBody(req.body);

        if (Object.keys(error).length !== 0) {
            res.status(200).json({
                error,
            });
        } else {
            try {
                const id = uuidv4();
                const query = `INSERT INTO expenses (expense_id, expense_desc, email, expense_amt, expense_date, expense_category) VALUES (
                    '${id}',
                    '${req.body.desc}',
                    '${req.body.email}',
                    ${req.body.amount},
                    '${req.body.date}',
                    '${req.body.category}'
                );`

                const result = await db.query(query);

                res.status(200).json({
                    message: 'Success',
                    data: id
                });
            } catch (e) {
                console.log(`[server] ${e}`);
                res.status(200).json({error: e.toString()});
            }
        }
    }
}