import db from "@/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.email) {
      const q = `SELECT * FROM expenses WHERE email='${req.body.email}'`;
      try {
        const result = await db.query(q);

        let data = {};

        for (let k of result.rows) {
          console.log(k);
          data = {
            ...data,
            [k.expense_id]: {
              expense_desc: k.expense_desc,
              email: k.email,
              expense_amt: k.expense_amt,
              expense_date: k.expense_date,
              expense_category: k.expense_category
            }
          };
        }

        res.status(200).json({data});
      } catch (e) {
        console.log(`[server] ${e.toString()}`);
        res.status(200).json({error: e.toString()});
      }
    } else {
      res.status(200).json({email: "Please provide a valid email"});
    }
  }
}


/*
                CREATE TABLE expenses
                    (
                        expense_id       char(36)     NOT NULL,
                        expense_desc     varchar(255) NOT NULL,
                        email            varchar(255) NOT NULL,
                        expense_amt      REAL         NOT NULL,
                        expense_date     DATE         NOT NULL,
                        expense_category Category NOT NULL,
                        PRIMARY KEY (expense_id),
                        FOREIGN KEY (email) REFERENCES users (email)
                    );

CREATE TABLE users (
                    user_name varchar(255) NOT NULL,
                    phone_num char(10)     NOT NULL UNIQUE,
                    email     varchar(255) NOT NULL UNIQUE,
                    PRIMARY KEY (email)
                );
 */