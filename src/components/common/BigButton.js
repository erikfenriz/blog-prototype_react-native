import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BigButton = ({onPress, children}) => {
    const {container, buttonStyle, textStyle} = styles;

    return (
        <View style={container}>
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPress}>
                <Text style={textStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    buttonStyle: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#d4155b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#f5a8f0',
        display: 'flex',
        alignSelf: 'center'
    }
};

export default BigButton;