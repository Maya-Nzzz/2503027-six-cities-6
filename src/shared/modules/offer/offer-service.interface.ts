import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  find(): Promise<DocumentType<OfferEntity>[]>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  findPremiumByCity(city: string, limit?: number): Promise<DocumentType<OfferEntity>[]>;
  findFavorite(offerId: string, limit?: number): Promise<DocumentType<OfferEntity>[]>;
  addToFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  removeFromFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateRatingAndCommentCount(offerId: string): Promise<void>;
  exists(documentId: string): Promise<boolean>;
}
