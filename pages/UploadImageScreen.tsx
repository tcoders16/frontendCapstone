
import { useState } from 'react'
import { View, Text, SafeAreaView, Button,Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


const UploadImageScreen = () => {
  const [imageFile, setImageFile] = useState<string | null> (null);
   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageFile(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView>
      
        <View className='m-10 font-bold text-9xl'>
          <Text className='text-3xl'>Upload Image </Text>
              <Button title="Upload An Image" onPress={pickImage} />
              <View>
                {/* Button or Text */}
                {imageFile ? (
                  <Image
                    source={{ uri: imageFile }}
                    style={{ width: 200, height: 200 }}
                  />
                 ) : null} {/* Conditional Rendering  (condition)? true condition : false condition      */}
                 
              </View>
              
        </View>
      
    </SafeAreaView>
  )
}

export default UploadImageScreen;