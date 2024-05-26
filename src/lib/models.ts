import mongoose from "mongoose";

// 사용자 스키마 정의
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // 필수 필드
      unique: true, // 고유한 값이어야 함
      min: 3, // 최소 3글자
      max: 20, // 최대 20글자
    },
    email: {
      type: String,
      required: true, // 필수 필드
      unique: true, // 고유한 값이어야 함
      max: 50, // 최대 50글자
    },
    password: {
      type: String,
      required: true, // 필수 필드
      min: 6, // 최소 6글자
    },
    img: {
      type: String,
      default: "", // 기본값은 빈 문자열
    },
    isAdmin: {
      type: Boolean,
      default: false, // 기본값은 false
    },
  },
  { timestamps: true } // 생성 및 수정 시간을 자동으로 기록
);

// 사용자 스키마 정의
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // 필수 필드
    },
    desc: {
      type: String,
      required: true, // 필수 필드
    },
    img: {
      type: String,
      default: "", // 기본값은 빈 문자열
    },
    userId: {
      type: String,
      required: true, // 기본값은 false
    },
    slug: {
      type: String,
      required: true, // 기본값은 false
      unique: true, // 고유한 값이어야 함
    },
  },
  { timestamps: true } // 생성 및 수정 시간을 자동으로 기록
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
