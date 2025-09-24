import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const PhotoProfile = require('../../../assets/images/avatarKecil.png');

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 items-center justify-center px-4'>
        <View className='bg-slate-200 shadow shadow-slate-400 border border-slate-300 rounded-2xl p-5 items-center justify-center'>
          <Image source={PhotoProfile} className='w-44 h-44 rounded-full border border-slate-500' />

          <Text className='text-2xl font-semibold text-blue-500 mt-3'>Komarudin</Text>
          <Text className='text-xl font-semibold text-green-500 mb-5'>Prodi: Sistem Informasi</Text>
          <Text className='text-1xl font-semibold text-center text-slate-800 mt-3'>
            Front-End Developer with over 2 years of experience in designing and maintaining responsive web applications
            using Laravel, React.js, Bootstrap, TailwindCSS, and MySQL. Experienced in HTML5, CSS3, JavaScript, PHP,
            Node.js, Express, and Figma for UI/UX design. Skilled in collaborating with cross-functional teams to
            deliver high-quality, user-focused solutions. Experienced in API integration, version control (Git), and
            agile development methodologies.
          </Text>

          <Pressable className='bg-blue-500 shadow shadow-slate-400 rounded-xl py-3 px-10 mt-4'>
            <Text className='text-white text-center font-bold'>Contact Me</Text>
          </Pressable>

          {/* <Text className='text-xl font-semibold text-green-500 mt-5'>Modul 3</Text> */}
          {/* <Pressable
            onPress={() => router.push('/modul3/daftarBuah')}
            className='bg-blue-500 shadow shadow-slate-400 rounded-xl p-3 w-50 mt-4'
          >
            <Text className='text-white text-center'>Daftar Buah</Text>
          </Pressable> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
