import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";
import { User } from "../user/user.model";

const nanoid = customAlphabet("Uakgb_J5m9g-0JDMbcJqL", 10);

export class Video {
  @prop()
  public title: string;
  @prop()
  public description: string;
  @prop({ enum: ["mp4"] })
  public extension: string;

  @prop({ required: true, ref: () => User })
  public owner: Ref<User>;

  @prop({ unique: true, default: () => nanoid() })
  public videoId: string;

  @prop({ dafult: false })
  public published: boolean;
}

export const VideoModel = getModelForClass(Video, {
  schemaOptions: {
    timestamps: true,
  },
});
