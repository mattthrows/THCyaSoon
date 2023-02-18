import { StyleSheet } from 'react-native'

const styles = (theme, appearance) => {
  return new StyleSheet.create({
    title: {
      fontSize: 16,
      color: theme.colors[appearance].primaryText,
      fontWeight: '500',
    },
    subtitleView: {
      paddingTop: 5,
    },
    description: {
      color: theme.colors[appearance].primaryText,
      width: 200,
      fontSize: 12,
    },
    leftItemContainer: { width: 250 },
    itemContainer: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 16,
      color: theme.colors[appearance].primaryText,
      marginTop: 10,
    },
    rightIcon: {
      width: 100,
      height: 100,
    },
  })
}

export default styles
