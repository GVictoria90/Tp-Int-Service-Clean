import { CleanServService } from './cleanServ.service';
import { Response } from 'express';
import { UpdateCleanDto } from './Update-clean.dto';
export declare class CleanServController {
    private readonly cleanServService;
    constructor(cleanServService: CleanServService);
    getAll(res: Response): Promise<any>;
    getServiceById(id: number, res: Response): Promise<any>;
    createNewService(UpdateCleanDto: UpdateCleanDto, res: Response): Promise<any>;
    deleteServiceById(id: number, res: Response): Promise<any>;
    updateServiceById(id: number, updateCleanDto: UpdateCleanDto, res: Response): Promise<any>;
}
