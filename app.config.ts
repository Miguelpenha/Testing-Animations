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
    url: ''
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    adaptiveIcon: {
      backgroundColor: '#200004',
      foregroundImage: './assets/adaptive-icon.png'
    },
    package: 'com.miguelpenha.testing-animations'
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
      projectId: ''
    }
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  }
})