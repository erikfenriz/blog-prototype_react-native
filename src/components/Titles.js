import React from 'react';
import {Text, View, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {ActionCircle} from "./common";

const Titles = ({children, index, onRightPress, countComments}) => {
    const {containerStyle, textStyle, rightActionStyle, actionTextStyle} = styles;

    const RightActions = ({dragX, onPress}) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={rightActionStyle}>
                    <Animated.Text style={[actionTextStyle, {transform: [{scale}]}]}>
                        Delete
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} onPress={() => {
                    styles.rightActionStyle.display ='none';
                    onRightPress(index);
                    styles.rightActionStyle.display ='flex';
                }}/>
            )}
        >
            <View>
                <View style={containerStyle}>
                    <Text style={textStyle}>{children}</Text>
                    <ActionCircle specificStyles={{fontSize: 24, fontWeight: '500', justifyContent: 'center'}}>
                        {countComments}
                    </ActionCircle>
                </View>
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 18,
        paddingRight: 10,
        paddingTop: 23,

    },
    textStyle: {
        fontSize: 26,
        flex: 1,
        paddingLeft: 30
    },
    rightActionStyle: {
        backgroundColor: '#d41359',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'flex-end',
    },
    actionTextStyle: {
        color: '#fff',
        fontWeight: '400',
        padding: 30,
        fontSize: 25
    }
});

export default Titles;