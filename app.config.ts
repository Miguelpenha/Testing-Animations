import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  owner: 'miguelpenha',
  scheme: 'testing-animations',
  name: 'Testing-Animations',
  slug: 'Testing-Animations',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    resizeMode: 'contain',
    image: './assets/splash.png',
    backgroundColor: '#200004'
  },
  updates: {
    url: 'https://u.expo.dev/af8f31e8-cc2a-4305-b39c-64535d83c782'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    adaptiveIcon: {
      backgroundColor: '#200004',
      foregroundImage: './assets/adaptive-icon.png'
    },
    package: 'com.miguelpenha.testingAnimations'
  },
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    ...process.env,
    eas: {
      projectId: 'af8f31e8-cc2a-4305-b39c-64535d83c782'
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  }
})