import axios from "axios";

const defaultInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  return instance;
};

//instance 하나만 사용하기 (보내는 콘텐츠 타입이 다를 때 ex. 폼데이터 전용 인스턴스 만들기)
const authInstance = () => {
  const Access = localStorage.getItem("Access");
  const Refresh = localStorage.getItem("Refresh");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`, // 삼항연산자로 있다면 보내고, 없다면 null 세팅 (default 사용 필요 없음)
      Refresh: `Bearer ${Refresh}`,
    },
  });

  //request -> interceptors 공식문서 참고.

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );
  return instance;
};

const addInstance = () => {
  const Access = localStorage.getItem("Access");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
      "Content-Type": "multipart/form-data",
    },
  });

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );

  return instance;
};

const editInstance = () => {
  const Access = localStorage.getItem("Access");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
    },
  });

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );

  return instance;
};

export { defaultInstance, authInstance, addInstance, editInstance };
