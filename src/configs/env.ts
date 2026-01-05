const env = process.env;

export const envConfig = {
    NODE_ENV: env.NODE_ENV as "test" | "production" | "development",
    isProd: env.NODE_ENV === "production",
    isTest: env.NODE_ENV === "test",
    isDev: env.NODE_ENV === "development",
    /** Google Analytics ID */
    googleAnalyticsId: env.GOOGLE_ANALYTICS_ID as string,
};
