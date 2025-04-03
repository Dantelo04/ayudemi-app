import { View, Text } from 'react-native'
import React from 'react'
import { Title } from '@/styles/TextStyles'
import { ColorStyles } from '@/styles/ColorStyles'
import { trendingDataDemo } from '@/constants/data'
import ServiceCard from './ServiceCard'

const Trending = () => {
    return (
        <View style={{
            gap: 10
        }}>
        <Title color={ColorStyles.selectedBlack}>Servicios Populares</Title>
        {trendingDataDemo.map((item, index) => (
            <ServiceCard service={item} key={index}/>
        ))}
        </View>
    )
}

export default Trending