import fetch from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<string[]> {
    return fetch(`${this.baseUrl}/users`, {
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
    return fetch(`${this.baseUrl}/users/${id}`, {
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

  getUserComments(id: number): Promise<string[]> {
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
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

  create(params: Record<string, unknown>): Promise<Record<string, unknown>> {
    return fetch(`${this.baseUrl}/users/`, {
      method: 'POST',
      body: JSON.stringify(
        params
      ),
      headers: {
        'Content-Type': 'application/json'
      },
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

  uptade(id: number, params: Record<string, unknown>): Promise<string[]>{
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(
        id,
        params,
      ),
      headers: {
        'Content-Type': 'application/json'
      },
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

  delete(id: number): Promise<string[]> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(
        id
      ),
      headers: {
        'Content-Type': 'application/json'
      }
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
  UserRepository
}
