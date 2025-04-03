import { View, Text, StyleSheet, FlatList, Dimensions, ViewToken } from 'react-native'
import React, { useState } from 'react'
import { ColorStyles } from '@/styles/ColorStyles'
import { Title } from '@/styles/TextStyles'
import Pagination from './Pagination'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Slide from './Slide'
import { promoData } from '@/constants/data'

const Promos = () => {
    const [containerWidth, setContainerWidth] = useState(Dimensions.get('window').width);
    const [activeIndex, setActiveIndex] = useState(0);

    const viewabilityConfigCallbackPairs = React.useRef([
        {
            viewabilityConfig: {
                itemVisiblePercentThreshold: 50,
            },
            onViewableItemsChanged: ({viewableItems}: {viewableItems: ViewToken[]}) => {
                if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
                    setActiveIndex(viewableItems[0].index % promoData.length);
                }
            }
        }
    ]);

    return (
        <View 
        onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setContainerWidth(width);
        }}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 200,
            backgroundColor: ColorStyles.brandBlue,
            borderRadius: 8,
        }}>
            <Animated.FlatList 
                data={promoData} 
                keyExtractor={(item) => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                pagingEnabled
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                renderItem={({item}) => (
                    <Slide key={item.title} title={item.title} width={containerWidth}/>
                )}
            />
            <Pagination data={promoData} activeIndex={activeIndex}/>
        </View>
  )
}

export default Promos