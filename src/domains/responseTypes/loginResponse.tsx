export interface LoginResponse {
  data: {
    accessToken: string;
    data: {
      id: number;
      refreshToken: string;
      userId: number;
    }
  };
}