"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanServService = void 0;
const common_1 = require("@nestjs/common");
const BASE_URL = 'http://localhost:3030/services/';
let CleanServService = exports.CleanServService = class CleanServService {
    createCleanService(body) {
        throw new Error('Method not implemented.');
    }
    async getAll() {
        const res = await fetch(BASE_URL);
        const parsed = await res.json();
        console.log(parsed);
        return parsed;
    }
    async getServiceById(id) {
        const res = await fetch(`BASE_URL ${id}`);
        const parsed = await res.json();
        return parsed;
    }
    async createNewService(clean) {
        const id = await this.newId();
        const newService = { ...clean, id };
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        });
        const parsed = await res.json();
        return parsed;
    }
    async deleteServiceById(id) {
        const res = await fetch(`BASE_URL  ${id}`, {
            method: 'DELETE',
        });
        const parsed = await res.json();
        return parsed;
    }
    async updateServiceById(id, Clean) {
        const isService = await this.getServiceById(id);
        if (!Object.keys(isService).length)
            return;
        const updatedService = { ...Clean, id };
        await fetch(`BASE_URL  ${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedService),
        });
    }
    async newId() {
        const cleanId = await this.getAll();
        const lastId = cleanId[cleanId.length - 1];
        const id = lastId.id + 1;
        return id;
    }
};
exports.CleanServService = CleanServService = __decorate([
    (0, common_1.Injectable)()
], CleanServService);
//# sourceMappingURL=cleanServ.service.js.map