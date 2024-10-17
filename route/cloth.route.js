import express from 'express';
import { getCloth } from '../controller/cloth.controller.js';
const router=express.Router();
router.get("/",getCloth);
export default router;