import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import Discovery from '../../assets/icons/Discovery.svg'
import Home from '../../assets/icons/Home.svg'
import Profile from '../../assets/icons/Profile.svg'
import { TextBold } from '@/styles/TextStyles'
import { ColorStyles } from '@/styles/ColorStyles'

interface TabIconProps {
  children: ReactElement | string
  color: string
  name: string
  focused: boolean
}

const TabIcon = ({children, color, name, focused} : TabIconProps) => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 66,
      height: 54,
    }}>
      {children}
      <TextBold size={14} color={color}>{name}</TextBold>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: ColorStyles.white}}>
      <Tabs screenOptions={{
        tabBarStyle:{
          backgroundColor: ColorStyles.white,
          borderTopColor: 'transparent',
          shadowColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
          paddingTop: 18,
          height: 64,
        }
      }}>
        <Tabs.Screen name="home" options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon 
              color={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}
              name='Inicio'
              focused={focused}
            >
              <Home width={28} height={28} 
              fill={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}/>
            </TabIcon>
          )
        }}/>
        <Tabs.Screen name="explore" options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon 
              color={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}
              name='Buscar'
              focused={focused}
            >
              <Discovery width={28} height={28} 
              fill={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}/>
            </TabIcon>
          )
        }}/>
        <Tabs.Screen name="account" options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <TabIcon 
              color={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}
              name='Cuenta'
              focused={focused}
            >
              <Profile width={28} height={28} 
              fill={focused ? ColorStyles.selectedBlack : ColorStyles.unselectedGray}/>
            </TabIcon>
          )
        }}/>
      </Tabs>
    </SafeAreaView>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})