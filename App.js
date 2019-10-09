import React from 'react';
import {StatusBar} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from "./src/screens/Main";
import NewItem from "./src/screens/NewItem";
import Comments from "./src/screens/Comments"
import {BlogProvider} from "./src/context/BlogContext";

const navigator = createStackNavigator({
    Main,
    NewItem,
    Comments
}, {
    initialRouteName: 'Main',
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <BlogProvider>
            <App/>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#313464" translucent={true}/>
        </BlogProvider>
    )
}