const User = require('../models/users');
const {v4:uuidv4}=require('uuid')
const {setUser}=require('../service/auth')

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send("User already exists with this email.");
        }

        await User.create({
            name,
            password,
            email
        });
        return res.redirect("/");
    } catch (error) {
        console.error('Error during user signup:', error);
        if (error.code === 11000) {
            // Handle duplicate key error
            return res.status(400).send("Duplicate key error: A user with this email or shortid already exists.");
        }
        return res.status(500).send('Error during signup');
    }
}
async function handleUserlogin(req, res) {
    const { email, password } = req.body;
    const user=await User.findOne({email,password})
    console.log(user);
    if(!user)return res.render("login",{
        error:"Invalid username or password"
    });

    const sessionId=uuidv4();
    setUser(sessionId,user)
    res.cookie("uid",sessionId)

return res.redirect("/")
}

module.exports ={ handleUserSignup,handleUserlogin}
