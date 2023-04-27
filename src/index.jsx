import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Input, CustomModal, Events } from './components'

export default function App () {
  const [text, setText] = useState('')
  const [events, setEvents] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const color = '#35A7FF'

  const onAddEvent = () => {
    if (text.length === 0) return
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ])
    setText('')
  }

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible)
    const selectedEvent = events.find(event => event.id === id)
    setSelectedEvent(selectedEvent)
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible)
    setSelectedEvent(null)
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Input
        color={color}
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAddEvent}
        placeholder='Enter your event'
        value={text}
      />
      <Events events={events} onSelectItem={onHandlerEvent} />
      <CustomModal isVisible={modalVisible} color={color} onCancel={onHandlerCancelModal} onDelete={onHandlerDeleteEvent} animateType='slide' selectedEvent={selectedEvent} />

    </View>
  )
}
