import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ActionCircle = ({specificStyles, onPress, children}) => {
    const {buttonStyle} = styles;

    const textStyle = function (specificStyles) {
        return {
            ...specificStyles,
            color: '#ffffff',
            justifyContent: 'center',
            alignSelf: 'center'
        }
    };

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>
            <Text style={textStyle(specificStyles)}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        width: 48,
        height: 48,
        borderRadius: 50,
        backgroundColor: '#313464',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default ActionCircle;