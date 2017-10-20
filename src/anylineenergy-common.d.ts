import { EventData } from "ui/content-view";
import { AnylineBaseView } from "./anyline-baseview";
export declare abstract class AnylineEnergyBase extends AnylineBaseView {
    static scanEvent: string;
    static cameraOpenedEvent: string;
    static cameraErrorEvent: string;
    protected _configFile: string;
    protected _licenseKey: string;
    constructor();
    licenseKey: string;
    config: string;
}
export interface AnylineEnergyBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "scan", callback: (args: EventData) => void, thisArg?: any): any;
    on(event: "cameraError", callback: (args: EventData) => void, thisArg?: any): any;
    on(event: "cameraOpened", callback: (args: EventData) => void, thisArg?: any): any;
}
export declare const cutoutAlignmentProperty: any;
export declare const cutoutStyleProperty: any;
export declare const cutoutOutsideColorProperty: any;
export declare const cutoutOffsetYProperty: any;
export declare const cutoutRectCornerRadiusProperty: any;
export declare const cutoutStrokeWidthProperty: any;
export declare const cutoutStrokeColorProperty: any;
export declare const flashModeProperty: any;
export declare const flashAlignmentProperty: any;
export declare const beepOnResultProperty: any;
export declare const vibrateOnResultProperty: any;
export declare const blinkAnimationOnResultProperty: any;
export declare const cancelOnResultProperty: any;
export declare const visualFeedbackStyleProperty: any;
export declare const visualFeedbackStrokeColorProperty: any;
