/**********************************************************************************
 * (c) 2017, Nathanael Anderson.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                        nathan@master-technology.com
 **********************************************************************************/
'use strict';

import { ContentView } from "ui/content-view";
declare const org: any;

export abstract class AnylineBaseView extends ContentView {
  public cancelScanning(): void { this.nativeViewProtected.cancelScanning(); }
  public releaseCamera(): void { this.nativeViewProtected.releaseCamera(); }
  public setCancelOnResult(value: boolean): void { this.nativeViewProtected.setCancelOnResult(value); }
  public setBeepOnResult(value: boolean): void { this.nativeViewProtected.setBeepOnResult(value); }
  public setBlinkOnResult(value: boolean): void { this.nativeViewProtected.setBlinkOnResult(value); }
  public setVibrateOnResult(value: boolean): void { this.nativeViewProtected.setVibrateOnResult(value); }
  public setDebug(value: boolean): void { this.nativeViewProtected.setDebug(value); }
  public isRunning(): boolean { return this.nativeViewProtected.isRunning(); }
  public setScale(value: number): void { this.nativeViewProtected.setScale(value); }
  public getBrightnessFeedback(): any { return this.nativeViewProtected.getBrightnessFeedback(); }
  public setCropRect(value: any) {
      const r = new org.opencv.core.Rect(value.x || 0, value.y || 0, value.width || 1, value.height || 1);
      this.nativeViewProtected.setCropRect(r);
  }
  public setFlashOn(isOn: boolean): void { this.nativeViewProtected.setFlashOn(isOn); }
  public getNewImage(): any { return this.nativeViewProtected.getNewImage(); }
  public setConfigFromJsonString(jsonString: string): void { this.nativeViewProtected.setConfigFromJsonString(jsonString); }
}