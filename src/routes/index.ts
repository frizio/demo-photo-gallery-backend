import { Router } from "express";
import { home, readPhoto, createPhoto } from "../controllers/controllers/photo.controller";

const router = Router();

router.route('/').get(home);

router.route('/photos')
    .post(createPhoto)
    .get(readPhoto);

export default router;