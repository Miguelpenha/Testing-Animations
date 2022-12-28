export declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_KEY_MOVIEDB: string
        ACCESS_KEY_UNSPLASH: string
        NODE_ENV: 'development' | 'production'
      }
    }
}