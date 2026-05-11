export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length is 10 symbols',
    maxLength: 'Maximum title length is 100 symbols',
  },
  description: {
    minLength: 'Minimum description length is 20 symbols',
    maxLength: 'Maximum description length is 1024 symbols',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalid: 'city must be one of: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf',
  },
  previewPath: {
    maxLength: 'Too long for field previewPath. Maximum length is 256',
  },
  images: {
    invalidFormat: 'Field images must be an array',
    invalidSize: 'The list of photos must contain exactly 6 images',
  },
  isPremium: {
    invalidFormat: 'Field isPremium must be a boolean',
  },
  isFavorite: {
    invalidFormat: 'Field isFavorite must be a boolean',
  },
  rating: {
    invalidFormat: 'Rating must be a number',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  type: {
    invalid: 'type must be one of: apartment, house, room, hotel',
  },
  roomsCount: {
    invalidFormat: 'roomsCount must be an integer',
    minValue: 'Minimum rooms is 1',
    maxValue: 'Maximum rooms is 8',
  },
  guestsCount: {
    invalidFormat: 'guestsCount must be an integer',
    minValue: 'Minimum guests is 1',
    maxValue: 'Maximum guests is 10',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  conveniences: {
    invalidFormat: 'Field conveniences must be an array',
    invalid: 'Conveniences must be from the list: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge',
  },
  userId: {
    invalidId: 'userId field must be a valid MongoId',
  },
  latitude: {
    invalidFormat: 'latitude must be a number',
  },
  longitude: {
    invalidFormat: 'longitude must be a number',
  },
} as const;
