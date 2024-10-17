const express = require("express");
const {  gethandlealluser,handlegetuserbyid,handleypdateuserbyid,handledeletebyid,handlepostalluser}=require('../controllers/user')
const Router=express.Router();


// app.get("/users", async(req, res) => {
//     const alldbuser=await User.find({})
//     const html = `
//         <ul>
//         ${alldbuser.map((user) => `<li>${user.firstName}-${user.email}-${user.lastName}</li>`).join("")}
//         </ul>
//     `;
//     res.setHeader("x-myname", "AYush");
//     return res.send(html);
// });


Router.route("/")
.get(gethandlealluser)
.post(handlepostalluser)


Router.route('/:id')
.get(handlegetuserbyid)
.patch(handleypdateuserbyid)
.delete( handledeletebyid)

module.exports=Router
