import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ColorStyles } from '@/styles/ColorStyles';
import { StyleSheet } from 'react-native';
import SearchBar from '@/components/SearchBar';
import Promos from '@/components/Home/Promos';
import Categories from '@/components/Home/Categories';
import Trending from '@/components/Home/Trending';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: ColorStyles.white}}>
      <View style={styles.content}>
        <SearchBar/>
        <Promos/>
      </View>
      <Categories/>
      <View style={styles.content}>
        <Trending/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    padding: 16,
  }
});

export default Home;
