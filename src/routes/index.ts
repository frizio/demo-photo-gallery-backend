import { Router } from "express";

const router = Router();

router.route('/').get(
    (req, res) => {
        res.send('Hello from demo-photo-gallery API');
    }
);

export default router;