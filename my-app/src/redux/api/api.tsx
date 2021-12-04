import { User } from '../contant/types';
export const getUserList = async () => {
  return fetch('http://localhost:8080/customers/')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
export const addUser = async (data: User) => {
  console.log(data);
  return fetch('http://localhost:8080/customers/add', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
export const deleteUserAPI = async (id: number) => {
  return fetch('http://localhost:8080/customers/delete/' + id, {
    method: 'delete',
  }).catch((error) => Promise.reject(error));
};
//view
export const viewUser = async (id: number) => {
  return fetch('http://localhost:8080/customers/view/' + id)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
export const updateUserAPI = async (id: number, user: User) => {
  return fetch('http://localhost:8080/customers/update/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => Promise.reject(error));
};
