import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';
import { OfferGenerator } from './offer-generator.interface.js';
import { CityName, MockServerData, OfferType, User } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

dayjs.locale('ru');

const MIN_PRICE = 800;
const MAX_PRICE = 3000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) { }

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem<CityName>(this.mockData.cities);
    const previewPath = getRandomItem<string>(this.mockData.previewImages);
    const photos = getRandomItems<string>(this.mockData.photos, 6);
    const isPremium = Math.random() < 0.5;
    const isFavorite = Math.random() < 0.5;
    const rating = generateRandomValue(1, 5, 1);
    const type = getRandomItem<OfferType>(this.mockData.types);
    const roomsCount = generateRandomValue(1, 5);
    const guestsCount = generateRandomValue(1, 10);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const conveniences = getRandomItems<string>(this.mockData.features);
    const author = getRandomItem<User>(this.mockData.users);
    const commentsCount = generateRandomValue(0, 30);
    const coordinates: [number, number] = [
      generateRandomValue(0, 90, 6),
      generateRandomValue(0, 180, 6),
    ];

    return [
      title,
      description,
      createdDate,
      city,
      previewPath,
      photos.join(';'),
      isPremium,
      isFavorite,
      rating,
      type,
      roomsCount,
      guestsCount,
      price,
      conveniences.join(';'),
      commentsCount,
      `${author.name};${author.email};${author.avatarPath ?? 'default-avatar.jpg'};${author.type}`,
      `${coordinates[0]};${coordinates[1]}`
    ].join('\t');
  }
}
