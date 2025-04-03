import { View, Text } from 'react-native'
import React from 'react'
import { ColorStyles } from '@/styles/ColorStyles'
import { TextBold, TextMedium } from '@/styles/TextStyles'
import Button from '../Button'

export type Service = {
    title: string,
    author: string,
    rating: number,
    price: number,
    image: string,
}

interface ServiceCardProps {
    service: Service
}

const ServiceCard = ({
    service
}: ServiceCardProps) => {
  return (
    <View style={{
        width: '100%',
        gap: 10,
        padding: 12,
        borderRadius: 8,
        borderColor: ColorStyles.border,
        borderWidth: 1,
    }}>
      <View style={{
        flexDirection: 'row',
        gap: 10
      }}>
        <View style={{
            width: 68,
            height: 68,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: ColorStyles.border,
            backgroundColor: ColorStyles.almostWhite,
        }}></View>
        <View style={{
            gap: 4,
        }}>
            <TextBold>{service.title}</TextBold>
            <TextBold size={14} color={ColorStyles.secondaryGray}>{service.author}</TextBold>
            <TextMedium size={14} color={ColorStyles.unselectedBlack}>{service.rating.toString()}</TextMedium>
        </View>
      </View>
      <Button style='light'>Contratar</Button>
    </View>
  )
}

export default ServiceCard