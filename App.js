import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Button from "./src/components/Button";
import Task from "./src/components/Task";
import styles from "./Global";

export default function App() {
  const [tasks,setTask] = useState([]);
  const [meuTaks,setMeuTask] = useState("");

  function addNewTaks () {
    setTask([...tasks, {text: meuTaks, completed: false}]);
  }

  function ToggleTask (index){
    const newTasks = [...tasks];
    newTasks[index]. completed = !newTasks[index].completed;
    setTask(newTasks);
  }

  useEffect(() => {
    const initialTasks = [
      {text: "Atividade 1", completed: false},
      {text: "Atividade 2", completed: true},
      {text: "Atividade 3", completed: true},
    ];
    setTask(initialTasks);
  },[]);

  return (
     <View style={styles.container}>
     <TextInput style={styles.input} onChangeText={(text) =>  setMeuTask(text)}/>
     <Button title="Adicionar" onPress={() => addNewTaks()}/>
     <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Task 
        hey={task.text}
        isChecked={task.completed}
        label={task.text}
        onPress={() => ToggleTask(index)} />
      ))}
     </View>
     </View>
  );
  }
