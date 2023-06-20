// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodos} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodos(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
