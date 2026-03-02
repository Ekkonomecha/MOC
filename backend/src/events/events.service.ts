import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EventsService {
  // Mocking the database for immediate API usability
  getEventDetails(eventId: string) {
    // In a real scenario, we'd use Prisma: this.prisma.event.findUnique(...)
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

  registerForEvent(eventId: string, userId: string, formData: any) {
    // Logic to validate capacity, calculate total fee based on guests, etc.
    const mockTransactionId = "txn_" + Math.random().toString(36).substr(2, 9);

    return {
      status: "success",
      data: {
        registrationId: "reg_yt736dhd",
        status: "pending_payment",
        payment: {
          transactionId: mockTransactionId,
          amount: 150.00, // Based on form data in real logic
          currency: "QAR",
          gatewayRedirectUrl: `https://pg.qatar.qa/checkout/${mockTransactionId}`,
          expiresAt: new Date(Date.now() + 15 * 60000).toISOString()
        }
      }
    };
  }

  confirmPayment(payload: any) {
    // Webhook logic: find registration by transactionId, update status to CONFIRMED, generate QR Hash
    if (payload.status === 'SUCCESS') {
      return {
        status: "success",
        message: "Payment processed internally, ticket generated."
      };
    }
    return { status: "failed", message: "Payment was not successful." };
  }
}
