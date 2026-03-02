"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
let EventsService = class EventsService {
    getEventDetails(eventId) {
        return {
            status: "success",
            data: {
                id: eventId,
                title: {
                    ar: "معرض الدوحة الدولي للكتاب",
                    en: "Doha International Book Fair"
                },
                description: "Official book fair event...",
                location: {
                    venueName: "Doha Exhibition and Convention Center",
                    coordinates: { lat: 25.3195, lng: 51.5284 }
                },
                dates: {
                    start: "2026-05-10T09:00:00Z",
                    end: "2026-05-20T22:00:00Z"
                },
                registration: {
                    isRequired: true,
                    maxCapacity: 10000,
                    currentRegistrations: 4532,
                    isAvailable: true,
                    fee: { amount: 50.00, currency: "QAR" },
                    formSchema: [
                        { field: "attendee_type", type: "select", options: ["Individual", "Family"] },
                        { field: "number_of_guests", type: "number", min: 1, max: 5 }
                    ]
                },
                features: { isVrEnabled: true, hasLiveStream: false }
            }
        };
    }
    registerForEvent(eventId, userId, formData) {
        const mockTransactionId = "txn_" + Math.random().toString(36).substr(2, 9);
        return {
            status: "success",
            data: {
                registrationId: "reg_yt736dhd",
                status: "pending_payment",
                payment: {
                    transactionId: mockTransactionId,
                    amount: 150.00,
                    currency: "QAR",
                    gatewayRedirectUrl: `https://pg.qatar.qa/checkout/${mockTransactionId}`,
                    expiresAt: new Date(Date.now() + 15 * 60000).toISOString()
                }
            }
        };
    }
    confirmPayment(payload) {
        if (payload.status === 'SUCCESS') {
            return {
                status: "success",
                message: "Payment processed internally, ticket generated."
            };
        }
        return { status: "failed", message: "Payment was not successful." };
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)()
], EventsService);
//# sourceMappingURL=events.service.js.map