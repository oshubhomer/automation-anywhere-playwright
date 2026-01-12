class LearningInstanceApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = "https://community.cloud.automationanywhere.digital";
  }

  async login(username, password) {
    return await this.request.post(
      `${this.baseUrl}/v2/authentication`,
      {
        data: {
          username,
          password
        }
      }
    );
  }

  async createLearningInstance(token, name, domainId, domainLanguageId, providerId) {
  return await this.request.post(
    `${this.baseUrl}/v3/learning-instances`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      data: {
        name,
        description: "",
        domainId,
        domainLanguageId,
        domainLanguageProviderId: providerId,
        locale: "en-US",
        genaiProvider: "Open_AI",
        isCloudExtraction: false,
        isDefault: true,
        isGenAIEnabled: true,
        isHeuristicFeedbackEnabled: true,
        useGenai: true,
        rules: [],
        fields: [],
        tables: [
          {
            name: "table",
            description: "",
            columns: []
          }
        ]
      }
    }
  );
}

  async getInstances(token) {
    return await this.request.get(
      `${this.baseUrl}/v3/learning-instances`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}

module.exports = { LearningInstanceApi };
