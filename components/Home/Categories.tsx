import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { categoriesData } from '@/constants/data'
import Category from './Category'

const Categories = () => {
  return (
    <View style={{
        width: '100%',
        position: 'relative',
    }}>
        <FlatList 
            data={categoriesData} 
            keyExtractor={(item) => item.title}
            horizontal
            style={{
                paddingHorizontal: 16,
            }}
            renderItem={
                ({item}) => (
                    <Category/>
                )
            }    
        />
    </View>
    
  )
}


export default Categories