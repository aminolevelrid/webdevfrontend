const Userl = require('../models/users');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        await Userl.create({
            name,
            password,
            email
        });
        return res.render("home");
    } catch (error) {
        console.error('Error during user signup:', error);
        return res.status(500).send('Error during signup');
    }
}

module.exports = handleUserSignup;
