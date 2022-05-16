import React, { useState } from 'react'

const  Checkbox = (props) => {

    const [check,setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
    }
  return (
    <div>
        <input 
           type="checkbox"
           name="checkbox"
           value={check}
           onChange={handleCheck}
        />
    </div>
  )
}

export default Checkbox 