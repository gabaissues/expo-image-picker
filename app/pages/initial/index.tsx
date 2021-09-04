import React from 'react'

import styles from './styles'
import { Image, Text, TouchableOpacity, View } from "react-native";

import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'

export default function ScreenInitial({ navigation }: { navigation: any }) {

    const [image, setImage] = React.useState('')

    const onButtonPress = async(): Promise<void> => {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if(status !== "granted") {
            alert('Desculpe, nos precisamos do acesso a camera para escolher um avatar.')
        } else {

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                base64: true,
                quality: 1
            })
                
            if(result.cancelled) return;

            axios.post('http://192.168.1.12:3333/upload/avatar', {
                user: 'gbxxy',
                file: result.base64
            }).then((res) => {

                alert('Imagem enviada com sucesso.')

            }).catch(err => {

                console.log(err)

            })

        }

    }

    return(
        <View style={styles.container}>
            
            <View style={styles.avatar}>
                <Image style={styles.img} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'}} />
            </View>
            
            <TouchableOpacity onPress={() => onButtonPress()}>
                <Text>Clique em mim</Text>
            </TouchableOpacity>

            
        </View>
    )
}