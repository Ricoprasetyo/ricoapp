import { View, Text, StyleSheet } from 'react-native';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Aplikasi ini menampilkan berbagai macam resep makanan dari seluruh dunia.
        Dibuat menggunakan React Native + Expo Router untuk tugas pengembangan mobile.
      </Text>
      <Text style={styles.text}>
        Dibuat oleh: Rico Dwi Prasety
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#7fffd4', // Ganti warna latar belakang menjadi olive green
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  text: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginVertical: 10 
  }
});
