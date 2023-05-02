export default interface UserInfoModel {
  userId?: string,
  firstName?: string;
  lastName?: string;
  phone?: string;
  username: string;
  email: string;
  Avatarimage: string;
  password?: string;
  DateAdd: Date;
  DateUpdate?: Date;
  role: "Admin" | "Manager" | "Users" | "customer";
  officeID: number;
  NewEffort?: boolean;
  EffortUpdate?: boolean;
  NewComment?: boolean;
  CommentUpdate?: boolean;
}

export interface avatar {
  image: string;
  name: string;
  id?: string;
}
