// hooks/usePoppinsFonts.ts
import { useFonts } from 'expo-font';

export const usePoppinsFonts = () => {
  return useFonts({
    'Poppins-Thin': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),

    'Poppins-ThinItalic': require('../assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
    'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
    'Poppins-LightItalic': require('../assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-RegularItalic': require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-MediumItalic': require('../assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-BoldItalic': require('../assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBoldItalic': require('../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-BlackItalic': require('../assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
  });
};