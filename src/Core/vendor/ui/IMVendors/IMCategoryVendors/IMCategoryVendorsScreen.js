import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslations } from 'dopenative'
import IMVendorsScreen from '../IMVendorsScreen'

export function IMCategoryVendorsScreen({ route, navigation }) {
  const category = route?.params?.category
  const vendors = useSelector(state => state.vendor.vendors)

  const { localized } = useTranslations()

  const [vendorList, setVendors] = useState([])

  useEffect(() => {
    let vendorCategoryList = []
    
    vendors?.forEach(vendorItem => {
      vendorItem.foods?.forEach(foodItem => {
        if (foodItem.categoryID === category?.id) {
          // check if vendor is already in the list
          if (!vendorCategoryList.includes(vendorItem)) {
            vendorCategoryList.push(vendorItem)
          }
        }}
      )
    })
    
    setVendors(vendorCategoryList)
  }, [category, vendors])

  useLayoutEffect(() => {
    const title = route?.params?.category;
    navigation.setOptions({
      headerTitle: route?.params?.category
        ? `${route?.params?.category.name}`
        : localized('Home'),
      headerRight: () => <View />,
    })
  }, [navigation])

  return <IMVendorsScreen navigation={navigation} vendors={vendorList} />
}
