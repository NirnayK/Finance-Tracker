import db from "@/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('[server]: ', req.body);
    let num = 0;

    if (req.body.expense_id) {
      let q = `UPDATE expenses SET `;
      let error = {};
      if (req.body.desc) {
        num++;
        q = q + `expense_desc = '${req.body.desc}'`;
      }

      if (req.body.amount) {
        if (!isNaN(req.body.amount)) {
          if (num !== 0) {
            q = q + ', ';
          }
          num++;
          q = q + `expense_amt = ${req.body.amount}`;
        } else {
          error = {
            ...error,
            amount: 'Enter a valid amount'
          };
        }
      }

      if (req.body.date) {
        if (!isNaN(Date.parse(req.body.date))) {
          if (num !== 0) {
            q = q + ', ';
          }
          num++;
          q = q + `expense_date = '${req.body.date}'`
        } else {
          error = {
            ...error,
            expense_date: 'Enter a valid date'
          };
        }
      }

      if (req.body.category) {
        if (!(req.body.category === 'Miscellaneous' ||
          req.body.category === 'Entertainment' ||
          req.body.category === 'Shopping' ||
          req.body.category === 'Groceries' ||
          req.body.category === 'Travel')) {

          error = {
            ...error,
            category: 'Enter a valid category'
          };
        } else {
          if (num !== 0) {
            q = q + ', ';
          }
          num++;
          q = q + `expense_category = '${req.body.category}'`;
        }
      }

      if (num === 0) {
        error = {
          ...error,
          error: 'Nothing to edit',
        };
      }

      if (Object.keys(error).length !== 0) {
        res.status(200).json({error});
      } else {
        q = q + ` WHERE expense_id='${req.body.expense_id}'`;
        console.log('[server]:', q);

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