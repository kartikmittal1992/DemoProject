import React, { useEffect } from 'react';
import {
  Button,
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const eventEmitter = new NativeEventEmitter(
        NativeModules.NativeAppModule,
      );
      const eventListener = eventEmitter.addListener('eventName', onEventEmit);
      return(() => {
        eventListener.remove();
      })
    } else {
      let iosEventListener: EmitterSubscription = new NativeEventEmitter(
        NativeModules.ReactNativeEventEmitter,
      ).addListener('eventName', onEventEmit);
      return(() => {
        iosEventListener.remove();
      })
    }
  }, [])

  function onEventEmit(body: any) {
    console.log("===> Event Emitted " + JSON.stringify(body));
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Button
          title='Simple Function'
          onPress={() => NativeModules.NativeAppModule.simpleFunction()} />
        <Button
          title='Function with parameters'
          onPress={() => NativeModules.NativeAppModule.functionWithParam("This is parameter")} />
        <Button
          title='Function with callback'
          onPress={
            async () => {
              const callbackResult = await NativeModules.NativeAppModule.functionWithCallback();
              console.log("===>" + callbackResult);
            }} />
        <Button
          title='Function with callback and params'
          onPress={
            async () => {
              const callbackResult = await NativeModules.NativeAppModule.functionWithCallbackParams("Param 1", true);
              console.log("===>" + callbackResult);
            }
          } />
        <Button
          title='Event Emitter Function'
          onPress={() => NativeModules.NativeAppModule.emitMeEvent()} />
      </View>
    </SafeAreaView>
  );
};

export default App;
