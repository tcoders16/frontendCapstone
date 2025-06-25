// SpecificationCard.tsx
import PoppinsText from 'components/PoppinsText';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';

type SpecificationProps = {
  title: string;
  description: string;
  type: string;
  specification: string;
  textColor?: string;
  imageUri?: string; // optional image
};

const SpecificationCard: React.FC<SpecificationProps> = ({
  title,
  description,
  type,
  specification,
  textColor = '#fff',
  imageUri,
}) => {
  return (

    <SafeAreaView>
        <View style={styles.header}>
          <PoppinsText style={{ fontSize: 28, fontWeight: 'bold' }}>
            Upload Image
          </PoppinsText>
        </View>
      <View style={styles.container} >
        <View style={styles.card}>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
          )}
          {!imageUri && (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>No Image</Text>
            </View>
          )}
          <Text style={[styles.title, { color: textColor }]}>{title || 'Untitled'}</Text>
          <Text style={styles.description}>{description || 'No description available.'}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{type || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Specification:</Text>
            <Text style={styles.value}>{specification || 'N/A'}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagePlaceholder: {
    width: 320,
    height: 320,
    borderRadius: 12,
    backgroundColor: '#222',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#888',
    fontSize: 14,
    fontStyle: 'italic',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontWeight: '600',
    color: '#aaa',
  },
  value: {
    color: '#eee',
  },


  //Page Heading
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: '#111',
  },




  //Main CardContainer 
  container: {
    paddingTop: 100,
 
    justifyContent: 'center',
    alignItems: 'center'
 
},
});

export default SpecificationCard;