import { defineConfig } from "@playwright/test"

export default defineConfig({
    testDir: './features', // diretório onde estão os arquivos .feature
    timeout: 30 *1000,
    retries: 1,
    reporter: [['list']],
    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [['list'], ['html', { outputFolder: 'report-html' }]],
})