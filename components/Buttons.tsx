// AppleButton.tsx

import { usePoppinsFonts } from 'hooks/usePoppinsFonts';
import { Text, Pressable } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  className?: string; // make it optional

};


type CancelButtonProps = {
  onPress: () => void;
  
};


const AppleButton = ({ title, onPress, className = ''  }: Props) => {
  return (
    <Pressable
    onPress={onPress}
    className={`bg-[#000000] px-6 py-3 rounded-xl active:opacity-70 w-3/4 self-center m-10 ${className}`}
    >
      <Text className="text-white text-lg font-semibold text-center Poppins-Bold">
        {title}
      </Text>
    </Pressable>
  );
};




const CancelButton = ({onPress}: CancelButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-8 h-8 rounded-full bg-red-700 text-white items-center justify-center"
    >
      <Text className="text-white text-base">✕</Text>
    </Pressable>
  );
};
export  {AppleButton, CancelButton};