import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import {ActionCircle, DismissKeyboard} from "../components/common";

const NewItem = ({navigation}) => {
    const [title, setTitle] = useState('');
    const addPost = navigation.getParam('addPost');
    const posts = navigation.getParam('posts');

    const {barStyle, inputStyle} = styles;

    const inputErrorHandler = () => {
        Alert.alert(
            'Title must be unique',
            'Please add title',
            [
                {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('Main'),
                    style: 'cancel',
                },
                {text: 'OK'},
            ],
            {cancelable: false},
        );
    };

    const isTitleUnique = (input, posts) => {
        return (posts &&
            (!posts.find(item => {
                return item.title === input;
            })));
    };

    return (
        <>
            <View style={barStyle}>
                <TextInput
                    placeholder={'New item title..'}
                    style={inputStyle}
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
                <ActionCircle specificStyles={{fontSize: 30, paddingLeft: 5}}
                              onPress={() => {
                                  (isTitleUnique(title, posts)) &&
                                  title && title.replace(/\s/g, '').length ?
                                      addPost(title) || navigation.navigate('Main') :
                                      inputErrorHandler()
                              }}>
                    &gt;
                </ActionCircle>
            </View>
            <DismissKeyboard>
                <View style={{flex: 1}}/>
            </DismissKeyboard>
        </>
    )
};

NewItem.navigationOptions = ({navigation}) => ({
    header: (
        <View style={styles.containerNavStyle}>
            <ActionCircle specificStyles={{fontFamily: 'Arial', fontSize: 23}} onPress={() => {
                navigation.navigate('Main');
            }}>
                ←
            </ActionCircle>
            <Text style={styles.headerNavStyle}>
                Create new item
            </Text>
        </View>
    )
});

const styles = StyleSheet.create({
    containerNavStyle: {
        height: 150,
        backgroundColor: '#0e1d3c',
        alignItems: 'flex-end',
        paddingLeft: 30,
        flexDirection: 'row',
        paddingBottom: 40,
    },
    headerNavStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 26,
        paddingLeft: 15,
        paddingBottom: 7
    },
    barStyle: {
        justifyContent: 'space-around',
        paddingTop: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    inputStyle: {
        fontSize: 23,
        paddingLeft: 5,
        flex: 0.9,
        borderBottomColor: '#333333',
        borderBottomWidth: 0.3,
        paddingBottom: 7,
    }
});

export default NewItem;