
import "./Split.css"
import PropTypes from "prop-types";

const Split = ({items,close,setClose,setItemsplitselect}) => {
    return (
        <div className="Splitcontainer-wrapper">
            <div>
                {items.map(item=>(
                    <div className="row border align-items-center p-2" key={item.id}> 
                        <div className="col-2">
                            <img src={item.image} alt="" className="w-100 rounded-circle" />
                        </div>
                        <div className="col-7">
                            <h6>{item.name}</h6>
                            {item.balance==0?<p>You and {item.name} are even</p>:<p>{item.balance<0 ?`You owe ${item.name} ${item.balance *-1}€` :`${item.name} owes You ${item.balance}€`}</p>}
                        </div>
                        <div className="col-3">
                            <button className="split-user-btn" onClick={()=>setItemsplitselect(item)}>Select</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-end mt-3">
                <button  className={`split-user-btn ${!close ? "d-none" : ""}`}  onClick={()=>setClose(false)}>Add friend</button>
            </div>
        </div>
    )
}
Split.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // Changed from string to number
            name: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    setItemsplitselect: PropTypes.func.isRequired,
    setClose: PropTypes.func, 
    close: PropTypes.bool.isRequired,
    };
export default Split
