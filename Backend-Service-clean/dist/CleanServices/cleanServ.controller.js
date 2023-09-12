"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanServController = void 0;
const common_1 = require("@nestjs/common");
const cleanServ_service_1 = require("./cleanServ.service");
const Update_clean_dto_1 = require("./Update-clean.dto");
let CleanServController = exports.CleanServController = class CleanServController {
    constructor(cleanServService) {
        this.cleanServService = cleanServService;
    }
    async getAll(res) {
        try {
            const cleans = await this.cleanServService.getAll();
            return res.status(common_1.HttpStatus.OK).json(cleans);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async getServiceById(id, res) {
        try {
            const clean = await this.cleanServService.getServiceById(id);
            if (Object.keys(clean)) {
                return res.status(common_1.HttpStatus.OK).send(clean);
            }
            else {
                throw new common_1.NotFoundException(`service with id ${id} not found.`);
            }
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async createNewService(UpdateCleanDto, res) {
        try {
            const serviceResponse = await this.cleanServService.createNewService(UpdateCleanDto);
            await res.status(common_1.HttpStatus.CREATED).send(serviceResponse);
        }
        catch (error) {
            throw new common_1.BadRequestException('fallo la creacion');
        }
    }
    async deleteServiceById(id, res) {
        try {
            const serviceResponse = await this.cleanServService.deleteServiceById(id);
            res.status(common_1.HttpStatus.NO_CONTENT).send(serviceResponse);
        }
        catch (error) {
            throw new common_1.BadRequestException('FALLO EL BORRADO');
        }
    }
    async updateServiceById(id, updateCleanDto, res) {
        try {
            const serviceResponse = await this.cleanServService.updateServiceById(id, updateCleanDto);
            res.status(common_1.HttpStatus.NO_CONTENT).send(serviceResponse);
        }
        catch (error) {
            throw new common_1.BadRequestException('Fallo el update');
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CleanServController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CleanServController.prototype, "getServiceById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Update_clean_dto_1.UpdateCleanDto, Object]),
    __metadata("design:returntype", Promise)
], CleanServController.prototype, "createNewService", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CleanServController.prototype, "deleteServiceById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Update_clean_dto_1.UpdateCleanDto, Object]),
    __metadata("design:returntype", Promise)
], CleanServController.prototype, "updateServiceById", null);
exports.CleanServController = CleanServController = __decorate([
    (0, common_1.Controller)('cleanServ'),
    __metadata("design:paramtypes", [cleanServ_service_1.CleanServService])
], CleanServController);
//# sourceMappingURL=cleanServ.controller.js.map