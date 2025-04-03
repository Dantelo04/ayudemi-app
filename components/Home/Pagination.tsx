import { View, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ColorStyles } from '@/styles/ColorStyles';

interface PaginationProps {
    data: any[];
    activeIndex: number;
}

const Pagination = ({ data, activeIndex }: PaginationProps) => {
    const animatedValues = useRef(data.map(() => new Animated.Value(8))).current;

    useEffect(() => {
        Animated.parallel(
            animatedValues.map((anim, index) =>
                Animated.timing(anim, {
                    toValue: index === activeIndex ? 20 : 8,
                    duration: 300,
                    useNativeDriver: false,
                })
            )
        ).start();
    }, [activeIndex]);

    return (
        <View style={styles.paginationContainer}>
            {data.map((_, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.paginationDot,
                        { 
                            width: animatedValues[index],
                            opacity: index === activeIndex ? 1 : 0.3
                         }
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        flexDirection: 'row',
        gap: 4,
        backgroundColor: ColorStyles.lightWhite,
        padding: 4,
        borderRadius: 24,
        alignItems: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: ColorStyles.white,
    },
});

export default Pagination;
