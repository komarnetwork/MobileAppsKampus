import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';

type DataType = { title: string; body: string };

export default function DataFetcher() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((r) => {
        if (!r.ok) throw new Error(`ERROR HTTP ${r.status}: ${r.statusText}`);
        return r.json();
      })
      .then(setData)
      .catch((err) => {
        setError(err.message); // Simpan error ke state
        Alert.alert('Error', err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator className='flex-1' size='large' color='#0000ff' />;
  if (error) return <Text className='flex-1 text-center text-red-600 p-5'>{error}</Text>;
  if (!data) return <Text className='flex-1 text-center'>Tidak ada data</Text>;

  return (
    <View className='flex-1 items-center justify-center p-5'>
      <Text className='text-2xl font-bold text-center mb-3'>{data.title}</Text>
      <Text className='text-lg text-center'>{data.body}</Text>
    </View>
  );
}
