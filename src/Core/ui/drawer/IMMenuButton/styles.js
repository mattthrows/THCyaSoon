import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]

  return StyleSheet.create({
    btnClickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: colorSet.primaryBackground,
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: colorSet.primaryBackground,
      padding: 7,
    },
    btnIcon: {
      tintColor: colorSet.primaryText,
      height: 30,
      width: 30,
      marginRight: 20,
      
    },
    btnText: {
      fontWeight: 'bold',
      marginTop: 5,
      color: colorSet.secondaryText,
    },
  })
}

export default dynamicStyles
