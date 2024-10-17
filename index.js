import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import clothRoute from "./route/cloth.route.js"
import cors from 'cors'
import userRoute from "./route/user.route.js"
import path from "path"

app.use(express.json())
dotenv.config()
const PORT=process.env.PORT || 4000;
const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const URI=`mongodb+srv://kumaran61003:${password}@cluster0.4lk36.mongodb.net/ClothingStore?retryWrites=true&w=majority`;
try {
    const db = await mongoose.connect(URI);
    console.log("Connected Successfully to Mongo Atlas");
} catch (error) {
    console.log("Error : ",error)
}
app.use("/cloth",clothRoute)
app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})