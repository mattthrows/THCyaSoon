import { StyleSheet } from 'react-native'
import { heightPercentageToDP as h } from 'react-native-responsive-screen'

const dynamicStyles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]

  return new StyleSheet.create({
    container: {
      backgroundColor: theme.colors[appearance].primaryBackground,
      flex: 1,
    },
    searchContainer: {
      width:  250,
      backgroundColor: colorSet.grey3,
      marginTop: 7,
      borderRadius: 10,
    },
    modalContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: h(2),
    },
    mapImage: { width: 25, height: 25 },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      marginTop: 20,
      marginLeft: 5,
      fontWeight: 'bold',
      color: theme.colors[appearance].primaryText,
      fontSize: 20,
      marginBottom: 15,
    },
  })
}

export default dynamicStyles
