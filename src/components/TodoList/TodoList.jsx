import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList">
        <TodoInfo todo={todo} key={todo.id} />
      </section>
    ))}
  </>
);
