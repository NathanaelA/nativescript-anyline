/**********************************************************************************
 * (c) 2017, Nathanael Anderson.
 * Licensed under the MIT license.
 *
 * Version 1.0.0                                        nathan@master-technology.com
 **********************************************************************************/
'use strict';

import { EventData } from "ui/content-view";
import { Property, booleanConverter  } from "ui/core/view";
import { File, knownFolders } from "file-system";
import { Color } from "color/color";
import { AnylineBaseView } from "./anyline-baseview";

export abstract class AnylineEnergyBase extends AnylineBaseView {
    public static scanEvent = "scan";
    public static cameraOpenedEvent = "cameraOpened";
    public static cameraErrorEvent = "cameraError";

    protected _configFile: string;
    protected _licenseKey: string = null;
    constructor() {
        super();
        const currentPath = knownFolders.currentApp().path;
        if (File.exists(currentPath+"/anyline.energy.json")) {
            this._configFile = currentPath+"/anyline.energy.json";
        } else if (File.exists(currentPath+"/anyline.json")) {
            this._configFile = currentPath + "/anyline.json";
        } else if (File.exists( currentPath+"/tns_modules/nativescript-anyline/anyline.json")) {
            this._configFile = currentPath+" /tns_modules/nativescript-anyline/anyline.json";
        }
    }


    get licenseKey(): string { return this._licenseKey; }
    set licenseKey(licenseKey: string) { this._licenseKey = licenseKey; }

    get config(): string { return this._configFile; }
    set config(configFile: string) { this._configFile = configFile; }
}

export interface AnylineEnergyBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
    on(event: "scan", callback: (args: EventData) => void, thisArg?: any);
    on(event: "cameraError", callback: (args: EventData) => void, thisArg?: any);
    on(event: "cameraOpened", callback: (args: EventData) => void, thisArg?: any);
}


export const cutoutAlignmentProperty = new Property<AnylineEnergyBase, string>({
    name: "cutoutAlignment"
});
cutoutAlignmentProperty.register(AnylineEnergyBase);

export const cutoutStyleProperty = new Property<AnylineEnergyBase, string>({
    name: "cutoutStyle",
});
cutoutStyleProperty.register(AnylineEnergyBase);

export const cutoutOutsideColorProperty = new Property<AnylineEnergyBase, Color>({
    name: "cutoutOutsideColor", equalityComparer: Color.equals, valueConverter: (v) => new Color(v)
});
cutoutOutsideColorProperty.register(AnylineEnergyBase);

export const cutoutOffsetYProperty = new Property<AnylineEnergyBase, number>({
    name: "cutoutOffsetY", valueConverter: (v) => parseInt(v, 10)
});
cutoutOffsetYProperty.register(AnylineEnergyBase);

export const cutoutRectCornerRadiusProperty = new Property<AnylineEnergyBase, number>({
    name: "cutoutRectCornerRadius", valueConverter: (v) => parseInt(v, 10)
});
cutoutRectCornerRadiusProperty.register(AnylineEnergyBase);

export const cutoutStrokeWidthProperty = new Property<AnylineEnergyBase, number>({
    name: "cutoutStrokeWidth", valueConverter: (v) => parseInt(v, 10)
});
cutoutStrokeWidthProperty.register(AnylineEnergyBase);

export const cutoutStrokeColorProperty = new Property<AnylineEnergyBase, Color>({
    name: "cutoutStrokeColor", equalityComparer: Color.equals, valueConverter: (v) => new Color(v)
});
cutoutStrokeColorProperty.register(AnylineEnergyBase);

export const flashModeProperty = new Property<AnylineEnergyBase, string>({
    name: "flashMode",
});
flashModeProperty.register(AnylineEnergyBase);

export const flashAlignmentProperty = new Property<AnylineEnergyBase, string>({
    name: "flashAlignment",
});
flashAlignmentProperty.register(AnylineEnergyBase);

export const beepOnResultProperty = new Property<AnylineEnergyBase, boolean>({
    name: "beepOnResult", defaultValue: false, valueConverter: booleanConverter
});
beepOnResultProperty.register(AnylineEnergyBase);

export const vibrateOnResultProperty = new Property<AnylineEnergyBase, boolean>({
    name: "vibrateOnResult", defaultValue: false, valueConverter: booleanConverter
});
vibrateOnResultProperty.register(AnylineEnergyBase);

export const blinkAnimationOnResultProperty = new Property<AnylineEnergyBase, boolean>({
    name: "blinkAnimationOnResult", defaultValue: false, valueConverter: booleanConverter
});
blinkAnimationOnResultProperty.register(AnylineEnergyBase);

export const cancelOnResultProperty = new Property<AnylineEnergyBase, boolean>({
    name: "cancelOnResult", defaultValue: false, valueConverter: booleanConverter
});
cancelOnResultProperty.register(AnylineEnergyBase);

export const visualFeedbackStyleProperty = new Property<AnylineEnergyBase, string>({
    name: "visualFeedbackStyle",
});
visualFeedbackStyleProperty.register(AnylineEnergyBase);

export const visualFeedbackStrokeColorProperty = new Property<AnylineEnergyBase, Color>({
    name: "visualFeedbackStrokeColor", equalityComparer: Color.equals, valueConverter: (v) => new Color(v)
});
visualFeedbackStrokeColorProperty.register(AnylineEnergyBase);
