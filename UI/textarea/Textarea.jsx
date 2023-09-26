import React from "react"
import cl from "./Textarea.module.css"

const Textarea = (props) => {
	return (
		<textarea
			{...props}
			type="text"
			name="form-search"
			className={cl.input}
			placeholder={props.name}
			cols="10"
			rows="10"
		/>
	)
}

export default Textarea
