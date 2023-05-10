import React, { FunctionComponent, useMemo } from 'react'
import { useConnectionState } from '../src'
import './global.css'

export interface ExampleProps {}

export const Example: FunctionComponent<ExampleProps> = () => {
	const connection = useConnectionState()
	const emoji = useMemo(
		() => (connection === 'online' ? '✅' : '❌'),
		[connection],
	)

	return (
		<div>
			<h1>Connection state</h1>
			{emoji}
			<output>{connection}</output>
			{emoji}
		</div>
	)
}
