
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
