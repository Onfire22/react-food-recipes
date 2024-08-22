import axios from "axios";
import API_URL from "./config";

const getMealById = async (id) => {
  const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
  return response.data;
};

const getCategories = async () => {
 const response = await axios.get(`${API_URL}categories.php`);
 return response.data;
};

const getFilterByCategory = async (category) => {
  const response = await axios.get(`${API_URL}filter.php?c=${category}`);
  return response.data;
};

export { 
  getMealById,
  getCategories,
  getFilterByCategory
};