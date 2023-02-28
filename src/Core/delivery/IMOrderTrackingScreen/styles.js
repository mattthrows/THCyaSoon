import { StyleSheet } from 'react-native'

const styles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.primaryBackground,
      paddingTop: 20,
    },
    upperPane: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      alignItems: 'center',
      marginBottom: 10,
    },
    orderDelivered: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom: 100,

    },
    time: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colorSet.primaryText,
    },
    eta: {
      fontSize: 14,
      marginHorizontal: 10,
      color: colorSet.secondaryText,
      fontWeight: 'bold',
      marginBottom: -3,
    },
    etaTime: {
      fontSize: 14,
      marginHorizontal: 10,
      color: colorSet.primaryText,
      fontWeight: 'bold',
      marginBottom: -3,
    },
    filled: {
      width: 20,
      height: 4,
      backgroundColor: colorSet.primaryForeground,
    },
    unfilled: {
      width: 20,
      height: 4,
      backgroundColor: colorSet.primaryText,
    },
    progressPane: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: 20,
      marginHorizontal: 10,
    },
    prepText: {
      fontSize: 18,
      color: colorSet.primaryText,
      paddingRight: 5,
      marginHorizontal: 10,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    bar: {
      marginVertical: 20,
      alignSelf: 'center',
      marginHorizontal: 10,
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginVertical: 50,
      elevation: 4,
      shadowOffset: { width: 4, height: 4 },
    },
    mapStyle: {
      width: '100%',
      height: 300,
      marginVertical: 20,
    },
    scroll: {
      backgroundColor: colorSet.primaryBackground,
    },
    mapCarIcon: {
      height: 32,
      width: 32,
      tintColor: colorSet.primaryForeground,
    },
    markerTitle: {
      backgroundColor: colorSet.primaryBackground,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
      color: colorSet.primaryText,
      fontSize: 12,
      fontWeight: 'bold',
      alignItems: 'center',
      overflow: 'visible',
    },
    marker: {
      overflow: 'visible',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 5,
      backgroundColor: theme.colors[appearance].primaryBackground,
    },
    divider: {
      width: '100%',
      height: 2,
      backgroundColor: colorSet.grey0,
      marginTop: 15,
    },
    logoImage: {
      width: '50%',
      height: '50%',
      resizeMode: 'contain',
      // tintColor: colorSet.primaryForeground,
    },
  })
}

export default styles
