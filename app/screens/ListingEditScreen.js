import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
});

const categories = [
    {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps'},
    {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email'},
    {label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'music'},
    {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'shopping'},
    {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'cloud'},
    {label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'pause'},
    {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'play'},
    {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'letter'},
    {label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'camera '},
];

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{
                    title: '', 
                    price: '',
                    description: '',
                    category: null}}
                onSubmit={(values)=> console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                   maxLength={255}
                   name='title'
                   placeholder='Title' 
                />
                <AppFormField 
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width = {120}
                />
                <AppFormPicker 
                    items={categories}
                    // PickerItemComponent={CategoryPickerItem}
                    name='category'
                    // numberOfColumns={3}
                    placeholder='Category'
                    width='50%'
                />
                <AppFormField 
                    maxLength={255}
                    multiline
                    name='description'
                    numberOflines={3}
                    placeholder= 'Description'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default ListingEditScreen;