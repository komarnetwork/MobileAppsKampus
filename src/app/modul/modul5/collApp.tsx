import { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const PhotoProfile = require('../../../../assets/images/avatarKecil.png');

export default function CollApp() {
  const [activeTab, setActiveTab] = useState('Home');
  const data = [
    { id: '1', title: 'Item 1', image: 'https://picsum.photos/150' },
    { id: '2', title: 'Item 2', image: 'https://picsum.photos/150' },
    { id: '3', title: 'Item 3', image: 'https://picsum.photos/150' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🚀 My Cool App</Text>
      </View>
      {/* Content */}
      <View style={styles.content}>
        {activeTab === 'Home' && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />

                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            )}
          />
        )}
        {activeTab === 'Profile' && (
          <View style={styles.centerContent}>
            <Image source={PhotoProfile} style={styles.profileImage} />
            <Text style={styles.profileName}>Komarudin</Text>
            <Text style={styles.profileBio}>📚 Mahasiswa Sistem Informasi | Suka Coding & Design</Text>
            <Text style={styles.profileBio}>
              Front-End Developer with over 2 years of experience in designing and maintaining responsive web
              applications using Laravel, React.js, Bootstrap, TailwindCSS, and MySQL. Experienced in HTML5, CSS3,
              JavaScript, PHP, Node.js, Express, and Figma for UI/UX design. Skilled in collaborating with
              cross-functional teams to deliver high-quality, user-focused solutions. Experienced in API integration,
              version control (Git), and agile development methodologies.
            </Text>
          </View>
        )}
        {activeTab === 'Settings' && (
          <View style={styles.centerContent}>
            <Text style={styles.settingsTitle}>⚙ Pengaturan</Text>
            <Text style={styles.settingsText}>🔔 Notifikasi</Text>
            <Text style={styles.settingsText}>🌙 Mode Gelap</Text>
            <Text style={styles.settingsText}>🔐 Keamanan</Text>
          </View>
        )}
      </View>
      {/* Floating Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => setActiveTab('Home')} style={styles.navButton}>
            <Text style={[styles.navIcon, activeTab === 'Home' && styles.activeIcon]}>🏠</Text>
            <Text style={[styles.navText, activeTab === 'Home' && styles.activeText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Profile')} style={styles.navButton}>
            <Text style={[styles.navIcon, activeTab === 'Profile' && styles.activeIcon]}>👤</Text>
            <Text style={[styles.navText, activeTab === 'Profile' && styles.activeText]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Settings')} style={styles.navButton}>
            <Text style={[styles.navIcon, activeTab === 'Settings' && styles.activeIcon]}>⚙</Text>
            <Text style={[styles.navText, activeTab === 'Settings' && styles.activeText]}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb' },
  header: {
    padding: 20,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 15 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: { width: 120, height: 120, borderRadius: 12, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  profileName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  profileBio: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 8, paddingHorizontal: 30 },
  settingsTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  settingsText: { fontSize: 16, marginVertical: 6, color: '#444' },
  // Floating Bottom Navigation
  bottomNavContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  navButton: { alignItems: 'center', marginHorizontal: 20 },
  navIcon: { fontSize: 20, color: '#888' },
  navText: { fontSize: 12, color: '#888', marginTop: 3 },
  activeIcon: { color: '#6c63ff' },
  activeText: { color: '#6c63ff', fontWeight: '600' },
});
