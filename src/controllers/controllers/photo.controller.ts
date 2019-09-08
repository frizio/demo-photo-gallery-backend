import { Request, Response } from "express";
import Photo from "../../models/Photo";

export function home(req: Request, res: Response): Response {
    return res.send('Hello from demo-photo-gallery API');
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
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
            message: 'Photo successfull saved',
            photo
        }
    );  
}

export async function readPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();
    return res.json(photos);
}

export async function readPhoto(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const photo = await Photo.findById(id);
    return res.json(photo);
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const photo = await Photo.findByIdAndRemove(id);
    
    return res.json(
        {
            message: 'Photo deleted',
            photo
        }
    );
}
