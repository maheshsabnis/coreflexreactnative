import { Text, View } from "react-native";
import { styles } from "../uiapps/styles";
import AddEmpComponent from "./views/addempcomponent";
import ListEmployeesComponent from "./views/listemployeescompoent";
/* import useSelector to subscribe to store */

import { useSelector } from "react-redux";

const MainReduxComponent = () => {
    /* Subscribe to the store */
    /* Query to store to get the data from store */
    const storeData = useSelector(state=>state.emps);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Redux App</Text>
             <View style={{flex:2}}>
                <AddEmpComponent/>
             </View>
            
             <View style={{flex:3}}>
                <ListEmployeesComponent data={storeData}/>
             </View>
        </View>
    );
};

export default MainReduxComponent;