const env = process.env;

export const envConfig = {
    NODE_ENV: env.NODE_ENV,
    isProd: env.NODE_ENV === "production",
    isTest: env.NODE_ENV === "test",
    isDev: env.NODE_ENV === "development",
    googleAnalyticsId: env.GOOGLE_ANALYTICS_ID as string,
};
