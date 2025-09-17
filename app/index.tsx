import { useState } from "react";
import { Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Index() {
  const [alas, setAlas] = useState('')
  const [tinggi, setTinggi] = useState('')
  const [message, setMessage] = useState('')

  const hitungLuas = () => {
    const alasNum = parseFloat(alas);
    const tinggiNum = parseFloat(tinggi);

    if (isNaN(alasNum) || isNaN(tinggiNum) || alasNum <= 0 || tinggiNum <= 0) {
      setMessage('Masukkan angka yang valid untuk alas dan tinggi');
      return;
    }

    const hasil = (alasNum * tinggiNum) / 2;
    setMessage(`Hasilnya adalah: ${hasil} satuan luas`);
  }

  return (
    <ScrollView>
      <View className='flex-1 items-center justify-center px-5'>
        <Text className='text-3xl font-bold text-center underline text-blue-500 p-5'>
          Tugas 3 - Hitung Luas Segitiga
        </Text>

        <Image
          className='w-20 h-20'
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <Text className='text-center text-2xl p-5'>
          Halo, selamat datang di aplikasi React Native menggunakan Expo!
        </Text>

        <TextInput
          className='border border-blue-600 rounded-xl my-2 w-full px-5'
          placeholder='Masukkan Alas'
          value={alas}
          onChangeText={setAlas}
          keyboardType='numeric'
        />
        <TextInput
          className='border border-blue-600 rounded-xl my-2 w-full px-5'
          placeholder='Masukkan Tinggi'
          value={tinggi}
          onChangeText={setTinggi}
          keyboardType='numeric'
        />

        <TouchableOpacity
          className='bg-blue-500 py-3 px-6 my-2 w-full rounded-lg items-center justify-center'
          onPress={hitungLuas}
        >
          <Text className='text-white text-base font-bold'>
            Tampilkan Hasil
          </Text>
        </TouchableOpacity>

        {message ? (
          <Text
            className={`font-bold text-2xl p-5 ${message.includes('valid') ? 'text-red-600' : 'text-green-600'}`}
          >
            {message}
          </Text>
        ) : null}

        {/* <TouchableOpacity
          className='bg-green-700 py-3 px-6 mt-5 rounded-lg items-center justify-center'
          onPress={() => alert('Tombok Custom ditekan!')}
        >
          <Text className='text-white text-base font-bold'>Button</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}
