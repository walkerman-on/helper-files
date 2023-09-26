import React from "react"
import cl from "./Input.module.css"

const Input = (props) => {
	return (
		<input
			{...props}
			type="text"
			name="form-search"
			className={cl.input}
			placeholder={props.placeholder}
		/>
	)
}

export default Input
