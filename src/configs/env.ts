import type { EnvType } from "#/types/env";

const env = process.env;

export const cEnv = new (class EnvClass {
    NODE_ENV = env.NODE_ENV as EnvType;
    mode = {
        prod: this.NODE_ENV === "production",
        test: this.NODE_ENV === "test",
        dev: this.NODE_ENV === "development",
    };
    /** Google Analytics ID */
    gaid = env.GAID as string;
})();
