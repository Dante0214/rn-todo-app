import { Dimensions, StatusBar, useWindowDimensions } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Input from "./components/input";
import React, { useState } from "react";
import IconButton from "./components/iconButton";
import { icons } from "./icons";
import Task from "./components/Task";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get("window").width;
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState({
    1: { id: "1", text: "react", completed: false },
    2: { id: "2", text: "native", completed: true },
    3: { id: "3", text: "hi", completed: false },
    4: { id: "4", text: "bye", completed: false },
  });

  const addTask = () => {
    alert(newTask);
    setNewTask("");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TODO List</Title>
        <StatusBar style="Light-content" backgroundColor={theme.background} />
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task key={item.id} text={item.text} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
