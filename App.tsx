import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/components/Navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
