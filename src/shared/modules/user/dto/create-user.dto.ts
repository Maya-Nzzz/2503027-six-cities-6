import { IsEmail, IsEnum, IsOptional, IsString, Length, Matches } from 'class-validator';
import { UserType } from '../../../types/index.js';

export class CreateUserDto {
  @IsString()
  @Length(1, 15)
  public name!: string;

  @IsEmail()
  public email!: string;

  @IsOptional()
  @Matches(/\.(jpg|png)$/, { message: 'Avatar must be jpg or png' })
  public avatarPath?: string;

  @IsEnum(UserType)
  public type!: UserType;

  @IsString()
  @Length(6, 12, { message: 'Password length must be from 6 to 12 symbols' })
  public password!: string;
}