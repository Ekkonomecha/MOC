export declare class EventsService {
    getEventDetails(eventId: string): {
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
    };
    registerForEvent(eventId: string, userId: string, formData: any): {
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
    };
    confirmPayment(payload: any): {
        status: string;
        message: string;
    };
}
