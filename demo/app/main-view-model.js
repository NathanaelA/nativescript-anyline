"use strict";
var Observable = require("data/observable").Observable;
var Anyline = require('nativescript-anyline');

function createViewModel() {
    var viewModel = new Observable();
    viewModel.scanConfidence = "for Scan";
    viewModel.scanResult = "Waiting";
    viewModel.scanMode = Anyline.Energy.SCANMODE.AUTO_ANALOG_DIGITAL_METER;

    viewModel.results = function(r) {
        viewModel.set("scanResult", r.results.result);
        viewModel.set("scanConfidence", r.results.confidence);
    };

    viewModel.changeMode = function() {
        var anyline = getElementById("anyline");
        var newMode;
        switch (viewModel.scanMode) {
            case Anyline.Energy.SCANMODE.AUTO_ANALOG_DIGITAL_METER:
                newMode = Anyline.Energy.SCANMODE.ANALOG_METER;
                break;
            case Anyline.Energy.SCANMODE.ANALOG_METER:
                newMode = Anyline.Energy.SCANMODE.BARCODE;
                break;
            case Anyline.Energy.SCANMODE.BARCODE:
                newMode = Anyline.Energy.SCANMODE.DIAL_METER;
                break;
            case Anyline.Energy.SCANMODE.DIAL_METER:
                newMode = Anyline.Energy.SCANMODE.DIGITAL_METER;
                break;
            case Anyline.Energy.SCANMODE.DIGITAL_METER:
                newMode = Anyline.Energy.SCANMODE.HEAT_METER_4;
                break;
            case Anyline.Energy.SCANMODE.HEAT_METER_4:
                newMode = Anyline.Energy.SCANMODE.HEAT_METER_5;
                break;
            case Anyline.Energy.SCANMODE.HEAT_METER_5:
                newMode = Anyline.Energy.SCANMODE.HEAT_METER_6;
                break;
            case Anyline.Energy.SCANMODE.HEAT_METER_6:
                newMode = Anyline.Energy.SCANMODE.SERIAL_NUMBER;
                break;
            case Anyline.Energy.SCANMODE.SERIAL_NUMBER:
                newMode = Anyline.Energy.SCANMODE.AUTO_ANALOG_DIGITAL_METER;
                break;
        }
        viewModel.set("scanMode", newMode);
        anyline.scanMode = newMode;
    };

    return viewModel;
}

exports.createViewModel = createViewModel;