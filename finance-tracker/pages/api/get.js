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


/*
CREATE TABLE expenses
                    (
                        expense_id       char(36)     NOT NULL,
                        expense_desc     varchar(255) NOT NULL,
                        user_id          INT          NOT NULL,
                        expense_amt      REAL         NOT NULL,
                        expense_date     DATE         NOT NULL,
                        expense_category Category NOT NULL,
                        PRIMARY KEY (expense_id),
                        FOREIGN KEY (user_id) REFERENCES users (user_id)
                    );

CREATE TABLE users (
                    user_name varchar(255) NOT NULL,
                    phone_num char(10)     NOT NULL UNIQUE,
                    email     varchar(255) NOT NULL UNIQUE,
                    PRIMARY KEY (email)
                );
 */