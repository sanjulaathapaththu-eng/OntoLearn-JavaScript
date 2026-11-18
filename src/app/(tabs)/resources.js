import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';
import { useSaved } from '../../context/SavedContext';

const resources = [
  {
    id: '1',
    title: 'Data Representation',
    category: 'ICT Concepts',
    description:
      'Learn how computers represent data using binary, hexadecimal, ASCII, and Unicode.',
  },
  {
    id: '2',
    title: 'Computer Networks',
    category: 'Networking',
    description:
      'Study network types, network devices, communication methods, and protocols.',
  },
  {
    id: '3',
    title: 'Database Management',
    category: 'Database',
    description:
      'Understand databases, tables, records, primary keys, foreign keys, and relationships.',
  },
  {
    id: '4',
    title: 'Internet and Web',
    category: 'Web Technology',
    description:
      'Explore the Internet, websites, web technologies, URLs, browsers, and web services.',
  },
  {
    id: '5',
    title: 'Programming',
    category: 'Programming',
    description:
      'Study algorithms, programming concepts, control structures, functions, and problem solving.',
  },
];

export default function ResourcesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { toggleSaved, isSaved } = useSaved();

  const filteredResources =
    selectedCategory === 'All'
      ? resources
      : resources.filter(
          (item) => item.category === selectedCategory
        );

  const categories = [
    'All',
    'ICT Concepts',
    'Networking',
    'Database',
    'Web Technology',
    'Programming',
  ];

  const renderResource = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {item.title}
      </Text>

      <Text style={styles.category}>
        {item.category}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <Pressable
        style={styles.saveButton}
        onPress={() => toggleSaved(item)}
      >
        <Text style={styles.saveButtonText}>
          {isSaved(item.id)
            ? '★ Saved'
            : '☆ Save Concept'}
        </Text>
      </Pressable>

    <Pressable
        style={styles.detailsButton}
        onPress={() => router.push('/resource/details')}
        >
        <Text style={styles.detailsButtonText}>
        View Details
        </Text>
    </Pressable>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ICT Resources
      </Text>

      <Text style={styles.subtitle}>
        Explore A/L ICT concepts
      </Text>

      <Pressable
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.filterButtonText}>
          Filter Resources
        </Text>
      </Pressable>

      <FlatList
        data={filteredResources}
        keyExtractor={(item) => item.id}
        renderItem={renderResource}
        contentContainerStyle={styles.list}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              Filter Resources
            </Text>

            {categories.map((category) => (
              <Pressable
                key={category}
                style={styles.option}
                onPress={() => {
                  setSelectedCategory(category);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.optionText}>
                  {category}
                </Text>
              </Pressable>
            ))}

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#6B7280',
  },

  filterButton: {
    marginTop: 15,
    backgroundColor: '#4F46E5',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  list: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  category: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },

  saveButton: {
    marginTop: 14,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
  },

  saveButtonText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 25,
  },

  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  option: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  optionText: {
    fontSize: 16,
  },

  closeButton: {
    marginTop: 18,
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  closeButtonText: {
    fontWeight: 'bold',
  },

detailsButton: {
  marginTop: 10,
  padding: 10,
  borderRadius: 8,
  backgroundColor: '#E5E7EB',
  alignItems: 'center',
},

detailsButtonText: {
  color: '#374151',
  fontWeight: 'bold',
},

});