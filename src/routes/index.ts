import { Router } from "express";
import { home, createPhoto, readPhotos, readPhoto } from "../controllers/controllers/photo.controller";
import multer from "../libs/multer";

const router = Router();

router.route('/').get(home);

router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(readPhotos);

router.route('/photos/:id')
    .get(readPhoto);

export default router;