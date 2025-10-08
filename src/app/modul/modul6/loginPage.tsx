// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const loginPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const validateEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required!');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email format!');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters!');
      return;
    }

    // Login successful, navigate to Home screen
    router.replace({ pathname: '/modul/modul6/homeScreen', params: { userEmail: email } });
  };

  // const handleExternalLink = async () => {
  //   const url = 'https://www.google.com';
  //   const supported = await Linking.canOpenURL(url);
  //   if (supported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert('Error', 'Cannot open URL');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
        accessible
        accessibilityLabel='Email input'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        accessible
        accessibilityLabel='Password input'
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} accessible accessibilityLabel='Login button'>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default loginPage;
