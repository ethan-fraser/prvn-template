import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE_BASE_URL);

export default class PocketbaseService {
  static async checkHealth() {
    try {
      const result = await pb.health.check();
      return result.code === 200;
    } catch {
      return false;
    }
  }
}
