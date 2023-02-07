import React, {useState} from "react"



export default function ExpenseForm() {
    
    const [formData, setFormData] = useState({
        date:"",
        title:"",
        location:"",
        amount: ""
    })
    function handleChange(event) {
        const {name, value} = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]:value
            }
        })
    }
    function submitForm(e) {
        e.preventDefault()
        console.log(formData)
    }
    return (
        
        <div  className="form">
            <input
             type="date"
             placeholder="enter Date"
             name="date"
             className="form--input"
             value={formData.date}
             onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Enter Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Enter location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Enter Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="form--input"
            />
            <button onClick={submitForm} className="form--button">Submit</button>
        </div>
        
        
        
    )
}
