import { useState } from "react";
import {StyleSheet,View, Button, TextInput , Modal, Image} from "react-native";

function GoalInput(props){

    const [enteredText, setEnteredText] = useState('');

    function inputTextHandeler(Text){
        setEnteredText(() => Text);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredText);
        setEnteredText('');
    }



    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/image/goal.png")}/>
                <TextInput 
                    placeholder='Write your goals' 
                    style={styles.textInput} 
                    onChangeText={inputTextHandeler}
                    value={enteredText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Add Goal" 
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button 
                            title="Cancel"
                            onPress={props.notVisible}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#31136b"
    },
    image:{
        width: 100,
        height: 100,
        margin: 10,
    },
    textInput: {
        padding: 16,
        width: "100%",
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        width: 100,
        marginHorizontal: 10,
    }
});