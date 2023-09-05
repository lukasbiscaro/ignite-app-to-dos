import { StatusBar } from 'react-native';
import Home from './source/screens/Home'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Home />
    </>
  );
}
