import React, {useState} from 'react';
import axios from 'axios'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'

const CreateUser = (props) => {


    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChangeText = (name, value) => {
        setInput({ ...input, [name]: value})
    }

    const newUser = async () => {
    
        try {
            await axios.post('http://127.0.0.1:5000/users', {
                username: input.username,
                email: input.email,
                password: input.password
            })

            props.navigation.navigate("UserList")
        } catch (err) {
            console.log(err)
        }      
    }
 
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Username" 
                    onChangeText={(e) => handleChangeText('username', e)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Email"
                    onChangeText={(e) => handleChangeText('email', e)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Password"
                    onChangeText={(e) => handleChangeText('password', e)}
                />
            </View>
            <View>
                <Button 
                    title="Save User"
                    onPress={newUser}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 35,
    },

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})


export default CreateUser