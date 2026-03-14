import { Offer, OfferType, ConvenienceType, CityType, UserType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const fields = offerData.split('\t');

  const [
    title, description, postDate, city, cityLat, cityLong,
    previewPath, images, isPremium, isFavorite, rating,
    type, roomsCount, guestsCount, price, conveniences,
    authorName, authorEmail, authorAvatar, authorPassword, authorType,
    commentsCount, lat, long
  ] = fields;

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: {
      name: CityType[city as keyof typeof CityType],
      latitude: Number.parseFloat(cityLat),
      longitude: Number.parseFloat(cityLong),
    },
    previewPath,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number.parseFloat(rating),
    type: OfferType[type as keyof typeof OfferType],
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';')
      .map((c) => c.trim() as ConvenienceType),
    author: {
      name: authorName,
      email: authorEmail,
      avatarPath: authorAvatar === 'undefined' ? undefined : authorAvatar,
      password: authorPassword,
      type: authorType as UserType,
    },
    commentsCount: Number.parseInt(commentsCount, 10),
    latitude: Number.parseFloat(lat),
    longitude: Number.parseFloat(long),
  };
}
