import React from 'react';
import { Text, View } from 'react-native';

const CartIndex = () => {
  return (
    <View className='flex-1 items-center justify-center p-5'>
      <Text className='text-2xl font-semibold text-blue-500 m-5'>Cart</Text>
      <Text>Daftar produk di keranjang masih kosong.</Text>
    </View>
  );
};

export default CartIndex;
