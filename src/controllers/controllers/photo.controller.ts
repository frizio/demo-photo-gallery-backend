import { Request, Response } from "express";
import Photo from "../../models/Photo";

export function home(req: Request, res: Response): Response {
    return res.send('Hello from demo-photo-gallery API');
}

export async function createPhoto(req: Request, res: Response) {
    console.log('Saving photo');
    const {title, description} = req.body; 
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path        
    }
    const photo = new Photo(newPhoto);
    await photo.save();
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
