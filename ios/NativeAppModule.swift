//
//  NativeAppModule.swift
//  DemoProject
//
//  Created by Kartik Mittal on 20/05/22.
//

import Foundation

@objc(NativeAppModule)
class NativeAppModule : NSObject {
  
  @objc func simpleFunction(){
    //Add your native side code here
    NSLog("%@", "Calling simple function");
    NativeEventEmitter.sharedInstance.dispatch(name: "eventName", body: "This is body")
  }
  
  @objc func functionWithParam(_ param:String){
    //Function with paramter. Pass paramter from react native side to your native side code
    NSLog("%@", "Calling functionWithParam "+param);
  }
  
  @objc func functionWithCallback(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock){
    print("Calling functionWithCallback");
    resolve("Any value that needs to be return of any data type");
  }
  
  @objc func functionWithCallbackParams(_ param1:String, param2:Bool, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock){
    print("Calling functionWithCallback");
    do {
        if (String(param2) == param1) {
            resolve("true");
        } else {
            resolve("false");
        }
    }catch let error {
      //If you want to throw an error
      reject("errorCode", error.localizedDescription, error);

      //If you want to return custom message
      resolve("Custom error message");
    };
  }
  
  @objc func emitMeEvent(){
    NativeEventEmitter.sharedInstance.dispatch(name: "eventName", body: "This is body")
  }
  
  //add this to avoid warning
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
