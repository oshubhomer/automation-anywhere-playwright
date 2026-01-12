const { test, expect } = require("@playwright/test");
const { LearningInstanceApi } = require("../../api/LearningInstanceApi");

test("Create Learning Instance via API", async ({ request }) => {

  const api = new LearningInstanceApi(request);

  // 1️⃣ Login
  const loginRes = await api.login(
    process.env.AA_USERNAME,
    process.env.AA_PASSWORD
  );
  expect(loginRes.status()).toBe(200);

  const loginBody = await loginRes.json();
  expect(loginBody.token).toBeTruthy();

  const token = loginBody.token;

  // 2️⃣ Get domains
  const domainsRes = await api.getDomains(token);
  expect(domainsRes.status()).toBe(200);

  const domains = await domainsRes.json();
  const domain = domains.items[0];
  expect(domain).toBeTruthy();

  // 3️⃣ Get language for that domain
  const langRes = await api.getDomainLanguages(token, domain.id);
  expect(langRes.status()).toBe(200);

  const languages = await langRes.json();
  const lang = languages.items[0];
  expect(lang).toBeTruthy();

  // 4️⃣ Create instance using REAL IDs
  const instanceName = `Playwright_Instance_${Date.now()}`;

  const createRes = await api.createLearningInstance(
    token,
    instanceName,
    domain.id,
    lang.id,
    lang.providerId
  );

  expect(createRes.status()).toBe(201);

  const instanceBody = await createRes.json();

  // 5️⃣ Validate response
  expect(instanceBody.id).toBeTruthy();
  expect(instanceBody.name).toBe(instanceName);
  expect(instanceBody.domainId).toBe(domain.id);
  expect(instanceBody.domainLanguageId).toBe(lang.id);

  // Status can vary
  expect(["CREATED", "DRAFT", "TRAINING", "READY"]).toContain(instanceBody.status);

});
