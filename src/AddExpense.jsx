import "./addexpense.css"
import { useState } from "react"
import PropTypes from "prop-types";
const AddExpense = ({itemsplitselect,items,setItems,setItemsplitselect}) => {
    const [totalbill,setTotalbill]=useState(0)
    const [yourexpense,setYourexpense]=useState(0)
    const [paidbill,setPaidbill]=useState("you")
    const handelExpensesplit=()=>{
        
        if(totalbill<=0 && yourexpense <=0){
            alert("Enter Your Total Bill and Your Expense")
        }else if(totalbill<=0){
            alert("Enter Your Total Bill")
        }else if(yourexpense<=0){
            alert("Enter Your Expense")
        }else{
            let balance=paidbill=="you"? itemsplitselect.balance+(totalbill-yourexpense)
            :itemsplitselect.balance>yourexpense ? itemsplitselect.balance-yourexpense :(yourexpense-itemsplitselect.balance )*-1
            let findIndex=items.findIndex(item=>item.id==itemsplitselect.id)
            if (findIndex !== -1) {
                let updatedItems = [...items]
                updatedItems[findIndex].balance = balance
                setItems(updatedItems)
                setItemsplitselect()
            } else {
                console.error("Item not found")
            }
        }
        
    }
    return (
        <div className="bg-mask">
            <div className="exp-wrapper border-radius-pop">
                <h3>Split a bill with Clark</h3>
                <form action="" onClick={(e)=>e.preventDefault()}>
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor="">💰 Bill value</label>
                        <input type="number" min="1" value={totalbill} onChange={(e)=>setTotalbill(e.target.value)} />
                    </div>
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor="">🙎‍♂️ Your expense</label>
                        <input type="number" min="1" value={yourexpense} onChange={(e)=>setYourexpense(e.target.value)}/>
                    </div>
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor="">🤼 {itemsplitselect.name} expense</label>
                        <input type="number" value={totalbill-yourexpense} disabled />
                    </div>
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor=""> 🤑 Who is paing the bill</label>
                        <select name="" value={paidbill} onChange={(e)=>setPaidbill(e.target.value)}>
                            <option value="you">You</option>
                            <option value={itemsplitselect.name}>{itemsplitselect.name}</option>
                        </select>
                    </div>
                    <div className="d-flex  justify-content-end">
                        <button className="split-user-btn" onClick={handelExpensesplit}>split bill</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
AddExpense.propTypes = {
    itemsplitselect: PropTypes.shape({
        id: PropTypes.number.isRequired,   // id should be a string and is required
        name: PropTypes.string.isRequired, // name should be a string and is required
        balance: PropTypes.number.isRequired // balance should be a number and is required
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,    // id should be a string
        name: PropTypes.string.isRequired,  // name should be a string
        balance: PropTypes.number.isRequired // balance should be a number
    })).isRequired,
    setItems: PropTypes.func.isRequired,     // setItems should be a function
    setItemsplitselect: PropTypes.func.isRequired // setItemsplitselect should be a function
};
export default AddExpense
