import { StyleSheet } from 'react-native'

const dynamicStyles = (theme, appearance) => {
  return new StyleSheet.create({
    btnClickContain: {
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
      marginBottom: 5,
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    btnIcon: {
      height: 25,
      width: 25,
    },
    btnText: {
      fontFamily: 'FallingSkyCond',
      fontSize: 16,
      marginLeft: 10,
      marginTop: 2,
    },
  })
}

export default dynamicStyles
