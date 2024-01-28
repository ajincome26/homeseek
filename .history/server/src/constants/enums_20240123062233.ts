export enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned // bị khóa
}

export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}

export enum OverviewStatus {
  NOT, // chưa ai đặt cọc
  OK // đã có người cọc
}

export enum OverviewBonus {
  NORMAL,
  VIP
}

export enum MediaType {
  Image,
  Video
}

export enum SortOrder {
  descending = -1,
  ascending = 1
}
