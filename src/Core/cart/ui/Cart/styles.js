import { StyleSheet } from 'react-native'

const styles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.primaryBackground,
    },
    emptyTitle: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      justifyContent: 'center',
      color: colorSet.primaryText,
    },
    flat: {
      flex: 1,
      margin: 10,
    },
    rowContainer: {
      flexDirection: 'row',
    },
    count: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 2,
      paddingBottom: 2,
      textAlign: 'center',
      color: theme.colors[appearance].secondaryText,
      backgroundColor: theme.colors[appearance].primaryBackground,
      borderColor: theme.colors[appearance].primaryForeground,
      borderWidth: 1,
      borderRadius: 3,
    },
    price: {
      padding: 10,
      color: colorSet.primaryText,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      flex: 1,
      padding: 10,
      color: colorSet.secondaryText,
      fontWeight: 'bold',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    actionButtonContainer: {
      padding: 16,
      backgroundColor: colorSet.primaryForeground,
      marginBottom: 30,
    },
    actionButtonText: {
      fontWeight: 'bold',
      color: colorSet.accentText,
    },
    emptyViewContainer: {
      marginTop: '25%',
      flex: 1,
    },
  })
}

export default styles
