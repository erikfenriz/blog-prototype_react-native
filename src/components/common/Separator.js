import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => {
    return <View style={styles.separatorStyle}/>
};

const styles = StyleSheet.create({
    separatorStyle: {
        flex: 1,
        height: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
    }
});


export default Separator
