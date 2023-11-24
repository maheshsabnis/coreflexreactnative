/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { Blogger } from '../models/logic'; 
import { styles } from './styles';

/* A UI Component for the RenderItem */
const ListItemRecord =({item}) => (
    <View style={{backgroundColor: 'lightblue'}}>
        <Text style={styles.textItem}>{item.id}</Text>
        <Text style={styles.textItem}>{item.title}</Text>
        <Text style={styles.textItem}>{item.details}</Text>
    </View>
);

const ItemSeperatorComponent=()=>(
    <View style={styles.seperator}>
        {/* <Text></Text> */}
    </View>
);


const BlogsComponent = () => {
  const logic = new Blogger(); 
  /* Complex State Object */
  const [blog, setBlogInfo] = useState({
    id:0, title: '', details: ''
  });  
  const [blogs, setBlogs] = useState(logic.getPosts());
  const [filterText, setFilterText] = useState('');
  const [posts, setPosts] = useState(logic.getPosts());
  const save = () => {
      let blg = logic.createNewPost(blog);
      // modify an existing arary by adding new
      // blog post in it 
      setBlogs(blg);
      setBlogInfo({
        id:0, title: '', details: ''
      });
  };

  /* Method to Filter data */
  const filterBlogs = (title) => {
     let filteredPosts = blogs.filter(p => {
        return p.title === title;
     });
     setPosts(filteredPosts);
  }; 
  return (
     <View style={styles.container}>
        <Text style={styles.text}>BLOGS UI</Text>
        <Text style={styles.text}>Id</Text>
        <TextInput style={styles.textInput}
          value={blog.id}
          onChangeText={text => setBlogInfo({...blog, id: text})}
        /> 
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.textInput}
         value={blog.title}
         onChangeText={text => setBlogInfo({...blog, title: text})}
        /> 
        <Text style={styles.text}>Details</Text>
        <TextInput style={styles.textInput}
         multiline={true}
         value={blog.details}
         onChangeText={text => setBlogInfo({...blog, details: text})}
         /> 
        <Button title='Save Blog Info'
         onPress={save}
        ></Button> 
        {/* <Text>
        {
            JSON.stringify(blogs)
        }
        </Text> */}
        {/* 
            data: the Collection
            keyExtractor: unique Key for Each Item
            renderItem: a child UI to show data
        */}
        <Text style={styles.text}>Enter Filter Condition</Text>
        <TextInput style={styles.textInput}
        value={filterText}
        onChangeText={text => setFilterText(text)}
        onBlur={()=>filterBlogs(filterText)}
        />

        {/* <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.textItem}>
                {item.id} {item.title} {item.details}
            </Text>
          )}  
        /> */}
        <FlatList
          data={blogs}
          keyExtractor={item =>item.id} 
          renderItem={({item}) => <ListItemRecord item={item}/>
          }  
          ItemSeparatorComponent={ItemSeperatorComponent}
        />
     </View>
  );
};


export default BlogsComponent;
