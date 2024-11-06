import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeScreenProp from '@/constants/Navigate'



export default function Home() {
    const navigation = useNavigation<HomeScreenProp>()
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={() => navigation.navigate('Detail')}>Detail</Text>
    </View>
  )
}