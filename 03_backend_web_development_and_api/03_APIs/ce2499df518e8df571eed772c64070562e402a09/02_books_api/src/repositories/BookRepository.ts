import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";

class BookRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<string[]>{
    return fetch(`${this.baseUrl}/books`, {
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

  getOne(id: number): Promise<string[]>{
    return fetch(`${this.baseUrl}/books/${id}`, {
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

  getBookComments(id: number): Promise<string[]>{
    return fetch(`${this.baseUrl}/books/${id}/comments`, {
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

  searchByTitle(term : string): Promise<string[]>{
    return fetch(`${this.baseUrl}/books?q=${term}`, {
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
  BookRepository
}
