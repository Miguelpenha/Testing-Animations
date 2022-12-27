export declare global {
    namespace NodeJS {
      interface ProcessEnv {
        ACCESS_KEY: string
        NODE_ENV: 'development' | 'production'
      }
    }
}