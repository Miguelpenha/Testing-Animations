export declare global {
    namespace NodeJS {
      interface ProcessEnv {
        EXPO_PUBLIC_API_KEY_MOVIEDB: string
        NODE_ENV: 'development' | 'production'
        EXPO_PUBLIC_ACCESS_KEY_UNSPLASH: string
      }
    }
}