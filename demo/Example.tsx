import { ConnectionState } from 'connection-state'
import React, { FunctionComponent, useMemo } from 'react'
import { createUseConnectionStateHook, useConnectionState } from '../src'
import './global.css'

export interface ExampleProps {}

const useConnectionStateWithEndpoints = createUseConnectionStateHook({
	endpoints: [location.href, 'https://www.google.com'],
})

export const Example: FunctionComponent<ExampleProps> = () => {
	const connection = useConnectionState()
	const connectionWithEndpoints = useConnectionStateWithEndpoints()

	return (
		<div>
			<h1>Connection state</h1>
			<State title="Basic usage" connection={connection} />
			<State title="With endpoints" connection={connectionWithEndpoints} />
		</div>
	)
}

const State: FunctionComponent<{
	title: string
	connection: ConnectionState
}> = ({ title, connection }) => {
	const emoji = useMemo(
		() => (connection === 'online' ? '✅' : '❌'),
		[connection],
	)

	return (
		<>
			<h2>{title}</h2>
			{emoji}
			<output>{connection}</output>
			{emoji}
		</>
	)
}
