"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
let AppointmentsService = class AppointmentsService {
    getAvailableSlots(departmentId, date) {
        return {
            status: "success",
            data: {
                date: date,
                isHoliday: false,
                departmentName: "Cultural Events Department",
                availableSlots: [
                    { slotId: "slot_0900", startTime: "09:00", endTime: "09:30", capacityRemaining: 2 },
                    { slotId: "slot_0930", startTime: "09:30", endTime: "10:00", capacityRemaining: 0 },
                    { slotId: "slot_1000", startTime: "10:00", endTime: "10:30", capacityRemaining: 5 }
                ]
            }
        };
    }
    createAppointment(body) {
        const mockId = "apt_" + Math.random().toString(36).substring(2, 9);
        return {
            status: "success",
            data: {
                appointmentId: mockId,
                status: "Pending_Approval",
                details: {
                    date: body.date,
                    time: "09:00 - 09:30",
                    department: "Cultural Events Department"
                },
                message: "Your request has been submitted. You will be notified once the department approves."
            }
        };
    }
    updateAppointmentStatus(appointmentId, newStatus, adminNotes) {
        return {
            status: "success",
            data: {
                appointmentId,
                newStatus,
                notifiedUser: true
            }
        };
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map