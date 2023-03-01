import { useState } from "react";

export default function MyForm(props) {
  const [value, setValue] = useState("todo");

  const MyForm = (
    <div
      style={{
        width: "30vw",
        height: "40px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 20px",
        border: "1px solid blue",
        borderRadius: "8px",
      }}
    >
      <label>任务名：</label>
      <input
        style={{ flex: "1", border: "0", outline: "none" }}
        type="text"
        placeholder="todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          props.handleAdd(value);
          setValue("");
        }}
      >
        新增
      </button>
    </div>
  );
  return MyForm;
}
