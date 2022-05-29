const express = require("express");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes")
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json())

app.use("/user" , userRouter)



port = 5000

const uri =  "mongodb+srv://myDash:MyDash@cluster0.9gc4v.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true })
            .then(
                    ()=>{console.log("Database is connected sucessfully")}
            )
            .catch(
                (error) =>{console.log(error)}
            )

app.get("/" , (req,res)=>{
    res.send("hello world")

})


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})