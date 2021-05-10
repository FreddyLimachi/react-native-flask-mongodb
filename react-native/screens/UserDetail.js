import React, {useEffect, useState} from 'react';
import {View, TextInput, ScrollView, Button, StyleSheet} from 'react-native'
import axios from 'axios'

const UserDatail = (props) => {

    const [id] = useState(props.route.params.userId)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const getUser = async () => {

        try {
            const response = await axios.get(`http://127.0.0.1:5000/users/${id}`)
            setUserName(response.data.username)
            setEmail(response.data.email)
            setPassword(response.data.password)

        } catch (err) {
            console.log(err)
        }
        
    }

    const editUser = async () => {
    
        try {
            await axios.put(`http://127.0.0.1:5000/users/${id}`, {
                username: userName,
                email: email,
                password: password
            })

            props.navigation.navigate('UserList')
        } catch (err) {
            console.log(err)
        }      
    }

    const deleteUser = async () => {
        try {
            await axios.delete(`http://127.0.0.1:5000/users/${id}`)
            props.navigation.navigate('UserList')
        } catch (err) {
            console.log(err)
        }
    }
 

    useEffect(() => {
        getUser()
        
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Username" 
                    value={userName}
                    onChangeText={(e) => setUserName(e)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                />
            </View>
            <View>
                <Button 
                    title="Update User"
                    onPress={editUser}
                />
            </View>
            <View>
                <Button 
                    color="#E37399"
                    title="Delete User"
                    onPress={deleteUser}
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

export default UserDatail