import React, {useEffect, useState } from 'react';
import {ScrollView, Button} from 'react-native'
import { ListItem } from 'react-native-elements'
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios'

const UserList = (props) => {

    const [users, setUsers] = useState([])

    const isFocused = useIsFocused();

    const getUsers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/users')
            setUsers(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [isFocused])


    return (
        <ScrollView>
            <Button 
                title="Create User" 
                onPress={() => props.navigation.navigate("CreateUser")}
            />

            {
                users.map(user => {
                    return (
                        <ListItem
                            key={user._id.$oid}    
                            bottomDivider
                            onPress={() => props.navigation.navigate('UserDetail', {
                                userId: user._id.$oid
                            })}               
                        >
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{user.username}</ListItem.Title>
                            </ListItem.Content>

                        </ListItem>
                    )
                })
            }
          
        </ScrollView>
    )
}

export default UserList