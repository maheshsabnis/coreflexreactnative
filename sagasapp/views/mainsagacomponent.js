import { Button, View } from "react-native";

import AddCategoryComponent from "./addcategory";
import ListCategoryComponent from "./listcategopries";

import { useSelector, useDispatch } from "react-redux";
import { styles } from "../../uiapps/styles";
import { useEffect } from "react";
import { listCategory } from "../actions";

const MainSgaComponent =()=>{
    /* Subscribe to the store to get categories from it  */
      const data = useSelector(state=>state.categories);

     const dispatch = useDispatch();

     const getCategoriesData =() =>{
        dispatch(listCategory());
     };

         
    return (
     <View style={styles.container}>
         <AddCategoryComponent />
         <Button title="Get Categories" onPress={getCategoriesData}></Button>
         <ListCategoryComponent categories={data}/>
     </View>);
};

export default MainSgaComponent;