import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import { TextBold } from '@/styles/TextStyles'
import { ColorStyles } from '@/styles/ColorStyles';

interface ButtonProps {
    children: ReactElement | string;
    onPress?: () => void;
    style: 'large' | 'small' | 'outlined' | 'light';
}

const Button = ({children, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{
        backgroundColor: style === 'light' ? ColorStyles.lightBrandBlue : style === 'outlined' ? ColorStyles.transparent : ColorStyles.brandBlue,
        paddingVertical: style !== 'large' ? 10 : 12,
        paddingHorizontal: 24,
        borderRadius: style === 'light' ? 8 : 28,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderWidth: style === 'outlined' ? 1 : 0,
        borderColor: style === 'outlined' ? ColorStyles.brandBlue : 'transparent',
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
          <TextBold 
            size={style !== 'large' ? 20 : 24} 
            color={style === 'light' || style === 'outlined' ? ColorStyles.brandBlue : ColorStyles.white}>{children}</TextBold>  
          <TextBold 
            size={style !== 'large' ? 20 : 24} 
            color={style === 'light' || style === 'outlined' ? ColorStyles.brandBlue : ColorStyles.white}>→</TextBold>
        </View>
    </TouchableOpacity>
  )
}

export default Button