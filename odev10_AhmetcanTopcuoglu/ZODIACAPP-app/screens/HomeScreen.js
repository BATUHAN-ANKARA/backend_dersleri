import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>Anasayfaya Hoş Geldiniz</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.leftButton]}
          onPress={() => navigation.navigate('Blog')}
        >
          <Text style={styles.buttonText}>Blog Sayfası</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rightButton]}
          onPress={() => navigation.navigate('Zodiac')}
        >
          <Text style={styles.buttonText}>Burç Yorumları</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 60, // burayı artırdım, böylece alt boşluk genişler ve butonlar biraz yukarı çıkar
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 200, // butonların altına boşluk eklendi
  },
  button: {
    flex: 0.45,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  leftButton: {
    backgroundColor: '#3498db',
  },
  rightButton: {
    backgroundColor: '#e67e22',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

