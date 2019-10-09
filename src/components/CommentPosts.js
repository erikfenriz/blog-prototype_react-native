import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colorArray} from "../helpers/randomColorsArray";


const CommentPosts = ({comment, index}) => {
    const {containerStyle, iconStyle, textStyles} = styles;

    return (
        <View style={containerStyle}>
            <View style={Object.assign({}, iconStyle, {backgroundColor: colorArray[index]})}>
            </View>
            <Text style={textStyles}>
                {comment}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 10
    },
    iconStyle: {
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyles: {
        marginHorizontal: 20,
        flex: 1,
        flexWrap: 'wrap',
        lineHeight: 23,
        color: '#666666',
        fontSize: 17,
        paddingBottom: 30,
        fontWeight: '400'
    }
});

export default CommentPosts;