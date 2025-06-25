// components/PoppinsText.tsx
import { Text, TextProps } from 'react-native';
import React from 'react';

type FontWeight =
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Black';

type Props = TextProps & {
  weight?: FontWeight;
  italic?: boolean;
};

const PoppinsText: React.FC<Props> = ({
  weight = 'Bold',
  italic = false,
  style,
  children,
  ...props
}) => {
  const fontKey = `Poppins-${weight}${italic ? 'Italic' : ''}`;

  return (
    <Text {...props} style={[{ fontFamily: fontKey }, style]}>
      {children}
    </Text>
  );
};

export default PoppinsText;