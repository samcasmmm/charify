import JWT, { JwtPayload } from "jwt-decode";
import axios from "axios";

const isValid = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = JWT.jwtDecode<JwtPayload>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp !== undefined && decoded.exp > currentTime;
};

const handleTokenExpired = (exp: string) => {
  let expiredTimer = undefined;
  const currentTime = Date.now();
  const timeLeft = parseInt(exp) * 1000 - currentTime;
  clearTimeout(expiredTimer);
  expiredTimer = setTimeout(() => {
    alert("Token expired");
    localStorage.removeItem("accessToken");
  }, timeLeft);
};

const setSession = (accessToken: string) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const { exp } = JWT.jwtDecode(accessToken);
    handleTokenExpired(String(exp));
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValid, handleTokenExpired, setSession };
