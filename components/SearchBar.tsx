import { View, Text, TextInput, useAnimatedValue, Animated } from 'react-native'
import React from 'react'
import { ColorStyles } from '@/styles/ColorStyles'
import AI from '../assets/icons/ai.svg'

const SearchBar = () => {
    const [focus, setFocus] = React.useState(false)

    const fadeAnim = useAnimatedValue(1);

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }).start();
    };
    
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        }).start();
    };

    return (
        <View style={{position: 'relative', width: '100%'}}>
        <TextInput 
            placeholder='Que servicio necesitas?'
            placeholderTextColor={ColorStyles.secondaryGray}
            style={{
                borderColor: ColorStyles.border,
                width: '100%',
                borderWidth: 1,
                borderRadius: 42,
                color: ColorStyles.selectedBlack,
                paddingVertical: 12,
                paddingHorizontal: 16,
                fontFamily: 'DMSans-Bold',
                fontSize: 16,
            }}
            onFocus={()=> {
                fadeOut()
                setFocus(true)
            }}
            onBlur={()=> {
                fadeIn()
                setFocus(false)
            }}
            />
            <Animated.View 
                style={{
                        position: 'absolute', 
                        right: 18, 
                        top: 12, 
                        backgroundColor: ColorStyles.white,
                        opacity: fadeAnim,
                }}>
                <AI 
                    width={22} 
                    height={22}
                />
            </Animated.View>
        </View>
    )
}

export default SearchBar