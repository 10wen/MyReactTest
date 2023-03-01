import Item from "./Item";


export default function TodoList(props) {
  const todos = props.data;
  const { handleDel, handleEdit, handleSelect } = props;

  return (
    <div style={{ width: "30vw", margin: "20px auto" }}>
      <ul>
        {todos.map((todo) => {
          return (
            <Item
              todo={todo}
              key={todo.id}
              handleDel={handleDel}
              handleEdit={handleEdit}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
    </div>
  );
}
