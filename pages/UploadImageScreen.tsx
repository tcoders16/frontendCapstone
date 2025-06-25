import { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AppleButton, CancelButton} from 'components/Buttons';
import PoppinsText from 'components/PoppinsText';

const UploadImageScreen = () => {
  const [imageFile, setImageFile] = useState<string | null>(null);




  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'], // Optional: change to MediaTypeOptions.Images
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageFile(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      
      {/* 🍎 Header pinned at top like Apple */}
      <View style={styles.header}>
          <PoppinsText style={{ fontSize: 28, fontWeight: 'bold' }}>
            Upload Image
          </PoppinsText>
      </View>

      {/*  Centered Image Content */}
        <View style={styles.contentWrapper}>
          {/* Make this relative to allow absolute children inside */}
          <View style={[styles.imageContainer, { position: 'relative' }]}>
            {imageFile ? (
              <>
                {/* Display the uploaded image */}
                <Image source={{ uri: imageFile }} style={styles.image} />

                {/* Floating  button at top-right */}
                <View style={styles.removeButtonWrapper}>
                  <CancelButton
                    onPress={() => setImageFile(null)}
                  />
                </View>
              </>
            ) : (
              <Text style={styles.placeholder}>No Image Selected</Text>
            )}
          </View>
        </View>


      
      
      {/* 📤 Button at the bottom */}
      <View >
        <AppleButton title="Upload" onPress={pickImage} />
      </View>


    </SafeAreaView>
  );
};


export default UploadImageScreen;
const styles = StyleSheet.create({
  // Outer screen container
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  // Apple-style heading at top
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

  // Content wrapper centers image vertically
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Dashed image container
  imageContainer: {
    width: 320,
    height: 320,
    backgroundColor: '#f8f8f8',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#555',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },

  // Actual image
  image: {
    width: '110%',
    height: '110%',
    resizeMode: 'cover',
  },

  // Placeholder text
  placeholder: {
    color: '#999',
    fontSize: 16,
    fontStyle: 'italic',
  },

  // Remove image button 
  removeButtonWrapper: {
    position: 'absolute',
    bottom: 280,       // brings it into the container
    left: 280,     // aligns it to top-right
    zIndex: 99,
  },
  // Button wrapper pinned to bottom
  buttonWrapper: {
    padding: 20,
    alignItems: 'center',
  },
});