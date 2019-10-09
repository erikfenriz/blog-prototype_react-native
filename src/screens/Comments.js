import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import CommentsPosts from '../components/CommentPosts';
import {ActionCircle, DismissKeyboard, Separator} from "../components/common";

const Comments = ({navigation}) => {
    const [comment, setComment] = useState('');
    const addComment = navigation.getParam('addComment');
    const index = navigation.getParam('index');
    const posts = navigation.getParam('posts');
    const {inputContainerStyle, inputStyle} = styles;
    return (
        <>
            <DismissKeyboard>
                <FlatList
                    style={{flex: 1, flexDirection: 'column'}}
                    data={posts[index].comments}
                    keyExtractor={(comment) => comment + Math.random()}
                    ItemSeparatorComponent={() => <Separator/>}
                    renderItem={({item, index}) => {
                        return (
                            <CommentsPosts index={index} comment={item}/>
                        )
                    }}
                />
            </DismissKeyboard>
            <KeyboardAvoidingView
                keyboardVerticalOffset={150}
                behavior="padding">
                <View style={inputContainerStyle}>
                    <TextInput style={inputStyle}
                               multiline={true}
                               placeholder={'New comment goes here..'}
                               value={comment}
                               onChangeText={comment => setComment(comment)}
                    />
                    <ActionCircle specificStyles={{fontSize: 30, paddingLeft: 5}}
                                  onPress={() => {
                                      (comment && comment.replace(/\s/g, '').length)
                                      && addComment(index, comment);
                                      setComment('');
                                  }}>
                        &gt;
                    </ActionCircle>
                </View>
            </KeyboardAvoidingView>
        </>
    )
};

const displayTitle = (navigation) => {
    const item = navigation.getParam('item') || '';
    return (item.title);
};

Comments.navigationOptions = ({navigation}) => ({
    header: (
        <View style={styles.containerNavStyle}>
            <ActionCircle specificStyles={{fontFamily: 'Arial', fontSize: 23}} onPress={() => {
                navigation.navigate('Main');
            }}>
                ←
            </ActionCircle>
            <Text style={styles.headerNavStyle}>
                {displayTitle(navigation)}
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
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        paddingBottom: 7,
        paddingTop: 50,
        marginHorizontal: 40,
        flexDirection: 'row'
    },
    inputContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e6e6e6',
        paddingBottom: 20,
        paddingTop: 7,
        paddingRight: 10,
    },
    inputStyle: {
        backgroundColor: '#ffffff',
        padding: 20,
        paddingRight: 50,
        marginHorizontal: 10,
        borderRadius: 3,
        borderColor: '#d9d9d9',
        borderWidth: 1,
        color: 'black',
        flex: 0.9,
        fontSize: 17,
        height: 65,
        paddingTop: 20,
        textAlignVertical: 'top',
    }
});

export default Comments;