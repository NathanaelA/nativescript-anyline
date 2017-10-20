import { ContentView } from "ui/content-view";
export declare abstract class AnylineBaseView extends ContentView {
    cancelScanning(): void;
    releaseCamera(): void;
    setCancelOnResult(value: boolean): void;
    setBeepOnResult(value: boolean): void;
    setBlinkOnResult(value: boolean): void;
    setVibrateOnResult(value: boolean): void;
    setDebug(value: boolean): void;
    isRunning(): boolean;
    setScale(value: number): void;
    getBrightnessFeedback(): any;
    setCropRect(value: any): void;
    setFlashOn(isOn: boolean): void;
    getNewImage(): any;
    setConfigFromJsonString(jsonString: string): void;
}
