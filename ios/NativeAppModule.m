//
//  NativeAppModule.m
//  DemoProject
//
//  Created by Kartik Mittal on 20/05/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(NativeAppModule, NSObject)

RCT_EXTERN_METHOD(simpleFunction)

RCT_EXTERN_METHOD(functionWithParam: (NSString)param)

RCT_EXTERN_METHOD(functionWithCallback: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(functionWithCallbackParams: (NSString)param1 param2:(BOOL)param2 resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(emitMeEvent)

@end

@interface RCT_EXTERN_MODULE(ReactNativeEventEmitter, RCTEventEmitter)
RCT_EXTERN_METHOD(supportedEvents)
@end
