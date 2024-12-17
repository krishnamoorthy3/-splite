import { useState } from "react"
import "./addfriend.css"
import PropTypes from "prop-types"
const AddFriend = ({setClose,setItems,items}) => {
    const [newusername,setNewusername]=useState("")
    const [newuserimage,setNewuserimage]=useState("")
    const handelAddFriends=(e)=>{
        e.preventDefault();
        const id=items.length?items[items.length-1].id+1:1;
        const newuser={
            id:id,
            name:newusername,
            image:newuserimage,
            balance:0
        }
        setItems([...items,newuser])
        setNewusername("")
        setNewuserimage("")
        setClose(true)
    }
    return (
        <div className="bg-mask">
            <div className="exp-wrapper bg-color-f border-radius-pop">
                <h3>Split a bill with Clark</h3>
                <form action="" type="Submite" onClick={(e)=>e.preventDefault()} >
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor="">👨‍🎨 Friendname</label>
                        <input type="text" value={newusername} onChange={(e)=>setNewusername(e.target.value)}/>
                    </div>
                    <div className="d-flex  justify-content-between py-2">
                        <label htmlFor="">📷Image URL</label>
                        <input type="text" value={newuserimage}  onChange={(e)=>setNewuserimage(e.target.value)}/>
                    </div>
                    <div className="d-flex  justify-content-between gap-1">
                        <button className="split-user-btn w-100"onClick={handelAddFriends}>add</button>
                        <button className="split-user-btn w-100" onClick={()=>setClose(true)}>close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
AddFriend.propTypes={
    setClose:PropTypes.func.isRequired,     // setItems should be a function,
    setItems:PropTypes.func.isRequired,     // setItems should be a function,
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,    // id should be a string
            name: PropTypes.string.isRequired,  // name should be a string
            balance: PropTypes.number.isRequired // balance should be a number
        })).isRequired,
}
export default AddFriend
