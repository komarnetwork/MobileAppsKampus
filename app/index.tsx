import { useState } from 'react';
import { Text, Image, TextInput, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [message, setMessage] = useState('');

  const hitungLuas = () => {
    const alasNum = parseFloat(alas);
    const tinggiNum = parseFloat(tinggi);

    if (isNaN(alasNum) || isNaN(tinggiNum) || alasNum <= 0 || tinggiNum <= 0) {
      setMessage('Masukkan angka yang valid untuk alas dan tinggi');
      return;
    }

    const hasil = (alasNum * tinggiNum) / 2;
    setMessage(`Hasilnya adalah: ${hasil} satuan luas`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 items-center justify-center px-4'>
        <Text className='text-3xl font-bold text-center underline text-blue-500 p-5'>
          Tugas 3 - Hitung Luas Segitiga
        </Text>

        <Image
          className='w-20 h-20'
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <Text className='text-center text-2xl mt-5'>
          Halo, selamat datang di aplikasi React Native menggunakan Expo!
        </Text>

        <TextInput
          className='border border-blue-600 rounded-lg my-2 w-full ios:h-12 px-5 android:border-[1.5px] placeholder:text-gray-500'
          placeholder='Masukkan Alas'
          placeholderTextColor='#6B7280'
          value={alas}
          onChangeText={setAlas}
          keyboardType='numeric'
          underlineColorAndroid='transparent'
        />
        <TextInput
          className='border border-blue-600 rounded-lg my-2 w-full ios:h-12 px-5 android:border-[1.5px] placeholder:text-gray-500'
          placeholder='Masukkan Tinggi'
          placeholderTextColor='#6B7280'
          value={tinggi}
          onChangeText={setTinggi}
          keyboardType='numeric'
          underlineColorAndroid='transparent'
        />

        <Pressable
          className='bg-blue-500 rounded-xl py-3 px-10 mt-4'
          onPress={hitungLuas}
        >
          <Text className='text-white text-center font-bold'>
            Tampilkan Hasil
          </Text>
        </Pressable>

        {message ? (
          <Text
            className={`font-bold text-2xl mt-5 ${message.includes('valid') ? 'text-red-600' : 'text-green-600'} shadow-none elevation-none`}
          >
            {message}
          </Text>
        ) : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
