import { View } from "react-native";

import AddCategoryComponent from "./addcategory";
import ListCategoryComponent from "./listcategopries";

import { useSelector } from "react-redux";
import { styles } from "../../uiapps/styles";

const MainSgaComponent =()=>{
    /* Subscribe to the store to get categories from it  */
    // const data = useSelector(state=>state.categories);

     return (
     <View style={styles.container}>
         <AddCategoryComponent />
         <ListCategoryComponent/>
     </View>);
};

export default MainSgaComponent;