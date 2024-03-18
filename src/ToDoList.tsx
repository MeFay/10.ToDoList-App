import { SetStateAction, useState } from "react";
import {
  StyledDiv,
  StyledInput,
  StyledOl,
  StyledLi,
  StyledButton,
  StyledSpan,
} from "./Styles";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "" && !tasks.includes(newTask)) {
      setTasks((prevTasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <StyledDiv>
      <h1>To-Do List</h1>
      <div>
        <StyledInput
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <StyledButton onClick={addTask}>Add</StyledButton>
      </div>

      <StyledOl>
        {tasks.map((element, index) => (
          <StyledLi key={index}>
            <StyledSpan>{element}</StyledSpan>
            <StyledButton onClick={() => deleteTask(index)}>
              Delete
            </StyledButton>
            <StyledButton onClick={() => moveTaskUp(index)}>Up</StyledButton>
            <StyledButton onClick={() => moveTaskDown(index)}>
              Down{" "}
            </StyledButton>
          </StyledLi>
        ))}
      </StyledOl>
    </StyledDiv>
  );
};

export default ToDoList;
