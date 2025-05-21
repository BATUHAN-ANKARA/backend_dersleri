import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

export default function HoroscopeScreen({ route }) {
  const { sign } = route.params;
  const [period, setPeriod] = useState('daily');
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHoroscope = async (sign, period) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://192.168.1.4:3000/api/zodiac/horoscope`, {
        params: { sign, period },
      });
      setHoroscope(res.data.horoscope);
    } catch (e) {
      setError('Yorum alınamadı.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHoroscope(sign, period);
  }, [sign, period]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{sign} - {period} yorumu</Text>

      <Picker
        selectedValue={period}
        style={styles.picker}
        onValueChange={(itemValue) => setPeriod(itemValue)}
      >
        <Picker.Item label="Günlük" value="daily" />
        <Picker.Item label="Haftalık" value="weekly" />
        <Picker.Item label="Aylık" value="monthly" />
        <Picker.Item label="Yıllık" value="yearly" />
      </Picker>

      {loading && <ActivityIndicator size="large" color="#3498db" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {!loading && !error && <Text style={styles.horoscopeText}>{horoscope}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  picker: { width: 200, height: 50, marginBottom: 20 },
  horoscopeText: { fontSize: 18, lineHeight: 26, textAlign: 'center' },
});
