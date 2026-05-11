export enum UserType {
  Standard = 'обычный',
  Pro = 'pro'
}

export type User = {
    name: string;
    email: string;
    avatarPath?: string;
    type: UserType;
}
