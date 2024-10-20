const {getuser}=require('../service/auth')
async function restrictToLoggedUserOnly(req, res, next) {
    console.log(req);
    const useruid = req.cookies?.uid;
    if (!useruid) return res.redirect('/login');
    
    const user = getuser(useruid); // Ensure this function is defined properly and returns a user object
    
    if (!user) return res.redirect("/login");
    
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedUserOnly
};
