
import {categoryService} from '../services';
import { Response } from 'express';
import {CustomRequest} from '../utils/customTypes';
const checklist = async (req:CustomRequest, res:Response ) =>{
    const page: number = parseInt(req.query.page as string, 10);
    const user = await categoryService.getCategories(page);
    res.status(200).json({user});
}

export default {checklist}