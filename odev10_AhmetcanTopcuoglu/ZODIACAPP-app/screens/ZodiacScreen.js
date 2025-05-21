import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ZodiacScreen({ navigation }) {
  const [signs, setSigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.1.4:3000/api/zodiac/signs')
      .then(res => setSigns(res.data))
      .catch(err => setError('Burçlar yüklenemedi.'));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Burç Seçiniz</Text>
      {error && <Text style={{color:'red'}}>{error}</Text>}
      {signs.map((sign) => (
        <TouchableOpacity
          key={sign}
          style={styles.button}
          onPress={() => navigation.navigate('Horoscope', { sign })}
        >
          <Text style={styles.buttonText}>{sign}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});
