import { View,Text } from "react-native";
import { styles } from "../../uiapps/styles";

const ListEmployeesComponent = (props) => {
    if(props.data === undefined || props.data.length === 0) {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>No Data</Text>
         </View>   
        );
    }
    return (
         <View style={styles.container}>
            <Text style={styles.text}>List of Employees</Text>
            {
                 <Text style={styles.textItem}>
                    {
                        JSON.stringify(props.data)
                    }
                 </Text>
            }
         </View>   

    );
};

export default ListEmployeesComponent;