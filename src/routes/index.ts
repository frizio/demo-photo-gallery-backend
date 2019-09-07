import { Router } from "express";
import { home, readPhoto, createPhoto, readPhotos } from "../controllers/controllers/photo.controller";
import multer from "../libs/multer";

const router = Router();

router.route('/').get(home);

router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(readPhotos);

export default router;