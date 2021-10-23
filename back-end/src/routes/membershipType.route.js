import { Router } from "express";
const router = Router();

import { get } from '../controllers/membershipType.controller'


router.get("/get", get);


export default router;
