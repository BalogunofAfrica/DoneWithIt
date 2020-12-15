import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize: 18,
        fontFamily: Platform.OS==='android'? 'Robto': 'Avenir'
    }  
})

export default styles;