import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.waniya.lib',
  appName: 'کتابخانه وانیا',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export interface PluginsConfig {
  [CAPACITOR_ANDROID_STUDIO_PATH: string]: | {
    [CAPACITOR_ANDROID_STUDIO_PATH: string]: '/home/mohammadhosseiniparto/Downloads/android-studio/bin/studio.sh';
  }
    | undefined;
}
export default config;
