import { useState, useEffect, useRef } from 'react'
import { subscribeProducts as subscribeToSearchedProductsAPI } from './FirebaseProductsClient'
import { useConfig } from '../../config'

const useSearchProducts = searchedText => {
  const config = useConfig()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const unsubscribeFromSearchedProducts = useRef(null)

  useEffect(() => {
    setLoading(true)
    unsubscribeFromSearchedProducts.current?.()
    unsubscribeFromSearchedProducts.current = subscribeToSearchedProductsAPI(
      config.tables?.vendorsTableName,
      onSearchedProductsUpdate,
    )
    return () => {
      unsubscribeFromSearchedProducts.current?.()
    }
  }, [searchedText])

  const onSearchedProductsUpdate = querySnapshot => {
    const vendorProducts = []
    querySnapshot?.forEach(doc => {
      if (!searchedText) {
        vendorProducts.push({
          id: doc.id,
          ...doc,
        })
      } else {
        doc.foods.forEach(food => {
          const name = food.name
          const text = searchedText != null ? searchedText?.toLowerCase() : ''
          const index = name.toLowerCase().search(text)
          if (index !== -1) {

            // see if vendor exists in array
            const curFoodIndex = vendorProducts.findIndex(item => item.id === doc.id)

            if(curFoodIndex !== -1) {
              vendorProducts[curFoodIndex].foods.findIndex(item => item.id === food.id) === -1 && vendorProducts[curFoodIndex].foods.push(food)
            } else {
              vendorProducts.push({
                id: doc.id,
                name: doc.name,
                foods: [food],
              })
            }
          }
        })
      }
    })

    setProducts(vendorProducts)
    setLoading(false)
  }

  return { products, loading }
}

export default useSearchProducts
