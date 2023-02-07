
import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalItem(props){
    function deleteGoalHandler(){
        props.delete(props.id)
    }
    
    return (
        <View  style={styles.goalItem}>
                <Text style={styles.goalText}>
                {props.text}
                </Text>
            <Pressable 
                android_ripple={{color: "#dddddd"}}
                onPress={props.delete.bind(this, props.id)}
            >
                <View style={styles.del}>
                <Text style={styles.del}>Delete</Text>
                </View>
            </Pressable> 
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listGoal:{
        flex: 5,
        paddingTop: 10,
      },
      goalItem: {
        borderWidth: 1,
        borderColor: "#5E3ACC",
        borderRadius: 6,
        marginVertical: 4,
        backgroundColor: "#5E3ACC",
        flexDirection: "row"
      },
      goalText: {
        color: "#fff",
        padding: 8,
        width: "85%"
      },
      del: {
        flex: 1,
        color: "#120438",
        padding: 3
      }
})