import { CityName, ConvenienceType, OfferType } from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city: CityName;
  public previewPath: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public type: OfferType;
  public roomsCount: number;
  public guestsCount: number;
  public price: number;
  public conveniences: ConvenienceType[];
  public latitude: number;
  public longitude: number;
}
