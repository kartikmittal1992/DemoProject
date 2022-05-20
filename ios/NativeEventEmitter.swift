//
//  NativeEventEmitter.swift
//  DemoProject
//
//  Created by Kartik Mittal on 20/05/22.
//

import Foundation
import React

class NativeEventEmitter {
  public static var sharedInstance = NativeEventEmitter()

  private static var eventEmitter: ReactNativeEventEmitter!

  private init() {}
  
  func registerEventEmitter(eventEmitter: ReactNativeEventEmitter) {
    NativeEventEmitter.eventEmitter = eventEmitter
  }

  func dispatch(name: String, body: Any?) {
    NativeEventEmitter.eventEmitter.sendEvent(withName: name, body: body)
  }

  /// All Events which must be support by React Native.
  lazy var allEvents: [String] = {
      var allEventNames: [String] = []
      allEventNames.append("eventName")
      return allEventNames
  }()
}
