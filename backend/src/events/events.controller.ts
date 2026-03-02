import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('api/v1/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Get()
  async getAllEvents() {
    // Return mock data that matches the M3 Mobile App requirements
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

  @Get(':eventId')
  async getEventDetails(@Param('eventId') eventId: string) {
    return this.eventsService.getEventDetails(eventId);
  }

  @Post(':eventId/register')
  async registerForEvent(@Param('eventId') eventId: string, @Body() body: any) {
    // Expects { "userId": string, "attendeeCount": number }
    return this.eventsService.registerForEvent(eventId, body.userId, body);
  }
}
