const env = process.env;

export const envConfig = new (class EnvClass {
    NODE_ENV: "test" | "production" | "development" = env.NODE_ENV;

    isProd = this.NODE_ENV === "production";
    isTest = this.NODE_ENV === "test";
    isDev = this.NODE_ENV === "development";

    /** Google Analytics ID */
    gaid = env.GAID as string;
})();

