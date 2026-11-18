import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useSaved } from '../../context/SavedContext';

export default function SavedScreen() {
  const { savedResources, toggleSaved } = useSaved();

  const renderSavedResource = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.category}>
        {item.category}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <Pressable
        style={styles.removeButton}
        onPress={() => toggleSaved(item)}
      >
        <Text style={styles.removeButtonText}>
          Remove from Saved
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Saved Concepts
      </Text>

      <Text style={styles.subtitle}>
        Concepts you saved for later learning
      </Text>

      {savedResources.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No saved concepts yet.
          </Text>

          <Text style={styles.emptySubtext}>
            Go to Resources and save a concept.
          </Text>
        </View>
      ) : (
        <FlatList
          data={savedResources}
          keyExtractor={(item) => item.id}
          renderItem={renderSavedResource}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#6B7280',
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

  title: {
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

  removeButton: {
    marginTop: 14,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
  },

  removeButtonText: {
    fontWeight: 'bold',
    color: '#B91C1C',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  emptySubtext: {
    marginTop: 8,
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
  },
});