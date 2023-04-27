import { StyleSheet } from 'react-native'
const color = '#35A7FF'

export const styles = StyleSheet.create({
  itemListContainer: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: color,
    borderRadius: 5,
    marginVertical: 5
  },
  item: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
