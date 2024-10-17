import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const getCourseDetails = async (courseId) => {
  const response = await axios.get(`${API_URL}/courses/${courseId}`);
  return response.data;
};

export const getQuiz = async (courseId) => {
  const response = await axios.get(`${API_URL}/quizzes/${courseId}`);
  return response.data;
};

export const submitQuiz = async (courseId, answers) => {
  const response = await axios.post(`${API_URL}/quizzes/${courseId}/submit`, { answers });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get(`${API_URL}/users/profile`);
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const response = await axios.put(`${API_URL}/users/profile`, profileData);
  return response.data;
};

export const getUserReports = async () => {
  const response = await axios.get(`${API_URL}/reports`);
  return response.data;
};
