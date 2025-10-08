import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const homeScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { userEmail } = useLocalSearchParams<{ userEmail: string }>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.welcomeText}>Welcome, {userEmail || 'Guest'}!</Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.button}
        accessible
        accessibilityLabel='Show modal button'
      >
        <Text style={styles.buttonText}>Show Modal</Text>
      </Pressable>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contoh Modal</Text>
            <Text style={styles.modalText}>This is a pop-up modal over the main screen!</Text>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
              accessible
              accessibilityLabel='Close modal button'
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
  button: {
    width: '50%',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  closeButton: {
    width: '50%',
    backgroundColor: '#ff6347',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default homeScreen;
