// import { registerRootComponent } from 'expo';
// import App from './App';

// registerRootComponent(App);

//index.js
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app'); //Path with src folder
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);

// import "expo-router/entry" TODO: Double check why this does not work on its own
