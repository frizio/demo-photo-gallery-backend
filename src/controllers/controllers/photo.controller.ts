import { Request, Response } from "express";

export function home(req: Request, res: Response): Response {
    return res.send('Hello from demo-photo-gallery API');
}

export function createPhoto(req: Request, res: Response) {
    console.log('Saving photo');
    console.log(req.body);
    return res.json(
        {
            message: 'Photo successfull saved'
        }
    );  
}

export function readPhoto(req: Request, res: Response) {
    return res.json(
        {
            message: 'The photo....'
        }
    );
}
