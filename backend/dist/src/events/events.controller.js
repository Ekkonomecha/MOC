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
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const events_service_1 = require("./events.service");
let EventsController = class EventsController {
    eventsService;
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async getAllEvents() {
        return [
            {
                id: '1',
                title: 'Doha International Book Fair 2026',
                date: 'May 10 - May 20',
                location: 'Exhibition Center',
                price: 'Free',
                image_url: 'doha_book_fair_1772449187184.png'
            },
            {
                id: '2',
                title: 'Traditional Pearl Diving Expo',
                date: 'June 5',
                location: 'Qatar National Museum',
                price: '50 QAR',
                image_url: 'qatar_pearl_diving_1772449200773.png'
            },
            {
                id: '3',
                title: 'Arabic Calligraphy Masterclass',
                date: 'August 12',
                location: 'Katara Village',
                price: '150 QAR',
                image_url: 'arabic_calligraphy_1772449216940.png'
            }
        ];
    }
    async getEventDetails(eventId) {
        return this.eventsService.getEventDetails(eventId);
    }
    async registerForEvent(eventId, body) {
        return this.eventsService.registerForEvent(eventId, body.userId, body);
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "getAllEvents", null);
__decorate([
    (0, common_1.Get)(':eventId'),
    __param(0, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "getEventDetails", null);
__decorate([
    (0, common_1.Post)(':eventId/register'),
    __param(0, (0, common_1.Param)('eventId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "registerForEvent", null);
exports.EventsController = EventsController = __decorate([
    (0, common_1.Controller)('api/v1/events'),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
//# sourceMappingURL=events.controller.js.map