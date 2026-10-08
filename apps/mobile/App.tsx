import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const products = [
  { name: 'Business supplies', fit: '92%', type: 'B2B' },
  { name: 'Smart home essentials', fit: '88%', type: 'B2C' },
  { name: 'Office tech', fit: '95%', type: 'B2B' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.eyebrow}>Buyer Match</Text>
        <Text style={styles.title}>Find products for the right buyers</Text>
        <Text style={styles.subtitle}>
          Spotlight buyer intent and product fit across business and consumer segments.
        </Text>

        {products.map((product) => (
          <View key={product.name} style={styles.card}>
            <Text style={styles.cardType}>{product.type}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.fit}>Buyer fit: {product.fit}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  scrollContent: {
    padding: 24,
  },
  eyebrow: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardType: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 6,
  },
  fit: {
    color: '#475569',
    fontSize: 14,
  },
});
