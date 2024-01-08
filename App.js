import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stacknavigator from './stacknavigator';

export default function App() {
  return (
    <>
      <Stacknavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'anything',
  },
});
