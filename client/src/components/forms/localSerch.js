import React from "react"

const LocalSearch = ({keyword , setKeyword}) => {
    return (
        <div className="container pt-4 pb-4">
            <input 
                type="serch" placeholder="Filter" 
                value={keyword} 
                onChange={(e) => {setKeyword(e.target.value.toLocaleLowerCase())}} 
                className="form-control mb-4"
            />
        </div>
    )
}

export default LocalSearch