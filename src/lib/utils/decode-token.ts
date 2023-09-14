import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * Decode a JWT token
 * @param token JWT token to decode
 * @param errorCallback Callback to execute if an error occurs
 * @returns Decoded token
 */
export const decodeToken = (token: string, errorCallback?: () => void): JwtPayload | null => {
  try {
    const decodedToken = jwt.decode(token) as JwtPayload;

    // Check if token has expired
    if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
      const expiredTokenError = new Error("Token has expired");
      console.error(expiredTokenError.message);
      errorCallback && errorCallback();
      return null;
    }

    return decodedToken;
  } catch (error) {
    console.error("An error occurred while decoding the token, here's more info: ", error);
    errorCallback && errorCallback();
    return null;
  }
};
