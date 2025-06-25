// AppleButton.tsx
import { Text, Pressable } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const AppleButton = ({ title, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-[#f0f0f5] px-6 py-3 rounded-2xl active:opacity-70"
    >
      <Text className="text-black text-lg font-semibold text-center">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppleButton;