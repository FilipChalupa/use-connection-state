import { ConnectionOptions, connectionState } from 'connection-state'
import { useCallback, useSyncExternalStore } from 'react'

export const createUseConnectionStateHook = (options?: ConnectionOptions) => {
	const connection = connectionState(options)
	const getState = () => connection.getState()
	const initialState = getState()

	const useConnectionState = () => {
		const subscribe = useCallback((onStoreChange: () => void) => {
			connection.addListener(onStoreChange)
			return () => {
				connection.removeListener(onStoreChange)
			}
		}, [])
		const getSnapshot = useCallback(() => getState(), [])
		const getServerSnapshot = useCallback(() => initialState, [])

		return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
	}

	return useConnectionState
}
