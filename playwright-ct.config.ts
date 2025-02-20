import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/__vrt__", // テストファイルを格納するディレクトリ
  testMatch: "vrt.test.ts", // 今回設定するテストファイルの名前
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: process.env.BASE_URL, // ここは環境変数で指定するようにする
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"] } },
    { name: "Mobile Safari", use: { ...devices["iPhone 12"] } },
  ],
});
