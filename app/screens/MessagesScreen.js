import React, { useState } from 'react';
import { FlatList, Platform, StyleSheet, StatusBar, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Mosh Hamedani',
        description: 'iPhone 11 pro max mint condition for sale at affordable price.\n Contact on my signature', 
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Usman Abdulmumin',
        description: 'Looking for pixel 4a 5g. Anyone?', 
        image: require('../assets/mosh.jpg')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter( (m) => m.id !== message.id ))
    }
    return (
        <Screen>
            <FlatList
             data={messages}
             keyExtractor={messages => messages.id.toString()}
             renderItem={({item}) => (
                 <ListItem 
                     title={item.title}
                     subTitle={item.description}
                     image={item.image}
                     onPress={()=> console.log('message selected:', item )}
                     renderRightActions={()=> <ListItemDeleteAction press={()=> handleDelete(item)}/>} 
                    /> 
                )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={()=> 
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2', 
                        image: require('../assets/mosh.jpg')
                    }
                ])
            }
         />
        </Screen>
    );
}


export default MessagesScreen;