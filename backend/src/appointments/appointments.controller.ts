import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller()
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) { }

  @Get('api/v1/departments/:departmentId/slots')
  getAvailableSlots(
    @Param('departmentId') departmentId: string,
    @Query('date') date: string,
  ) {
    return this.appointmentsService.getAvailableSlots(departmentId, date);
  }

  @Post('api/v1/appointments')
  createAppointment(@Body() body: any) {
    return this.appointmentsService.createAppointment(body);
  }

  @Patch('api/v1/admin/appointments/:appointmentId/status')
  updateAppointmentStatus(
    @Param('appointmentId') appointmentId: string,
    @Body() body: any,
  ) {
    return this.appointmentsService.updateAppointmentStatus(appointmentId, body.status, body.adminNotes);
  }
}
