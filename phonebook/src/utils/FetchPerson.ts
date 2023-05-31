import axios from 'axios'
import { IPerson } from '../interfaces/Person';
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = (): Promise<IPerson[]> => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const createPerson = (newObject: IPerson): Promise<IPerson> => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const updatePerson = (id: string, newObject: IPerson): Promise<IPerson> => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

const deletePerson = (id: string): Promise<IPerson> => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
}

export { getAllPersons, createPerson, updatePerson, deletePerson };