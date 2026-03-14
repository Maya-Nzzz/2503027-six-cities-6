import { User } from './user.type.js';

export type City = {
    name: string;
    latitude: number;
    longitude: number;
}

export enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum ConvenienceType {
    Breakfast = 'Breakfast',
    AirConditioning = 'Air conditioning',
    LaptopFriendlyWorkspace = 'Laptop friendly workspace',
    BabySeat = 'Baby seat',
    Washer = 'Washer',
    Towels = 'Towels',
    Fridge = 'Fridge',
}

export enum OfferType {
    Apartment = 'apartment',
    House = 'house',
    Room = 'room',
    Hotel = 'hotel',
}

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: City;
    previewPath: string;
    images: string[];
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    type: OfferType;
    roomsCount: number;
    guestsCount: number;
    price: number;
    conveniences: ConvenienceType[];
    author: User;
    commentsCount: number;
    latitude: number;
    longitude: number;
}
