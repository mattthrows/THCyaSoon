import { Platform, StyleSheet } from 'react-native'

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginVertical: 4,
      flexDirection: 'row',
      height: 40,
      backgroundColor: colorSet.grey3,
    },
    cancelButtonText: {
      color: 'black',
      fontSize: 16,
      marginBottom: 5,
    },
    searchInput: {
      fontSize: 14,
      color: 'black',
      flex: 1,
    },
  })
}

export default dynamicStyles
