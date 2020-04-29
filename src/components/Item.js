import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'

function Item(props) {

	const {title , itemId , clearItem , editNewItem} = props

	return (
		<li className = "list-group-item text-capitalize d-flex justify-content-between my-2" style = {{ border: '2px solid #B4AA9D', boxShadow : '8px 8px 8px 8px #61584D',  background :'#FFD69E'}}>
			<h6 style = {{fontWeight : 'bolder' , fontSize : '1.2em', color : 'black' , fontFamily: 'Montserrat', fontStyle :'normal'}}>{title}</h6>
			<div className = "todo-icon">
				<span  
					onClick = {() => editNewItem(itemId)} 
					className = "mx-2">
					<BsPencil 
						color = 'green' 
						size = "1.5rem" 
						/>
				</span>
				<span  
					onClick = {() => clearItem(itemId)} 
					className = "mx-2">
					<BsTrashFill 
						color = 'red' 
						size = "1.5rem" 
					/>
				</span>
			</div>
		</li>
	)
}

export default Item