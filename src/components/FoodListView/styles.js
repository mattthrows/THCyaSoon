import { StyleSheet } from 'react-native'

const styles = (theme, appearance) => {
  const colorSet = theme.colors[appearance]
  return new StyleSheet.create({
    title: {
      marginTop: 20,
      marginLeft: 5,
      fontWeight: 'bold',
      color: theme.colors[appearance].secondaryText,
      fontSize: 20,
      marginBottom: 15,
    },
    subtitleView: {
      paddingTop: 5,
    },
    description: {
      color: theme.colors[appearance].secondaryText,
      width: 200,
      fontSize: 12,
      flex: 1
    },
    leftItemContainer: { width: 250 },
    itemContainer: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 16,
      color: theme.colors[appearance].secondaryText,
      marginTop: 10,
    },
    rightIcon: {
      width: 100,
      height: 100,
    },
    vendorItemContainer: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      flex: 1,
      marginHorizontal: 8,
      marginBottom: 8,
      elevation: 1,
      padding: 10,
      shadowColor: colorSet.grey,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 1,
      borderColor: '#000',
      borderRadius: 5,
      backgroundColor: colorSet.secondaryBackground,
    },
    foodName: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'left',
      color: colorSet.secondaryText,
      fontSize: 15,
      marginVertical: 4,
      width: 250,
    },
    foodPrice: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'right',
      color: colorSet.secondaryText,
    },
  })
}

export default styles
