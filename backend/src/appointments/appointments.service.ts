import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentsService {
  getAvailableSlots(departmentId: string, date: string) {
    // Mock logic: query Database for ConfiguredHours minus Booked slots and Holidays
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

  createAppointment(body: any) {
    // Mock logic: validate slot availability, construct pending appointment in DB.
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

  updateAppointmentStatus(appointmentId: string, newStatus: string, adminNotes: string) {
    // Mock logic: Update status in DB and invoke SMS/Email queues
    return {
      status: "success",
      data: {
        appointmentId,
        newStatus,
        notifiedUser: true
      }
    };
  }
}
