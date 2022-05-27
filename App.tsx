import React, { useEffect, useState } from 'react';
import {
  Button,
  EmitterSubscription,
  NativeEventEmitter,
  NativeModules,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from './src/app/redux/actions/changeCountAction';
import { hitTestApi } from './src/app/redux/actions/hitApiAction';
import { AppDispatch, RootState } from './src/app/redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const dispatch : AppDispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.count.count)
  const apiData = useSelector((state: RootState) => state.apiReducer)

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
        <View style={{backgroundColor: 'red', height: 10}}></View>
        <Button title={'Increment count'} onPress={() => {          
          dispatch(changeCount(counter+1))
        }}/>
        <Button title={'Decrement count'} onPress={() => {dispatch(changeCount(counter-1))}} />
        <Text style={{textAlign: 'center', marginTop: 20}}>{`Count: ${counter}`}</Text>
      </View>
      <View style={{backgroundColor: 'red', height: 10}}></View>
      <Button title={'Hit api'} onPress={async () => {
        const result = await dispatch(hitTestApi());        
      }} />
      <Text style={{textAlign: 'center', marginTop: 20}}>{`API Data: ${JSON.stringify(apiData)}`}</Text>
    </SafeAreaView>
  );
};

export default App;
