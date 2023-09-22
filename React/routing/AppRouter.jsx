import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from ""

const AppRouter = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path="/path" element={<React.Fragment />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path="/path" element={<React.Fragment />} />
		</Routes>
	)
}

export default AppRouter
