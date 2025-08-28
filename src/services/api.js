import axios from "axios";

let BASE_URL = "";

const loadConfig = async () => {
  if (!BASE_URL) {
    const res = await fetch(`${import.meta.env.BASE_URL}config.json`);
    const config = await res.json();
    BASE_URL = config.API_BASE_URL;
  }
  return BASE_URL;
};

export const uploadFile = async (file, lang) => {
  const apiUrl = await loadConfig();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("lang", lang);

  const response = await axios.post(`${apiUrl}/upload`, formData);
  return response.data;
};