import "./app.css"
import { useState } from "react"
import Split from "./Split"
import AddExpense from "./AddExpense"
import AddFriend from "./AddFriend"
const App = () => {

  let [close,setClose]=useState(true) 
  const [itemsplitselect,setItemsplitselect]=useState() 
  let [items,setItems]=useState( [
    {
      id:1,
      name:"john",
      image:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      balance:11
    },
    {
      id:2,
      name:"Bakkir",
      image:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      balance:-11
    },
    {
      id:3,
      name:"naveen",
      image:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      balance:0
    }
  ])
  
  return (
    <div >
      <div className="container-fluid">
        <Split items={items} close={close} setClose={setClose} setItemsplitselect={setItemsplitselect} />
        {!close&&<AddFriend setClose={setClose} setItems={setItems} items={items}/>}
        {itemsplitselect && <AddExpense itemsplitselect={itemsplitselect} items={items} setItems={setItems} setItemsplitselect={setItemsplitselect}/>}
      </div>
    </div>
  )
}

export default App
