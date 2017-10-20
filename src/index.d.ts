import { AnylineEnergyCommon } from "./anyline.energy.common";
export declare class AnylineEnergy extends AnylineEnergyCommon {
    private _scanMode;
    scanMode: string;
    createNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    private changedScanMode();
}
export declare module ScanMode {
    const AUTO_ANALOG_DIGITAL_METER = "AUTO_ANALOG_DIGITAL_METER";
    const ANALOG_METER = "ANALOG_METER";
    const DIGITAL_METER = "DIGITAL_METER";
    const HEAT_METER_4 = "HEAT_METER_4";
    const HEAT_METER_5 = "HEAT_METER_5";
    const HEAT_METER_6 = "HEAT_METER_6";
    const BARCODE = "BARCODE";
    const SERIAL_NUMBER = "SERIAL_NUMBER";
    const DIAL_METER = "DIAL_METER";
}
