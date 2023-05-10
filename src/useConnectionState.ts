import { connectionState } from 'connection-state'
import { useEffect, useState } from 'react'

const connection = connectionState()
const getState = () => connection.getState()

export const useConnectionState = () => {
	const [state, setState] = useState(() => getState())

	useEffect(() => {
		const refresh = () => {
			setState(getState())
		}
		refresh()

		connection.addListener(refresh)
		return () => {
			connection.removeListener(refresh)
		}
	}, [])

	return state
}
