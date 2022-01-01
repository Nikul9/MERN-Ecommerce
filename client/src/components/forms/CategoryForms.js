import React from "react"
const CategoryForm = ({ name , setName , hendelSubmit}) => {
    return( <form onSubmit={hendelSubmit}>
         <div className="form-group">
             <label>Name</label>
             <input type="text" className="form-control" 
                         value={name} 
                         onChange={e => setName(e.target.value)} 
                         autoFocus>
             </input>
         </div>
         <br />
         <button className="btn btn-outline-primmary">submit</button>
     </form>)
}
export default CategoryForm