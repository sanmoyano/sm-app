import React from 'react'
import EventItem from './item'
import { View, FlatList } from 'react-native'
// import styles from './styles'

const Events = ({ events, onSelectItem }) => {
  const renderItem = ({ item }) => (
    <EventItem item={item} onSelectItem={onSelectItem} />
  )
  const keyExtractor = (item) => item.id
  return (
  // <View style={styles.listContainer}>
    <FlatList
      renderItem={renderItem}
      data={events}
      keyExtractor={keyExtractor}
      alwaysBounceVertical={false}
    />
  // </View>
  )
}

export default Events
