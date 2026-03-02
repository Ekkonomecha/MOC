import { AppointmentsService } from './appointments.service';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    getAvailableSlots(departmentId: string, date: string): {
        status: string;
        data: {
            date: string;
            isHoliday: boolean;
            departmentName: string;
            availableSlots: {
                slotId: string;
                startTime: string;
                endTime: string;
                capacityRemaining: number;
            }[];
        };
    };
    createAppointment(body: any): {
        status: string;
        data: {
            appointmentId: string;
            status: string;
            details: {
                date: any;
                time: string;
                department: string;
            };
            message: string;
        };
    };
    updateAppointmentStatus(appointmentId: string, body: any): {
        status: string;
        data: {
            appointmentId: string;
            newStatus: string;
            notifiedUser: boolean;
        };
    };
}
