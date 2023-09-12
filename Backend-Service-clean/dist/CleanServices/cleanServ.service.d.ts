import { UpdateCleanDto } from './Update-clean.dto';
export declare class CleanServService {
    createCleanService(body: any): any;
    getAll(): Promise<any>;
    getServiceById(id: number): Promise<UpdateCleanDto>;
    createNewService(clean: UpdateCleanDto): Promise<UpdateCleanDto>;
    deleteServiceById(id: number): Promise<UpdateCleanDto>;
    updateServiceById(id: number, Clean: UpdateCleanDto): Promise<UpdateCleanDto>;
    newId(): Promise<number>;
}
