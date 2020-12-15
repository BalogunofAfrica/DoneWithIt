import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors'
import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
            <ListItem 
                image= {require('../assets/mosh.jpg')}
                title='Abdulmumin Usman'
                subTitle='3 listings'
            />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 24,
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;