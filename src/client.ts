class ApiClient {
  private baseUrl: string = 'https://the-one-api.dev';
  private apiVersion: string = 'v2';
  private apiKey: string | undefined;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }

  async get(endpoint: string) {
    try {
      const result = await fetch(`${this.baseUrl}/${this.apiVersion}/${endpoint}`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
      });
      return await result.json();
    } catch (error) {
      throw error;
    }
  }

  // @todo later
  async post() {}
  async delete() {}
  async put() {}
  async patch() {}
}

export default ApiClient;
