import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    getAllEvents(): Promise<{
        id: string;
        title: string;
        date: string;
        location: string;
        price: string;
        image_url: string;
    }[]>;
    getEventDetails(eventId: string): Promise<{
        status: string;
        data: {
            id: string;
            title: {
                ar: string;
                en: string;
            };
            description: string;
            location: {
                venueName: string;
                coordinates: {
                    lat: number;
                    lng: number;
                };
            };
            dates: {
                start: string;
                end: string;
            };
            registration: {
                isRequired: boolean;
                maxCapacity: number;
                currentRegistrations: number;
                isAvailable: boolean;
                fee: {
                    amount: number;
                    currency: string;
                };
                formSchema: ({
                    field: string;
                    type: string;
                    options: string[];
                    min?: undefined;
                    max?: undefined;
                } | {
                    field: string;
                    type: string;
                    min: number;
                    max: number;
                    options?: undefined;
                })[];
            };
            features: {
                isVrEnabled: boolean;
                hasLiveStream: boolean;
            };
        };
    }>;
    registerForEvent(eventId: string, body: any): Promise<{
        status: string;
        data: {
            registrationId: string;
            status: string;
            payment: {
                transactionId: string;
                amount: number;
                currency: string;
                gatewayRedirectUrl: string;
                expiresAt: string;
            };
        };
    }>;
}
