import React,{ useRef , useEffect } from 'react'
import { BsBookHalf } from 'react-icons/bs'

function InputTitle(props) {

	const inputRef = useRef(null)

	const { item , handleInputChange , submitHandle , editItem } = props

	useEffect(() => {
		inputRef.current.focus()
	}, [item])

	return (
		<div className = "card card-body my-3" placeholder = "ADD ITEM" style = {{ border: '2px solid #B4AA9D', boxShadow : '8px 8px 8px 8px #61584D' , background :'#FFD69E'}}>
			<form onSubmit = {submitHandle} >
				<div className = "input-group">
					<div className = "input-group-prepend mx-2">
						<BsBookHalf color = 'purple' size = '2.5rem'/>
					</div>
					<input 
						className = "form-control text-capitalize"
						type = "text"
						placeholder = "add item" 
						value = {item}
						onChange = {handleInputChange}
						ref = {inputRef}
						style = {{fontWeight : 'bolder' , fontSize : '1.2em' , fontFamily: 'Montserrat', fontStyle :'normal', color : 'black', borderRadius : '1.5em', textAlign : 'center'}}
					/>
				</div>
				<button 
					className = {
						editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
					}
					type = "submit" style = {{borderRadius : '10em' , fontWieght : 'bolder' , fontSize : '1.2em' }}>
					{
						editItem ? 'Edit Item' : 'Add Item'
					}
				</button>
			</form>
		</div>
	)
}

export default InputTitle