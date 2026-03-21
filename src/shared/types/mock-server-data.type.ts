import { City, ConvenienceType, OfferType } from './offer.type.js';
import { User } from './user.type.js';

export type MockServerData = {
    titles: string[];
    descriptions: string[];
    cities: City[];
    previewImages: string[];
    photos: string[];
    types: OfferType[];
    features: ConvenienceType[];
    users: User[];
};
