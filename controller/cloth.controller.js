import Cloth from "../model/cloth.model.js";
export const getCloth=async(req,res)=>{
    try {
        const cloth=await Cloth.find();
        res.status(200).json(cloth);
    } catch (error) {
        console.log("Error : ",error)
        res.status(500).json(error)
    }
}