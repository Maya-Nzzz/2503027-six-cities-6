import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { User, UserType } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
    @prop({
      required: true,
      default: '',
      minlength: [1, 'Min length is 1'],
      maxlength: [15, 'Max length is 15']
    })
  public name: string;

    @prop({
      unique: true,
      required: true,
      match: [/^([\w.-]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format']
    })
    public email: string;

    @prop({
      required: false,
      default: 'default-avatar.png',
      match: [/\.(jpg|png)$/, 'Avatar must be .jpg or .png']
    })
    public avatarPath?: string;

    @prop({ required: true, enum: UserType, default: UserType.Ordinary })
    public type: UserType;

    @prop({ required: true, default: '' })
    private password!: string;

    constructor(userData: User) {
      super();

      this.name = userData.name;
      this.email = userData.email;
      this.avatarPath = userData.avatarPath ?? 'default-avatar.png';
      this.type = userData.type;
    }

    public setPassword(password: string, salt: string) {
      this.password = createSHA256(password, salt);
    }

    public getPassword() {
      return this.password;
    }
}

export const UserModel = getModelForClass(UserEntity);
