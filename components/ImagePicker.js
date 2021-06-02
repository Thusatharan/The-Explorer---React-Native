import React, {useState} from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constans/Colors';
import * as ImagePicker from 'expo-image-picker';



const ImageSelect = props => {
    const [showImage, setShowImage] = useState();

    const takeImage = async () => {
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
    
       setShowImage(image.uri);
    };
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imagePreview}>
                {!showImage ? <Text>No Image Selected</Text>
                 :  <Image style={styles.imagePreview} source={{ uri: showImage }} />
                }
            </View>
            <Button color={Colors.primary} title={!showImage? "Take Image" : "Take another Image"} onPress={takeImage} />
        </View>
    );

};

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 20,
    },

    imagePreview: {
        width: '100%',
        height: 200,
        borderColor: Colors.primary,
        borderWidth: 1,
        marginBottom: 10,
    }
});


export default ImageSelect;