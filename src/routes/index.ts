import { Router } from "express";
import { home, readPhoto, createPhoto } from "../controllers/controllers/photo.controller";
import multer from "../libs/multer";

const router = Router();

router.route('/').get(home);

router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(readPhoto);

export default router;