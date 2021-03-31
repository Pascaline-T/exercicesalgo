import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL;
  
  getAll(): Promise<string[]> {
    return fetch(`${process.env.BASE_URL}/authors`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
  }

  getOne(id: number): Promise<string[]>{
    return fetch(`${this.baseUrl}/authors/${id}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        return error
      })
  }

  getAuthorBooks(id: number): Promise<string[]>{
    return fetch(`${this.baseUrl}/authors/${id}/books`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        return error
      })
  }

  searchByName(term : string): Promise<string[]>{
    return fetch(`${this.baseUrl}/authors?q=${term}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json
      })
      .catch((error) => {
        return error
      })
  }

}

// Leave the line below for tests to work
export {
  AuthorRepository
}
