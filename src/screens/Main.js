import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import BlogContext from "../context/BlogContext";
import {BigButton, Separator} from '../components/common';
import Titles from '../components/Titles';

const Main = ({navigation}) => {
    const {posts, addPost, deletePost, addComment} = useContext(BlogContext);
    const {navigate} = navigation;

    return (
        <>
            <FlatList
                style={{flex: 1}}
                data={posts}
                keyExtractor={(posts) => posts.title}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => navigate('Comments', {posts, item, index, addComment})}>
                        <Titles index={index}
                                countComments={item.comments.length}
                                onRightPress={(index) => deletePost(index)}
                        >{item.title}</Titles>
                        <Separator/>
                    </TouchableOpacity>
                )}
            />
            <View style={{marginBottom: 70, marginTop: 70}}>
                <BigButton onPress={() => {
                    navigate('NewItem', {posts, addPost});
                }}
                >+</BigButton>
            </View>
        </>
    )
};

Main.navigationOptions = () => ({
    header: (
        <View
            style={styles.containerNavStyles}>
            <Text
                style={styles.headerNavStyles}>
                Sayer
            </Text>
            <Text
                style={styles.subHeaderNavStyles}>
                World's most used time waster
            </Text>
        </View>
    )
});


const styles = StyleSheet.create({
    containerNavStyles: {
        height: 150,
        backgroundColor: '#0e1d3c',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 30
    },
    headerNavStyles: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    subHeaderNavStyles: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 16,
    }
});


export default Main;