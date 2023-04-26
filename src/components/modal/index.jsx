import React from 'react'
import { Modal, View, Text, Button } from 'react-native'
import { styles } from './styles'

const CustomModal = ({ isVisible, color, onCancel, onDelete, selectedEvent, animateType }) => {
  return (
    <Modal visible={isVisible} animationType={animateType}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Event Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Cancel'
            color={color}
            onPress={() => onCancel()}
          />
          <Button
            title='Delete'
            color={color}
            onPress={() => onDelete(selectedEvent.id)}
          />
        </View>
      </View>
    </Modal>
  )
}
export default CustomModal
