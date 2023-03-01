
export default function Select (props) {

    const total = props.data.length;
    const doneCount = () => {
        return props.data.reduce((pre,cur)=>pre + (cur.checked? 1:0),0)
    }

    const isChange = (e) => {
        // console.log(e.target.checked);
        props.handleSelectAll(e.target.checked);
    }
    

    return (
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
          }}>
            <div>
                <input type="checkbox" checked={doneCount() === total && total !== 0} style={{marginRight: '5px'}} onChange={isChange}/><label>All</label>
            </div>
            
            <button onClick={props.handleDelAll}>deleteAll</button>

        </div>
    )
}