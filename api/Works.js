import axios from "axios";

const apiKey = "72514a5a5a6d756e3739496f6b496c";

export const getWorks = async () => {
  const res = await axios.get(
    `http://openapi.seoul.go.kr:8088/${apiKey}/json/GetJobInfo/1/20/`
  );
  return res.data;
};
