declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "production";
      ACCOUNT_KEY: string;
    }
  }
  interface Window {
    dummy: never;
  }
}

export {};
