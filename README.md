# Connection state hook [![npm](https://img.shields.io/npm/v/use-connection-state.svg)](https://www.npmjs.com/package/use-connection-state) ![npm type definitions](https://img.shields.io/npm/types/use-connection-state.svg)

React hook to detect online and offline network state.

You can play with it yourself here [filipchalupa.cz/use-connection-state](https://filipchalupa.cz/use-connection-state/).

## Installation

```bash
npm install use-connection-state
```

## Usage

```jsx
import { useConnectionState } from 'use-connection-state'

const App = () => {
	const connection = useConnectionState()

	return (
		<main>
			<h1>Connection state</h1>
			<p>Online: {connection === 'online' ? 'yes' : 'no'}</p>
		</main>
	)
}
```

## Development

- Install dependencies: `npm ci`
- Run: `npm run dev`
