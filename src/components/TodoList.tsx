import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: Props) => {
	return (
		<div className="container">
			<Droppable droppableId="todosList">
				{(provided, snapshot) => (
					<div
						className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Active tasks</span>
						{todos.map((item, index) => (
							<SingleTodo
								index={index}
								todo={item}
								key={item.id}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<Droppable droppableId="todosRemove">
				{(provided, snapshot) => (
					<div
						className={`todos remove ${
							snapshot.isDraggingOver ? "dragcomplete" : ""
						}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Completed tasks</span>
						{completedTodos.map((item, index) => (
							<SingleTodo
								index={index}
								todo={item}
								key={item.id}
								todos={completedTodos}
								setTodos={setCompletedTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
