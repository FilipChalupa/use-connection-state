import { ConnectionOptions, connectionState } from 'connection-state'
import { useEffect, useState } from 'react'

export const createUseConnectionStateHook = (options?: ConnectionOptions) => {
	const connection = connectionState(options)
	const getState = () => connection.getState()

	const useConnectionState = () => {
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

	return useConnectionState
}
