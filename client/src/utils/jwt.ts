import JWT, { JwtPayload } from "jwt-decode";

const isValid = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = JWT.jwtDecode<JwtPayload>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp !== undefined && decoded.exp > currentTime;
};

const handleTokenExpired = (exp: string) => {
  let expiredTimer = "";
  const currentTime = Date.now();
  const timeLeft = parseInt(exp) * 1000 - currentTime;
  clearTimeout(expiredTimer);
  expiredTimer = setTimeout(() => {
    alert("Token expired");
    localStorage.removeItem("accessToken");
  }, timeLeft);
};

export { isValid, handleTokenExpired };
