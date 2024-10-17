const express=require("express")
const {connectMongo}=require('./connection')
const app = express();

const{logReqRes}=require('./middlewares')
const port = 8000;
const userRouter=require("./Routes/user")

connectMongo("mongodb+srv://ayushagrawalcsaiml22:ayushagrawal@cluster0.vldfe.mongodb.net/youtube").
then(()=>console.log("mongodb connected")).
catch((err)=>console.log("connection error",err));

// Middleware



// app.use(express.json()); // Parse JSON data


app.use(express.urlencoded({ extended: false }));

// Log middleware
// app.use((req, res, next) => {
//     console.log("First middleware");
//     next();
// });

app.use(logReqRes('log.txt'))

app.use('/user',userRouter);
// Start server
app.listen(port, () => console.log(`Server started on port: ${port}`));
