import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'dopenative'
import FastImage from 'react-native-fast-image'
import dynamicStyles from './styles'

export default function FoodListView({ food, onPress }) {

  const { theme, appearance } = useTheme()
  const styles = dynamicStyles(theme, appearance)

  return (
    // <TouchableOpacity
    //   onPress={() => onPress(food)}
    //   style={styles.itemContainer}>
    //   <View style={styles.leftItemContainer}>
    //     <Text style={styles.title}>{food.name}</Text>
    //     <Text style={styles.description}>{food.description}</Text>
    //     <Text style={styles.price}>{food.price && "$" + food.price}</Text>
    //   </View>
    //   <FastImage style={styles.rightIcon} source={{ uri: food.photo }} />
    // </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(food)}>
      <View style={styles.vendorItemContainer}>
        <FastImage
          placeholderColor={theme.colors[appearance].grey9}
          style={styles.foodPhoto}
          source={{ uri: food.photo }}
        />
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text numberOfLines={3} style={styles.description}>{food.description}</Text>
          <Text style={styles.price}>{food.price && "$" + food.price}</Text>
        </View>
        <View>
          <FastImage style={styles.rightIcon} source={{ uri: food.photo }} />
        </View>
      </View>
      </TouchableOpacity>
  )
}
