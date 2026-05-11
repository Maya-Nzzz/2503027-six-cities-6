export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalid: 'city must be one of: Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf',
  },
  previewPath: {
    maxLength: 'Maximum preview path length must be 256',
  },
  images: {
    invalidFormat: 'Field images must be an array',
    invalidSize: 'Should always be 6 images',
  },
  isPremium: {
    invalidFormat: 'isPremium must be a boolean',
  },
  isFavorite: {
    invalidFormat: 'isFavorite must be a boolean',
  },
  rating: {
    invalidFormat: 'rating must be a number',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  type: {
    invalid: 'type must be apartment, house, room or hotel',
  },
  roomsCount: {
    invalidFormat: 'roomsCount must be an integer',
    minValue: 'Minimum roomsCount is 1',
    maxValue: 'Maximum roomsCount is 8',
  },
  guestsCount: {
    invalidFormat: 'guestsCount must be an integer',
    minValue: 'Minimum guestsCount is 1',
    maxValue: 'Maximum guestsCount is 10',
  },
  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  conveniences: {
    invalidFormat: 'Field conveniences must be an array',
    invalid: 'One or more conveniences are invalid',
  },
  userId: {
    invalidId: 'userId field must be a valid mongo id',
  },
  latitude: {
    invalidFormat: 'latitude must be a number',
  },
  longitude: {
    invalidFormat: 'longitude must be a number',
  },
} as const;
