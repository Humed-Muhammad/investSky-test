import { useFonts } from 'expo-font';
import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

export const useLoadFonts = () => {
  return useFonts({
    Poppins: Poppins_500Medium,
    PoppinsBold: Poppins_700Bold,
  });
};
