import { View, Text } from 'react-native'
import React from 'react'
import { ColorStyles } from '@/styles/ColorStyles'

const Category = () => {
  return (
    <View style={{
        width: 90,
        height: 90,
        marginRight: 10,
        backgroundColor: ColorStyles.almostWhite,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      {/* <Text>Category</Text> */}
    </View>
  )
}

export default Category