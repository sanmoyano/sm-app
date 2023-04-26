import { StyleSheet } from 'react-native'

const color = '#35A7FF'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 20
  },
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
