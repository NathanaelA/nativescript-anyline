/**********************************************************************************
 * (c) 2017, Nathanael Anderson.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                        nathan@master-technology.com
 **********************************************************************************/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("ui/content-view");
var AnylineBaseView = (function (_super) {
    __extends(AnylineBaseView, _super);
    function AnylineBaseView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineBaseView.prototype.cancelScanning = function () { this.nativeViewProtected.cancelScanning(); };
    AnylineBaseView.prototype.releaseCamera = function () { this.nativeViewProtected.releaseCamera(); };
    AnylineBaseView.prototype.setCancelOnResult = function (value) { this.nativeViewProtected.setCancelOnResult(value); };
    AnylineBaseView.prototype.setBeepOnResult = function (value) { this.nativeViewProtected.setBeepOnResult(value); };
    AnylineBaseView.prototype.setBlinkOnResult = function (value) { this.nativeViewProtected.setBlinkOnResult(value); };
    AnylineBaseView.prototype.setVibrateOnResult = function (value) { this.nativeViewProtected.setVibrateOnResult(value); };
    AnylineBaseView.prototype.setDebug = function (value) { this.nativeViewProtected.setDebug(value); };
    AnylineBaseView.prototype.isRunning = function () { return this.nativeViewProtected.isRunning(); };
    AnylineBaseView.prototype.setScale = function (value) { this.nativeViewProtected.setScale(value); };
    AnylineBaseView.prototype.getBrightnessFeedback = function () { return this.nativeViewProtected.getBrightnessFeedback(); };
    AnylineBaseView.prototype.setCropRect = function (value) {
        var r = new org.opencv.core.Rect(value.x || 0, value.y || 0, value.width || 1, value.height || 1);
        this.nativeViewProtected.setCropRect(r);
    };
    AnylineBaseView.prototype.setFlashOn = function (isOn) { this.nativeViewProtected.setFlashOn(isOn); };
    AnylineBaseView.prototype.getNewImage = function () { return this.nativeViewProtected.getNewImage(); };
    AnylineBaseView.prototype.setConfigFromJsonString = function (jsonString) { this.nativeViewProtected.setConfigFromJsonString(jsonString); };
    return AnylineBaseView;
}(content_view_1.ContentView));
exports.AnylineBaseView = AnylineBaseView;
