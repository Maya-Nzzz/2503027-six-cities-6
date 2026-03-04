import { CityType, ConvenienceType, OfferType } from './offer.type.js';
import { UserType } from './user.type.js';

export type MockServerData = {
    titles: string[];
    descriptions: string[];
    cities: CityType[];
    previewImages: string[];
    photos: string[];
    types: OfferType[];
    features: ConvenienceType[];
    users: {
        name: string;
        email: string;
        avatarPath: string;
        password: string;
        type: UserType;
    }[];
};
