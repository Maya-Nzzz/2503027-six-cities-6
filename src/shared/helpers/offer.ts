import { Offer, OfferType, ConvenienceType, CityName, UserType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const fields = offerData.replace('\n', '').split('\t');

  const [
    title,
    description,
    postDate,
    city,
    previewPath,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    roomsCount,
    guestsCount,
    price,
    conveniences,
    commentsCount,
    author,
    coordinates
  ] = fields;

  const [authorName, authorEmail, authorAvatar, authorType] = author.split(';');
  const [lat, long] = coordinates.split(';');

  const user = {
    name: authorName,
    email: authorEmail,
    avatarPath: (authorAvatar === 'undefined' || !authorAvatar) ? 'default-avatar.png' : authorAvatar,
    type: authorType as UserType,
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as CityName,
    previewPath,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number(rating) || 0,
    type: type as OfferType,
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';').map((c) => c.trim() as ConvenienceType),
    user,
    commentsCount: Number.parseInt(commentsCount, 10),
    latitude: Number.parseFloat(lat),
    longitude: Number.parseFloat(long),
  };
}
