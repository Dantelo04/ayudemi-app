import { View, Text } from 'react-native'
import React from 'react'
import { Title } from '@/styles/TextStyles';
import { ColorStyles } from '@/styles/ColorStyles';

interface SlideProps {
    title: string;
    width: number;
}

const Slide = ({
    title,
    width,
}:SlideProps) => {
  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: width,
        borderColor: 'red',
    }}>
        <Title color={ColorStyles.white} size={48}>{title}</Title>
    </View>
  )
}

export default Slide