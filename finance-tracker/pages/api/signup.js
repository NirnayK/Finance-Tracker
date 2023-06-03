import db from "../../db";
import bcrypt from 'bcrypt';

function validateEmail(mail) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

function validateNum(num) {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(num);
}

const checkBody = (body) => {
    let error = {};

    if (!Boolean(body.user_name)) {
        error = {
            ...error,
            user_name: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.phone_num)) {
        error = {
            ...error,
            phone_num: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.email)) {
        error = {
            ...error,
            email: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.password)) {
        error = {
            ...error,
            password: 'This field cannot be empty',
        };
    }

    if (!Boolean(body.confirmPassword)) {
        error = {
            ...error,
            confirmPassword: 'This field cannot be empty',
        };
    }

    if (body.confirmPassword !== body.password) {
        error = {
            ...error,
            confirmPassword: 'Password and confirm Password doesn\'t match',
        };
    }

    if (!validateEmail(body.email)) {
        error = {
            ...error,
            email: 'Enter a valid email address',
        };
    }

    if (!validateNum(body.phone_num)) {
        error = {
            ...error,
            phone_num: 'Enter a valid phone number',
        };
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
            bcrypt.genSalt(10).then((salt, err) => {
                if (err) {
                    console.log(`[server] 1${err}`);
                    res.json({error: 'Something went wrong'});
                } else {
                    return bcrypt.hash(req.body.password, salt, async (err, hash) => {
                        if (err) {
                            console.log(`[server] 2${err}`);
                            res.json({error: 'Something went wrong'});
                        } else {
                            const query = `INSERT INTO users(user_name, phone_num, email, password) VALUES(
                                        '${req.body.user_name}',
                                        '${req.body.phone_num}',
                                        '${req.body.email}',
                                        '${hash}'
                                    )`
                            ;

                            try {
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
                    })
                }
            });
        }

    }
}