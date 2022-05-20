//
//  ReactNativeEventEmitter.swift
//  DemoProject
//
//  Created by Kartik Mittal on 20/05/22.
//

import Foundation
import React

@objc(ReactNativeEventEmitter)
open class ReactNativeEventEmitter: RCTEventEmitter {
    
  override init() {
      super.init()
      NativeEventEmitter.sharedInstance.registerEventEmitter(eventEmitter: self)
  }
  
  @objc open override func supportedEvents() -> [String] {
      return NativeEventEmitter.sharedInstance.allEvents
  }

}
