import axios from "axios";

// Runtime fetch config.json from public folder
let BASE_URL = "";

const loadConfig = async () => {
  const res = await fetch("/config.json");
  const config = await res.json();
  BASE_URL = config.API_BASE_URL;
};

export const uploadFile = async (file, lang) => {
  // Ensure config is loaded before calling API
  if (!BASE_URL) await loadConfig();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("lang", lang);

  const response = await axios.post(`${BASE_URL}/upload`, formData);
  return response.data;
};