import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [Goals, setGoals] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function addGoalHandler(enteredText){
    if(enteredText)
      setGoals(prevGoals => [
        ...prevGoals,
        {text: enteredText , id: Math.random().toString()}
      ]);
    
    endModalVisible();
  }
  function deleteGoalHandler(id){
    setGoals(prevGoals =>{
      return (
        prevGoals.filter((goal) => goal.id!==id)
      )
    })
  }
  function startModalVisible(){
    setModalVisibility(true);
  }
  function endModalVisible(){
    setModalVisibility(false);
  }

   return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button 
          title="Add New Goal" 
          onPress={startModalVisible}
          color="#b180f0"
          />
        </View>
        <GoalInput  
          onAddGoal={addGoalHandler}
          visible = {modalVisibility}
          notVisible = {endModalVisible}
        />
        <View style={styles.listGoal}>
          <FlatList 
            data={Goals}
            keyExtractor={(item,index)=>{
              return item.id;
            }}
            renderItem={(ItemData)=>{
              return (
                <GoalItem 
                  text = {ItemData.item.text}
                  delete = {deleteGoalHandler}
                  id = {ItemData.item.id}
                />
              );
            }}
          />
        </View>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e0858"
  },
  listGoal:{
    flex: 5,
    paddingTop: 10,
  },
  button: {
      marginHorizontal: 10,
  }

});
