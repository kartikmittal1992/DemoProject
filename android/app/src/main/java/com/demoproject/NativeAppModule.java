package com.demoproject;

import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class NativeAppModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public NativeAppModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeAppModule";
    }

    @ReactMethod
    public void simpleFunction() {
        Log.e("NativeMethod", "Calling simple function");
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("eventName", "This is body");
    }

    @ReactMethod
    public void functionWithParam(String param) {
        Log.e("NativeMethod", "Calling function with param" + param);
    }

    @ReactMethod
    public void functionWithCallback(Promise promise) {
        Log.e("NativeMethod", "Function with callback");
        promise.resolve("Any value that needs to be return of any data type");
    }

    @ReactMethod
    public void functionWithCallbackParams(String param1, Boolean param2, Promise promise) {
        Log.e("NativeMethod", "Function with callback and params" + param1 + " " + param2);
        // do your work and accordingly return values
        try {
            if (param2.toString().equals(param1)) {
                promise.resolve("true");
            } else {
                promise.resolve("false");
            }
        }catch(Exception e){
            //If you want to throw an error
            promise.reject(e);

            //If you want to return custom message
            promise.resolve("Custom error message");
        }
    }

    @ReactMethod
    public void emitMeEvent() {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("eventName", "This is body");
    }
}
