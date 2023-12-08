import { View,Text } from "react-native";
import { styles } from "../../uiapps/styles";

const ListCategoryComponent =(props)=>{
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List of Categories</Text>
            <Text style={styles.textItem}>
                {
                    JSON.stringify(props.categories)
                }
            </Text>
        </View>
    );
};

export default ListCategoryComponent;