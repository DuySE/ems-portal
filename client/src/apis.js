import axios from 'axios';

export const login = (username, password) =>
  axios.post('http://localhost:3001/login', {
    username: username,
    password: password,
  }).then(res => ({ res })).catch(error => ({ error }));

export const getLeaves = username =>
  axios.get(`http://localhost:3001/employees/${username}/leaves`)
    .then(res => ({ res })).catch(error => ({ error }));

export const getReports = username =>
  axios.get(`http://localhost:3001/employees/${username}/reports`)
    .then(res => ({ res })).catch(error => ({ error }));
