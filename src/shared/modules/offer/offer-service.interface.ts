import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
}

/* import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { OfferFullDto } from './dto/offer-full-dto.type.js';
import { OfferPreviewDto } from '../dto/offer-preview-dto.type.js'; */

/*   find(count?: number): Promise<OfferPreviewDto[]>;
  deleteById(offerId: string): Promise<void>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<OfferFullDto| null>;
  findPremium(city: string): Promise<OfferPreviewDto[]>;
  findFavorite(): Promise<OfferPreviewDto[]>;
  addToFavorite(offerId: string): Promise<void>;
  removeFromFavorite(offerId: string): Promise<void>;
  exists(documentId: string): Promise<boolean>; */
