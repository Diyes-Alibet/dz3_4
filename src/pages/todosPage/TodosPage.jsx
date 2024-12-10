import Todo from "../../components/todo/Todo.jsx";
import style from './TodosPage.module.css'

const TodosPage =() =>{
    const todos =['todo 1','todo 2','todo 3'];

    return (
        <div className={style.todosPage}>
            {todos.map((todo,index)=>(
                  <Todo key={index} todo={todo}/>
                ))}

        </div>
    )
}
export default TodosPage;