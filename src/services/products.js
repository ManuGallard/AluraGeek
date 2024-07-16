import { API_URL } from "../utils/constants.js";

export class Products {
  constructor() {}

  /**
   * @returns {Promise<[error: Error | null, data: [] | null]>}
   */
  static async getAll () {
    try {
      const result = await fetch(`${API_URL}/products`);

      if (!result.ok) throw new Error(result.statusText);

      const data = await result.json();

      return [null, data];
    } catch (error) {
      return [error, null];
    }
  }

  static async create ({name, image, price, category}) {

    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, image, price, category})
    }

    try {
      const result = await fetch(`${API_URL}/products`, config);

      if (!result.ok) throw result;

      const data = await result.json();

      return [null, data];
    } catch (error) {
      return [error, null];
    }
  }

  static async delete (id) {
    try {
      const result = await fetch(`${API_URL}/products/${id}`, {method: 'DELETE'});

      if (!result.ok) throw result;

      const data = await result.json();
      return [null, data];
    } catch (error) {
      return [error, null];
    }
  }
}