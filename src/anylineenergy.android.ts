/**********************************************************************************
 * (c) 2017, Nathanael Anderson.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                        nathan@master-technology.com
 **********************************************************************************/
'use strict';
import { AnylineEnergyBase, cutoutAlignmentProperty, cutoutStyleProperty,
    cutoutOutsideColorProperty, cutoutOffsetYProperty, cutoutRectCornerRadiusProperty,
    cutoutStrokeWidthProperty, cutoutStrokeColorProperty, flashModeProperty,
    flashAlignmentProperty, beepOnResultProperty, vibrateOnResultProperty,
    blinkAnimationOnResultProperty, cancelOnResultProperty, visualFeedbackStrokeColorProperty,
   visualFeedbackStyleProperty } from "./anylineenergy-common";
import { File } from "file-system";
const application = require('application');

/* global at, com, java, technology */
declare const at: any;
//declare const java: { lang: {Object: { new() } }};
declare const technology: any;
declare const org: any;

enum ScanMode {
    AUTO_ANALOG_DIGITAL_METER = "AUTO_ANALOG_DIGITAL_METER",
    ANALOG_METER = "ANALOG_METER",
    DIGITAL_METER = "DIGITAL_METER",
    HEAT_METER_4 = "HEAT_METER_4",
    HEAT_METER_5 = "HEAT_METER_5",
    HEAT_METER_6 = "HEAT_METER_6",
    BARCODE = "BARCODE",
    SERIAL_NUMBER = "SERIAL_NUMBER",
    DIAL_METER = "DIAL_METER"
}

const AnyListener = technology.master.anyline.AnylineListener.extend({
    _owner: null,
    onAnyResult(value: any): void {
        const owner: AnylineEnergy = this._owner.get();
        if (owner) {
            owner._onResult(value);
        }
    },
    onCameraOpened: function(cameraController: any, width: number, height: number) {
        const owner: AnylineEnergy = this._owner.get();
        if (owner) {
            owner._onCameraOpened(cameraController, width, height);
        }
    },
    onCameraError: function(error: any) {
        const owner: AnylineEnergy = this._owner.get();
        if (owner) {
            owner._onCameraError(error);
        }
    }
});


export class AnylineEnergy extends AnylineEnergyBase {
    private _scanMode: string = ScanMode.AUTO_ANALOG_DIGITAL_METER;
    private _boundStart = this.start.bind(this);
    private _boundStop = this.stop.bind(this);


    // Used for Globally setting the Key before any code is ran
    static _globalLicenseKey: string = null;
    public static licenseKey(key) { AnylineEnergy._globalLicenseKey = key; }

    get scanMode(): string {
        return this._scanMode;
    }

    set scanMode(scanMode: string) {
        this._scanMode = scanMode;
        this.changedScanMode();
    }

    public createNativeView() {
        return new at.nineyards.anyline.modules.energy.EnergyScanView(this._context, null);
    };

    public initNativeView() {
        let key = this._licenseKey || AnylineEnergy._globalLicenseKey || ((<any>global).licenses ? (<any>global).licenses.Anyline : null);
        if (key === null) {
            throw new Error("License key must be set for the Anyline energy module!");
        }
        const EnergyScanView = this.nativeViewProtected;
        const listener = new AnyListener();

        let configData;
        if (File.exists(this._configFile)) {
            let configFile = File.fromPath(this._configFile);
            configData = configFile.readTextSync();
        } else {
            configData = "{\"beepOnResult\": true,\n" +
                "  \"vibrateOnResult\": true,\n" +
                "  \"blinkAnimationOnResult\": true,\n" +
                "  \"cancelOnResult\": true,}";
        }
        const jObj = new org.json.JSONObject(configData);

        listener._owner = new WeakRef(this);
        EnergyScanView.initAnyline(key, listener);
        EnergyScanView.setConfig(new at.nineyards.anyline.camera.AnylineViewConfig(this._context, jObj));
        EnergyScanView.setCameraOpenListener(listener);
        EnergyScanView.setReportingEnabled(false);
        this.changedScanMode();
        application.on(application.suspendEvent, this._boundStop);
        application.on(application.resumeEvent, this._boundStart);

    };

    public disposeNativeView() {
        application.off(application.suspendEvent, this._boundStop);
        application.off(application.resumeEvent, this._boundStart);
    }

    public _onResult(results): void {
        const calculated = {result: results.getResult(), confidence: parseInt(results.getConfidence(),10)};
        if (Number.isNaN(calculated.confidence)) {
            calculated.confidence = -1;
        }
        this.notify({
            object: this,
            eventName: AnylineEnergyBase.scanEvent,
            results: calculated,
            android: results
        });
    }

    public _onCameraOpened(camera: any, width: number, height: number): void {
        this.notify({
            object: this,
            eventName: AnylineEnergyBase.cameraOpenedEvent,
            results: {camera: camera, width: width, height: height},
            android: true
        });
    }

    public _onCameraError(error: any): void {
        this.notify({
            object: this,
            eventName: AnylineEnergyBase.cameraErrorEvent,
            error: error,
            android: true
        });
    }

    public start():void {
        this.nativeViewProtected.startScanning();
    }

    public stop():void {
        this.nativeViewProtected.cancelScanning();
        this.nativeViewProtected.releaseCameraInBackground();
    }

    private changedScanMode(): void {
        let scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.AUTO_ANALOG_DIGITAL_METER;
        switch (this._scanMode) {
            case ScanMode.AUTO_ANALOG_DIGITAL_METER:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.AUTO_ANALOG_DIGITAL_METER;
                break;
            case ScanMode.ANALOG_METER:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.ANALOG_METER;
                break;
            case ScanMode.BARCODE:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.BARCODE;
                break;
            case ScanMode.DIAL_METER:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.DIAL_METER;
                break;
            case ScanMode.DIGITAL_METER:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.DIGITAL_METER;
                break;
            case ScanMode.HEAT_METER_4:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.HEAT_METER_4;
                break;
            case ScanMode.HEAT_METER_5:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.HEAT_METER_5;
                break;
            case ScanMode.HEAT_METER_6:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.HEAT_METER_6;
                break;
            case ScanMode.SERIAL_NUMBER:
                scanMode = at.nineyards.anyline.modules.energy.EnergyScanView.ScanMode.SERIAL_NUMBER;
                break;
        }
        this.nativeViewProtected.setScanMode(scanMode);
        this.nativeViewProtected.startScanning();
    }




    public static readonly SCANMODE = ScanMode;
}



