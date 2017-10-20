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
  public cancelScanning(): void { this.nativeViewProtected.cancelScanningAndReturnError(null); }
  public releaseCamera(): void { this.cancelScanning(); }
  public setCancelOnResult(value: boolean): void { this.nativeViewProtected.cancelOnResult = value; }
  public setBeepOnResult(value: boolean): void { this.nativeViewProtected.beepOnResult = value; }
  public setBlinkOnResult(value: boolean): void { this.nativeViewProtected. blinkOnResult = value; }
  public setVibrateOnResult(value: boolean): void { this.nativeViewProtected.vibrateOnResult = value; }
    public isRunning(): boolean { return this.nativeViewProtected.isRunning; }

  public setDebug(value: boolean): void { /* Do nothing on iOS */ }
  public setScale(value: number): void { /* */ }
  public getBrightnessFeedback(): any { /* */ }
  public setCropRect(value: any) { /* */ }
  public setFlashOn(isOn: boolean): void { /* Do nothing on iOS, Android only */ }
  public getNewImage(): any { /* */ }
  public setConfigFromJsonString(jsonString: string): void { /* */ }
}