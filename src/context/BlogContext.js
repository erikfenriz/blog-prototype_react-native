import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const postsString = await AsyncStorage.getItem('posts');
            if(postsString){
                const posts = JSON.parse(postsString);
                setPosts(posts);
            }
        })();
    }, []);

    const setPostStorage = async (postTitle) => {
        try {
            await AsyncStorage.setItem('posts', JSON.stringify([...posts, {
                title: postTitle,
                comments: []
            }]));
        } catch (error) {
            console.log(error)
        }
    };

    const deletePostStorage = async (index) => {
        try {
            const postsString = await AsyncStorage.getItem('posts');
            const posts = JSON.parse(postsString);
            posts.splice(index, 1);
            await AsyncStorage.setItem('posts', JSON.stringify([...posts]));
        } catch (error) {
            console.log(error)
        }
    };

    const addCommentStorage = async (index, value) => {
        try {
            const postsString = await AsyncStorage.getItem('posts');
            const posts = JSON.parse(postsString);
            posts[index].comments.push(value);
            await AsyncStorage.setItem('posts', JSON.stringify([...posts]));
        } catch (error) {
            console.log(error)
        }
    };

    const addPost = (postTitle) => {
        postTitle &&
        setPosts([...posts, {
            title: postTitle,
            comments: []
        }]);
        setPostStorage(postTitle);
    };

    const deletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts([...updatedPosts]);
        deletePostStorage(index);
    };

    const addComment = (index, value) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(value);
        setPosts([...updatedPosts]);
        addCommentStorage(index, value);
    };

    return <BlogContext.Provider value={{posts, addPost, deletePost, addComment}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;