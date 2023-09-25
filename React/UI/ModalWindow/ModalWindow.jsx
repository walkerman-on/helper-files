import React from "react"
import cl from "./ModalWindow.module.css"

const ModalWindow = ({ children, active, setActive }) => {
	const rootClasses = [cl.modal]

	if (active) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(" ")} onClick={() => setActive(false)}>
			<div className={cl.content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default ModalWindow
