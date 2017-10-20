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

/* global AnylineEnergyModuleView, interop, UIView */

declare const zAnylineEnergyModuleDelegate: any, NSObject: any, interop: any, UIView: any;
declare const AnylineEnergyModuleView: any, ALUIConfiguration: any;
declare const ALAutoAnalogDigitalMeter: any, ALSerialNumber: any, ALAnalogMeter: any;
declare const ALHeatMeter6: any, ALHeatMeter5: any, ALHeatMeter4: any;
declare const ALDigitalMeter: any, ALBarcode: any, ALDialMeter: any;
declare const CGRectMake: any;

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

class AnyLineEnergyViewerDelegateImpl extends NSObject {
    public static ObjCProtocols = [AnylineEnergyModuleDelegate,AnylineNativeBarcodeDelegate, AnylineDebugDelegate];

    private _owner: WeakRef<any>;

    public static initWithOwner(owner: WeakRef<any>): AnyLineEnergyViewerDelegateImpl {
        let delegate = <AnyLineEnergyViewerDelegateImpl>AnyLineEnergyViewerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    public anylineEnergyModuleViewDidFindResult(module, result) {
        let owner = this._owner.get();
        if (owner) {
            owner._onResult(result);
        }
    }
    public anylineEnergyModuleViewDidFindScanResultCropImageFullImageInMode(module, result, image1, image2, scanmode) {
        /* Do nothing, this is just to make sure the delegate is happy */
    }

    public anylineModuleViewReportDebugVariableValue(module, variable, value) {
        /* Do nothing, this is just to make sure the delegate is happy */
        /* However, you can print out any debug data you want from here */
    }
}


export class AnylineEnergy extends AnylineEnergyBase {
    private _anylineEnergyView: any = null;
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
        //return UIView.alloc().initWithFrame(CGRectMake(0,0,200,200));
        this._anylineEnergyView = AnylineEnergyModuleView.alloc().init();
        return this._anylineEnergyView;
    };

    public initNativeView() {
        let key = this._licenseKey || AnylineEnergy._globalLicenseKey || ((<any>global).licenses ? (<any>global).licenses.Anyline : null);
        if (key === null) {
            throw new Error("License key must be set for the Anyline energy module!");
        }
        let error = interop.Reference();
        let delegate = AnyLineEnergyViewerDelegateImpl.initWithOwner(new WeakRef(this));
        this._anylineEnergyView.debugDelegate = delegate;
        let success = this._anylineEnergyView.setupWithLicenseKeyDelegateError(key, delegate, error);
        if (!success || (error && error.value)) {
            console.error("[Anyline.energy] Error in Setup", error.value);
        }
        this._anylineEnergyView.currentConfiguration = ALUIConfiguration.cutoutConfigurationFromJsonFile(this._configFile);
        //this._anylineEnergyView.enableReporting(false);

//        nativeView.addSubview(this._anylineEnergyView);
        setTimeout( () => {
            this.changedScanMode();

        });

        application.on(application.suspendEvent, this._boundStop);
        application.on(application.resumeEvent, this._boundStart);
        application.on(application.exitEvent, this._boundStop);
        application.on("livesync", this._boundStop);
    };

    public disposeNativeView() {
        application.off(application.suspendEvent, this._boundStop);
        application.off(application.resumeEvent, this._boundStart);
    }

    public _onResult(results): void {
        const calculated = {result: results.result, confidence: parseInt(results.confidence,10)};
        if (Number.isNaN(calculated.confidence)) {
            calculated.confidence = -1;
        }

        this.notify({
            object: this,
            eventName: AnylineEnergyBase.scanEvent,
            results: calculated,
            ios: results
        });
    }

    public start():void {
        let error = interop.Reference();
        this._anylineEnergyView.startScanningAndReturnError(error);
        if (error && error.value) {
            console.error("[Anyline.energy] Start Error:", error.value);
        }
    }

    public stop():void {
        this._anylineEnergyView.cancelScanningAndReturnError(null);
    }

    private changedScanMode(): void {
        let error = interop.Reference();
        let scanMode = ALAutoAnalogDigitalMeter;
        switch (this._scanMode) {
            case ScanMode.AUTO_ANALOG_DIGITAL_METER:
                scanMode = ALAutoAnalogDigitalMeter;
                break;
            case ScanMode.ANALOG_METER:
                scanMode = ALAnalogMeter;
                break;
            case ScanMode.BARCODE:
                scanMode = ALBarcode;
                break;
            case ScanMode.DIAL_METER:
                scanMode = ALDialMeter;
                break;
            case ScanMode.DIGITAL_METER:
                scanMode = ALDigitalMeter;
                break;
            case ScanMode.HEAT_METER_4:
                scanMode = ALHeatMeter4;
                break;
            case ScanMode.HEAT_METER_5:
                scanMode = ALHeatMeter5;
                break;
            case ScanMode.HEAT_METER_6:
                scanMode = ALHeatMeter6;
                break;
            case ScanMode.SERIAL_NUMBER:
                scanMode = ALSerialNumber;
                break;
        }
        this._anylineEnergyView.setScanModeError(scanMode, error);
        if (error && error.value) {
            console.error("[Anyline.energy] ScanMode Error:", error.value); // localizedDescription().toString());
        }
        this.start();
    }

    public static readonly SCANMODE = ScanMode;
}



