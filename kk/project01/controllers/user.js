const User=require('../models/user')
async function gethandlealluser(req,res){
    const alldbuser=await User.find({})
    res.setHeader("x-myname","Ayush")
    return res.json(alldbuser);
}
async function handlegetuserbyid(req,res){
    const user = await User.findById(req.params.id);
    // const user = users.find((user) => User.id == id);
    if(!user) return res.status(400).json({error:"user not found"});
    return res.json(user);
}

async function handleypdateuserbyid(req,res){
     // const id = Number(req.params.id);
    // const userIndex = users.findIndex(user => user.id === id);
    // const updated = { ...users[userIndex], ...req.body };
    // users[userIndex] = updated;
    await User.findByIdAndUpdate(req.params.id,{lastName:"baniya"});
    return res.json({ status: "User updated"});
}

async function handledeletebyid(req,res){
        // const id = Number(req.params.id);
        // const userIndex = users.findIndex(user => user.id === id);
        // users.splice(userIndex, 1);
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: "User deleted" });
}

async function handlepostalluser(req,res){
    const body = req.body;

    // Check if all required fields are present
    if (
        !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Create a new user in the MongoDB collection
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
            username: body.username || null // Assign username if provided, otherwise null
        });
        console.log(result);
        return res.status(200).json({ msg: "User successfully added" });
    } catch (err) {
        console.error("Error adding user:", err);
        return res.status(500).json({ msg: "Server error", error: err.message });
    }

}

module.exports={
    gethandlealluser,
    handlegetuserbyid,
    handleypdateuserbyid,
    handledeletebyid,
    handlepostalluser,
}