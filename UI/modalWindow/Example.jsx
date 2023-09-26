import React, { useState } from "react"

const Example = () => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<Modal active={modalActive} setActive={setModalActive}>
			<React.Fragment setActive={setModalActive} />
		</Modal>
	)
}

export default Example
