
declare class ALAbstractScanPlugin extends NSObject implements ALCoreControllerDelegate {

	static alloc(): ALAbstractScanPlugin; // inherited from NSObject

	static new(): ALAbstractScanPlugin; // inherited from NSObject

	readonly confidence: number;

	coreController: ALCoreController;

	imageProvider: ALImageProvider;

	readonly pluginID: string;

	readonly scanImage: ALImage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { pluginID: string; });

	addInfoDelegate(infoDelegate: ALInfoDelegate): void;

	anylineCoreControllerDidAbortRun(coreController: ALCoreController, reason: NSError): void;

	anylineCoreControllerDidFinishWithOutput(coreController: ALCoreController, object: any): void;

	anylineCoreControllerParserError(coreController: ALCoreController, error: NSError): void;

	anylineCoreControllerReportsVariableValue(coreController: ALCoreController, variableName: string, value: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enableReporting(enable: boolean): void;

	initWithPluginID(pluginID: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isRunning(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeInfoDelegate(infoDelegate: ALInfoDelegate): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startError(imageProvider: ALImageProvider): boolean;

	stopAndReturnError(): boolean;
}

declare const enum ALBarcodeFormatOptions {

	CodeTypeAztec = 1,

	CodeTypeCodabar = 2,

	CodeTypeCode39 = 4,

	CodeTypeCode93 = 8,

	CodeTypeCode128 = 16,

	CodeTypeDataMatrix = 32,

	CodeTypeEAN8 = 64,

	CodeTypeEAN13 = 128,

	CodeTypeITF = 256,

	CodeTypePDF417 = 512,

	CodeTypeQR = 1024,

	CodeTypeRSS14 = 2048,

	CodeTypeRSSExpanded = 4096,

	CodeTypeUPCA = 8192,

	CodeTypeUPCE = 16384,

	CodeTypeUPCEANExtension = 32768,

	CodeTypeUnknown = 0,

	CodeTypeAll = 65535
}

declare class ALBarcodeResult extends ALScanResult<string> {

	static alloc(): ALBarcodeResult; // inherited from NSObject

	static new(): ALBarcodeResult; // inherited from NSObject

	readonly barcodeFormat: ALBarcodeFormatOptions;

	constructor(o: { result: string; image: UIImage; fullImage: UIImage; confidence: number; outline: ALSquare; pluginID: string; barcodeFormat: ALBarcodeFormatOptions; });

	initWithResultImageFullImageConfidenceOutlinePluginIDBarcodeFormat(result: string, image: UIImage, fullImage: UIImage, confidence: number, outline: ALSquare, pluginID: string, barcodeFormat: ALBarcodeFormatOptions): this;
}

declare class ALBarcodeScanPlugin extends ALAbstractScanPlugin {

	static alloc(): ALBarcodeScanPlugin; // inherited from NSObject

	static new(): ALBarcodeScanPlugin; // inherited from NSObject

	barcodeFormatOptions: ALBarcodeFormatOptions;

	addDelegate(delegate: ALBarcodeScanPluginDelegate): void;

	barcodeFormatForString(barcodeFormatString: string): ALBarcodeFormatOptions;

	removeDelegate(delegate: ALBarcodeScanPluginDelegate): void;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: ALBarcodeScanPluginDelegate): boolean;
}

interface ALBarcodeScanPluginDelegate extends NSObjectProtocol {

	anylineBarcodeScanPluginDidFindResult(anylineBarcodeScanPlugin: ALBarcodeScanPlugin, scanResult: ALBarcodeResult): void;
}
declare var ALBarcodeScanPluginDelegate: {

	prototype: ALBarcodeScanPluginDelegate;
};

declare const enum ALCaptureViewMode {

	BGRA = 0,

	YUV = 1
}

declare const enum ALCaptureViewResolution {

	Resolution1080 = 0,

	Resolution720 = 1,

	Resolution480 = 2
}

interface ALCharacterRange {
	minCharacterCount: number;
	maxCharacterCount: number;
}
declare var ALCharacterRange: interop.StructType<ALCharacterRange>;

declare function ALCharacterRangeMake(minCharacterCount: number, maxCharacterCount: number): ALCharacterRange;

declare class ALContours extends NSObject {

	static alloc(): ALContours; // inherited from NSObject

	static new(): ALContours; // inherited from NSObject
}

declare class ALCoreController extends NSObject {

	static alloc(): ALCoreController; // inherited from NSObject

	static buildNumber(): string;

	static frameworkBundle(): NSBundle;

	static new(): ALCoreController; // inherited from NSObject

	static versionNumber(): string;

	asyncSDK: boolean;

	delegate: ALCoreControllerDelegate;

	running: boolean;

	constructor(o: { licenseKey: string; });

	constructor(o: { licenseKey: string; delegate: ALCoreControllerDelegate; });

	enableReporting(enable: boolean): void;

	initWithLicenseKey(licenseKey: string): this;

	initWithLicenseKeyDelegate(licenseKey: string, delegate: ALCoreControllerDelegate): this;

	loadCmdFileBundlePathError(cmdFileName: string, bundlePath: string): boolean;

	loadScriptBundlePathError(script: string, bundlePath: string): boolean;

	loadScriptScriptNameBundlePathError(script: string, scriptName: string, bundlePath: string): boolean;

	processALImageError(alImage: ALImage): boolean;

	processALImageStartVariablesError(alImage: ALImage, variables: NSDictionary<any, any>): boolean;

	processImageError(image: UIImage): boolean;

	processImageStartVariablesError(image: UIImage, variables: NSDictionary<any, any>): boolean;

	reportIncludeValues(values: string): void;

	runStatistics(): NSArray<any>;

	setParameterForKey(parameter: any, key: string): void;

	startWithImageProviderError(imageProvider: ALImageProvider): boolean;

	startWithImageProviderStartVariablesError(imageProvider: ALImageProvider, variables: NSDictionary<any, any>): boolean;

	stopAndReturnError(): boolean;
}

interface ALCoreControllerDelegate extends NSObjectProtocol {

	anylineCoreControllerDidAbortRun?(coreController: ALCoreController, reason: NSError): void;

	anylineCoreControllerDidFinishWithOutput(coreController: ALCoreController, object: any): void;

	anylineCoreControllerParserError?(coreController: ALCoreController, error: NSError): void;

	anylineCoreControllerReportsVariableValue?(coreController: ALCoreController, variableName: string, value: any): void;
}
declare var ALCoreControllerDelegate: {

	prototype: ALCoreControllerDelegate;
};

declare const enum ALCutoutAlignment {

	Top = 0,

	TopHalf = 1,

	Middle = 2,

	BottomHalf = 3,

	Bottom = 4
}

declare class ALCutoutView extends UIView {

	static alloc(): ALCutoutView; // inherited from NSObject

	static appearance(): ALCutoutView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALCutoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALCutoutView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALCutoutView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALCutoutView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALCutoutView; // inherited from UIAppearance

	static new(): ALCutoutView; // inherited from NSObject

	constructor(o: { frame: CGRect; configuration: ALUIConfiguration; });

	cutoutRectScreen(): CGRect;

	drawCutout(feedbackMode: boolean): void;

	initWithFrameConfiguration(frame: CGRect, config: ALUIConfiguration): this;
}

declare class ALDataPoint extends NSObject {

	static alloc(): ALDataPoint; // inherited from NSObject

	static dataPointForDictionary(dictionary: NSDictionary<any, any>): ALDataPoint;

	static new(): ALDataPoint; // inherited from NSObject

	area: CGRect;

	readonly identifier: string;

	readonly indexPath: ALIndexPath;

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; });

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithAreaIndexPathIdentifier(area: CGRect, indexPath: ALIndexPath, identifier: string): this;

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ALDigitDataPoint extends ALDataPoint {

	static alloc(): ALDigitDataPoint; // inherited from NSObject

	static new(): ALDigitDataPoint; // inherited from NSObject

	readonly italicOffset: number;

	readonly qualitySegments: NSArray<any>;

	readonly segmentResultPattern: NSDictionary<any, any>;

	readonly segments: NSArray<any>;

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; italicOffset: number; });

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; italicOffset: number; segmentResultPattern: NSDictionary<any, any>; });

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; italicOffset: number; segments: NSArray<any>; qualitySegments: NSArray<any>; segmentResultPattern: NSDictionary<any, any>; });

	initWithAreaIndexPathIdentifierItalicOffset(area: CGRect, indexPath: ALIndexPath, identifier: string, italicOffset: number): this;

	initWithAreaIndexPathIdentifierItalicOffsetSegmentResultPattern(area: CGRect, indexPath: ALIndexPath, identifier: string, italicOffset: number, segmentResultPattern: NSDictionary<any, any>): this;

	initWithAreaIndexPathIdentifierItalicOffsetSegmentsQualitySegmentsSegmentResultPattern(area: CGRect, indexPath: ALIndexPath, identifier: string, italicOffset: number, segments: NSArray<any>, qualitySegments: NSArray<any>, segmentResultPattern: NSDictionary<any, any>): this;
}

declare class ALDigitResult extends NSObject {

	static alloc(): ALDigitResult; // inherited from NSObject

	static new(): ALDigitResult; // inherited from NSObject

	readonly identifier: string;

	readonly indexPath: ALIndexPath;

	readonly patternResultDictionary: NSDictionary<any, any>;

	readonly qualitySegments: NSArray<any>;

	readonly segments: NSArray<any>;

	readonly value: any;

	quality(): number;
}

declare class ALDisplayResult extends ALResult implements NSCopying {

	static alloc(): ALDisplayResult; // inherited from NSObject

	static new(): ALDisplayResult; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	digitIdentifiers(): NSArray<any>;

	digitsForIdentifier(identifier: string): NSArray<any>;

	numberOfDigits(): number;

	quality(): number;

	stringRepresentationOfDigitsForIdentifier(identifier: string): string;
}

declare const enum ALDocumentError {

	Unkown = -1,

	OutlineNotFound = -2,

	SkewTooHigh = -3,

	GlareDetected = -4,

	ImageTooDark = -5,

	NotSharp = -6,

	ShakeDetected = -7,

	RatioOutsideOfTolerance = -8,

	BoundsOutsideOfTolerance = -9
}

interface ALDocumentInfoDelegate extends NSObjectProtocol {

	anylineDocumentScanPluginDetectedPictureCornersInImage?(anylineDocumentScanPlugin: ALDocumentScanPlugin, corners: ALSquare, image: UIImage): void;

	anylineDocumentScanPluginReportInfo?(anylineDocumentScanPlugin: ALDocumentScanPlugin, scanInfo: ALScanInfo): void;

	anylineDocumentScanPluginReportsPictureProcessingFailure?(anylineDocumentScanPlugin: ALDocumentScanPlugin, error: ALDocumentError): void;

	anylineDocumentScanPluginReportsPreviewProcessingFailure?(anylineDocumentScanPlugin: ALDocumentScanPlugin, error: ALDocumentError): void;

	anylineDocumentScanPluginReportsPreviewResult?(anylineDocumentScanPlugin: ALDocumentScanPlugin, image: UIImage): void;
}
declare var ALDocumentInfoDelegate: {

	prototype: ALDocumentInfoDelegate;
};

declare var ALDocumentRatioBusinessCardLandscape: number;

declare var ALDocumentRatioBusinessCardPortrait: number;

declare var ALDocumentRatioCompimentsSlipLandscape: number;

declare var ALDocumentRatioCompimentsSlipPortrait: number;

declare var ALDocumentRatioDINAXLandscape: number;

declare var ALDocumentRatioDINAXPortrait: number;

declare var ALDocumentRatioLetterLandscape: number;

declare var ALDocumentRatioLetterPortrait: number;

declare class ALDocumentScanPlugin extends NSObject {

	static alloc(): ALDocumentScanPlugin; // inherited from NSObject

	static new(): ALDocumentScanPlugin; // inherited from NSObject

	coreController: ALCoreController;

	documentRatios: NSArray<number>;

	imageProvider: ALImageProvider;

	justDetectCornersIfPossible: boolean;

	maxDocumentRatioDeviation: number;

	readonly pluginID: string;

	readonly scanImage: ALImage;

	constructor(o: { pluginID: string; });

	addDelegate(delegate: ALDocumentScanPluginDelegate): void;

	addInfoDelegate(infoDelegate: ALDocumentInfoDelegate): void;

	enableReporting(enable: boolean): void;

	initWithPluginID(pluginID: string): this;

	isRunning(): boolean;

	removeDelegate(delegate: ALDocumentScanPluginDelegate): void;

	removeInfoDelegate(infoDelegate: ALDocumentInfoDelegate): void;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: ALDocumentScanPluginDelegate): boolean;

	startError(imageProvider: ALImageProvider): boolean;

	stopAndReturnError(): boolean;

	triggerPictureCornerDetectionAndReturnError(): boolean;
}

interface ALDocumentScanPluginDelegate extends NSObjectProtocol {

	anylineDocumentScanPluginHasResultFullImageDocumentCorners(anylineDocumentScanPlugin: ALDocumentScanPlugin, transformedImage: UIImage, fullFrame: UIImage, corners: ALSquare): void;
}
declare var ALDocumentScanPluginDelegate: {

	prototype: ALDocumentScanPluginDelegate;
};

declare class ALEnergyResult extends ALMeterResult {

	static alloc(): ALEnergyResult; // inherited from NSObject

	static new(): ALEnergyResult; // inherited from NSObject
}

declare const enum ALErrorCodes {

	OperationNotFound = 1001,

	SyntaxError = 2001,

	TypeError = 2002,

	ParameterInvalid = 2003,

	LicenseKeyInvalid = 3001,

	LicenseNotValidForFunction = 3002,

	WatermarkImageNotFound = 3003,

	WatermarkNotOnWindow = 3004,

	WatermarkNotCorrectInViewHierarchy = 3005,

	WatermarkHidden = 3006,

	WatermarkOutsideApplicationFrame = 3007,

	WatermarkNotNearCutout = 3008,

	WatermarkViewBoundsOutOfSnyc = 3009,

	WatermarkViewTooSmall = 3010,

	WatermarkViewNoSubviewsAllowed = 3011,

	WatermarkViewAlphaViolation = 3012,

	WatermarkViewCountViolation = 3013,

	WatermarkViewSubviewOnTopViolation = 3014,

	WatermarkImageModified = 3015,

	WatermarkUnknownError = 3016,

	ArgumentIsNull = 4001,

	ArgumentIsEmpty = 4002,

	ArgumentNotValid = 4003,

	InterpreterNotLoaded = 4004,

	NotEnoughContoursFound = 5001,

	StackDidNotFoundResult = 5002,

	DigitFirstDistanceExceeded = 5003,

	DistanceBetweenDigitsExceeded = 5004,

	DistanceViolationsNotResolved = 5005,

	ResultNotValid = 5006,

	InvalidDataPointIdentifier = 5007,

	RegionOfInterestOutsideImageBounds = 5008,

	NotEnoughPointsFound = 5009,

	AnglesOutsideOfTolerance = 5010,

	ImageNotSharp = 5011,

	TooDark = 5012,

	TooMuchReflections = 5013,

	ConfidenceNotReached = 5014,

	StringPatternNotMatching = 5015,

	IntAssertionFailed = 5016,

	DocumentRatioOutsideOfTolerance = 5019,

	DocumentBoundsOutsideOfTolerance = 5020,

	OtherConditionNotMet = 5555,

	NoInformationFound = 6001,

	ImageColorConvertionProblem = 6002,

	ImageProviderIsNil = 7001,

	RunStopError = 7002,

	SingleImageRunError = 7003,

	CameraResolutionNotSupportedByDevice = 8001,

	CameraAccessDenied = 8002,

	ModuleSimpleOCRConfigIsNil = 9001,

	ModuleSimpleOCRConfigTesseractConfigIsNil = 9002,

	ModuleSimpleOCRConfigTextHeightNotSet = 9003,

	BarcodeModuleNativeDelegateWrong = 9004,

	EnergyScanPluginBarcodeNotSupported = 9005
}

declare const enum ALFlashAlignment {

	Top = 0,

	TopLeft = 1,

	TopRight = 2,

	Bottom = 3,

	BottomLeft = 4,

	BottomRight = 5
}

declare class ALFlashButton extends UIControl {

	static alloc(): ALFlashButton; // inherited from NSObject

	static appearance(): ALFlashButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ALFlashButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ALFlashButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ALFlashButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ALFlashButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ALFlashButton; // inherited from UIAppearance

	static new(): ALFlashButton; // inherited from NSObject

	animationDelegate: ALFlashButtonAnimationDelegate;

	delegate: ALFlashButtonStatusDelegate;

	expandLeft: boolean;

	expanded: boolean;

	flashImage: UIImageView;

	flashStatus: ALFlashStatus;

	constructor(o: { frame: CGRect; flashImage: UIImage; });

	initWithFrameFlashImage(frame: CGRect, flashImage: UIImage): this;

	setExpandedAnimated(expanded: boolean, animated: boolean): void;
}

interface ALFlashButtonAnimationDelegate extends NSObjectProtocol {

	flashButtonExpanded?(flashButton: ALFlashButton, expanded: boolean): void;
}
declare var ALFlashButtonAnimationDelegate: {

	prototype: ALFlashButtonAnimationDelegate;
};

interface ALFlashButtonStatusDelegate extends NSObjectProtocol {

	flashButtonStatusChanged(flashButton: ALFlashButton, flashStatus: ALFlashStatus): void;
}
declare var ALFlashButtonStatusDelegate: {

	prototype: ALFlashButtonStatusDelegate;
};

declare const enum ALFlashMode {

	Manual = 0,

	None = 1,

	Auto = 2
}

declare const enum ALFlashStatus {

	On = 0,

	Off = 1,

	Auto = 2
}

declare class ALIdentification extends NSObject {

	static alloc(): ALIdentification; // inherited from NSObject

	static new(): ALIdentification; // inherited from NSObject

	readonly MRZString: string;

	readonly checkDigitPersonalNumber: string;

	readonly checkdigitDayOfBirth: string;

	readonly checkdigitExpirationDate: string;

	readonly checkdigitFinal: string;

	readonly checkdigitNumber: string;

	readonly dayOfBirth: string;

	readonly dayOfBirthDateObject: Date;

	readonly documentNumber: string;

	readonly documentType: string;

	readonly expirationDate: string;

	readonly expirationDateObject: Date;

	readonly givenNames: string;

	readonly issuingCountryCode: string;

	readonly nationalityCountryCode: string;

	readonly personalNumber: string;

	readonly personalNumber2: string;

	readonly sex: string;

	readonly surNames: string;

	constructor(o: { documentType: string; issuingCountryCode: string; nationalityCountryCode: string; surNames: string; givenNames: string; documentNumber: string; checkDigitNumber: string; dayOfBirth: string; checkDigitDayOfBirth: string; sex: string; expirationDate: string; checkDigitExpirationDate: string; personalNumber: string; checkDigitPersonalNumber: string; checkDigitFinal: string; personalNumber2: string; MRZString: string; });

	initWithDocumentTypeIssuingCountryCodeNationalityCountryCodeSurNamesGivenNamesDocumentNumberCheckDigitNumberDayOfBirthCheckDigitDayOfBirthSexExpirationDateCheckDigitExpirationDatePersonalNumberCheckDigitPersonalNumberCheckDigitFinalPersonalNumber2MRZString(documentType: string, issuingCountryCode: string, nationalityCountryCode: string, surNames: string, givenNames: string, documentNumber: string, checkDigitNumber: string, dayOfBirth: string, checkDigitDayOfBirth: string, sex: string, expirationDate: string, checkdigitExpirationDate: string, personalNumber: string, checkDigitPersonalNumber: string, checkDigitFinal: string, personalNumber2: string, MRZString: string): this;
}

declare class ALImage extends NSObject {

	static alloc(): ALImage; // inherited from NSObject

	static new(): ALImage; // inherited from NSObject

	imageBuffer: any;

	uiImage: UIImage;

	constructor(o: { imageBuffer: any; });

	constructor(o: { UIImage: UIImage; });

	initWithImageBuffer(imageBuffer: any): this;

	initWithUIImage(uiImage: UIImage): this;

	isEmpy(): boolean;

	uiImageWithContours(contours: ALContours): UIImage;

	uiImageWithDigitOverlay(digitSpec: ALDataPoint): UIImage;

	uiImageWithDisplayResults(displayResult: ALDisplayResult): UIImage;

	uiImageWithHorizontalLines(lines: NSArray<any>): UIImage;

	uiImageWithRectOverlay(rectToDraw: CGRect): UIImage;

	uiImageWithSpecOverlay(displaySpec: ALROISpec): UIImage;

	uiImageWithSquareOverlay(square: ALSquare): UIImage;

	uiImageWithVerticalLines(lines: NSArray<any>): UIImage;
}

interface ALImageProvider extends NSObjectProtocol {

	provideNewFullResolutionImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	provideNewImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	provideNewStillImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;
}
declare var ALImageProvider: {

	prototype: ALImageProvider;
};

declare class ALIndexPath extends NSObject {

	static alloc(): ALIndexPath; // inherited from NSObject

	static new(): ALIndexPath; // inherited from NSObject

	line: number;

	positionInLine: number;

	constructor(o: { position: number; inLine: number; });

	compare(object: any): NSComparisonResult;

	initWithPositionInLine(position: number, line: number): this;
}

interface ALInfoDelegate extends NSObjectProtocol {

	anylineScanPluginReportInfo?(anylineScanPlugin: ALAbstractScanPlugin, info: ALScanInfo): void;

	anylineScanPluginRunSkipped?(anylineScanPlugin: ALAbstractScanPlugin, runSkippedReason: ALRunSkippedReason): void;
}
declare var ALInfoDelegate: {

	prototype: ALInfoDelegate;
};

declare class ALMRZResult extends ALScanResult<ALIdentification> {

	static alloc(): ALMRZResult; // inherited from NSObject

	static new(): ALMRZResult; // inherited from NSObject

	readonly allCheckDigitsValid: boolean;

	constructor(o: { result: ALIdentification; image: UIImage; fullImage: UIImage; confidence: number; outline: ALSquare; pluginID: string; allCheckDigitsValid: boolean; });

	initWithResultImageFullImageConfidenceOutlinePluginIDAllCheckDigitsValid(result: ALIdentification, image: UIImage, fullImage: UIImage, confidence: number, outline: ALSquare, pluginID: string, allCheckDigitsValid: boolean): this;
}

declare class ALMRZScanPlugin extends ALAbstractScanPlugin {

	static alloc(): ALMRZScanPlugin; // inherited from NSObject

	static new(): ALMRZScanPlugin; // inherited from NSObject

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: ALMRZScanPluginDelegate): boolean;
}

interface ALMRZScanPluginDelegate extends NSObjectProtocol {

	anylineMRZScanPluginDidFindResult(anylineMRZScanPlugin: ALMRZScanPlugin, scanResult: ALMRZResult): void;
}
declare var ALMRZScanPluginDelegate: {

	prototype: ALMRZScanPluginDelegate;
};

declare class ALMeterResult extends ALScanResult<string> {

	static alloc(): ALMeterResult; // inherited from NSObject

	static new(): ALMeterResult; // inherited from NSObject

	readonly scanMode: ALScanMode;

	constructor(o: { result: string; image: UIImage; fullImage: UIImage; confidence: number; outline: ALSquare; pluginID: string; scanMode: ALScanMode; });

	initWithResultImageFullImageConfidenceOutlinePluginIDScanMode(result: string, image: UIImage, fullImage: UIImage, confidence: number, outline: ALSquare, pluginID: string, scanMode: ALScanMode): this;
}

declare class ALMeterScanPlugin extends ALAbstractScanPlugin {

	static alloc(): ALMeterScanPlugin; // inherited from NSObject

	static new(): ALMeterScanPlugin; // inherited from NSObject

	readonly scanMode: ALScanMode;

	addDelegate(delegate: ALMeterScanPluginDelegate): void;

	removeDelegate(delegate: ALMeterScanPluginDelegate): void;

	setScanModeError(scanMode: ALScanMode): boolean;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: ALMeterScanPluginDelegate): boolean;
}

interface ALMeterScanPluginDelegate extends NSObjectProtocol {

	anylineMeterScanPluginDidFindResult(anylineMeterScanPlugin: ALMeterScanPlugin, scanResult: ALMeterResult): void;
}
declare var ALMeterScanPluginDelegate: {

	prototype: ALMeterScanPluginDelegate;
};

declare class ALMotionDetector extends NSObject {

	static alloc(): ALMotionDetector; // inherited from NSObject

	static new(): ALMotionDetector; // inherited from NSObject

	delegate: ALMotionDetectorDelegate;

	constructor(o: { threshold: number; delegate: any; });

	initWithThresholdDelegate(threshold: number, delegate: any): this;

	startListeningForMotion(): void;

	stopListeningForMotion(): void;
}

interface ALMotionDetectorDelegate extends NSObjectProtocol {

	motionDetectorAboveThreshold(): void;
}
declare var ALMotionDetectorDelegate: {

	prototype: ALMotionDetectorDelegate;
};

declare class ALOCRConfig extends NSObject {

	static alloc(): ALOCRConfig; // inherited from NSObject

	static new(): ALOCRConfig; // inherited from NSObject

	charCountX: number;

	charCountY: number;

	charHeight: ALRange;

	charPaddingXFactor: number;

	charPaddingYFactor: number;

	charWhiteList: string;

	customCmdFilePath: string;

	customCmdFileString: string;

	isBrightTextOnDark: boolean;

	minConfidence: number;

	minSharpness: number;

	removeSmallContours: boolean;

	removeWhitespaces: boolean;

	scanMode: ALOCRScanMode;

	tesseractLanguages: NSArray<string>;

	validationRegex: string;

	constructor(o: { jsonDictionary: NSDictionary<any, any>; });

	initWithJsonDictionary(configDict: NSDictionary<any, any>): this;

	startVariablesOrError(): NSDictionary<any, any>;

	toJsonString(): string;
}

declare const enum ALOCRError {

	Unkown = -1,

	NoLinesFound = -2,

	NoTextFound = -3,

	ConfidenceNotReached = -4,

	ResultNotValid = -5,

	SharpnessNotReached = -6
}

declare class ALOCRResult extends ALScanResult<string> {

	static alloc(): ALOCRResult; // inherited from NSObject

	static new(): ALOCRResult; // inherited from NSObject

	readonly text: string;

	readonly thresholdedImage: UIImage;

	constructor(o: { result: string; image: UIImage; fullImage: UIImage; confidence: number; outline: ALSquare; pluginID: string; thresholdedImage: UIImage; });

	constructor(o: { text: string; image: UIImage; thresholdedImage: UIImage; });

	initWithResultImageFullImageConfidenceOutlinePluginIDThresholdedImage(result: string, image: UIImage, fullImage: UIImage, confidence: number, outline: ALSquare, pluginID: string, thresholdedImage: UIImage): this;

	initWithTextImageThresholdedImage(text: string, image: UIImage, thresholdedImage: UIImage): this;
}

declare const enum ALOCRScanMode {

	Line = 0,

	Grid = 1,

	Auto = 2
}

declare class ALOCRScanPlugin extends ALAbstractScanPlugin {

	static alloc(): ALOCRScanPlugin; // inherited from NSObject

	static new(): ALOCRScanPlugin; // inherited from NSObject

	readonly ocrConfig: ALOCRConfig;

	addDelegate(delegate: ALOCRScanPluginDelegate): void;

	copyTrainedDataFileHashError(trainedDataPath: string, hash: string): boolean;

	removeDelegate(delegate: ALOCRScanPluginDelegate): void;

	setOCRConfigError(ocrConfig: ALOCRConfig): boolean;

	setupWithLicenseKeyDelegateOcrConfigError(licenseKey: string, delegate: ALOCRScanPluginDelegate, ocrConfig: ALOCRConfig): boolean;
}

interface ALOCRScanPluginDelegate extends NSObjectProtocol {

	anylineOCRScanPluginDidFindResult(anylineOCRScanPlugin: ALOCRScanPlugin, result: ALOCRResult): void;
}
declare var ALOCRScanPluginDelegate: {

	prototype: ALOCRScanPluginDelegate;
};

declare const enum ALPictureResolution {

	ResolutionNone = 0,

	ResolutionHighest = 1,

	Resolution1080 = 2,

	Resolution720 = 3,

	Resolution480 = 4
}

declare class ALROISpec extends NSObject {

	static alloc(): ALROISpec; // inherited from NSObject

	static new(): ALROISpec; // inherited from NSObject

	dataPoints: NSArray<any>;

	size: CGSize;

	constructor(o: { dataPoints: NSArray<any>; size: CGSize; });

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { JSonData: NSData; });

	constructor(o: { JSonFileName: string; });

	constructor(o: { JSonString: string; });

	dataPointsForLine(line: number): NSArray<any>;

	initWithDataPointsSize(dataPoints: NSArray<any>, size: CGSize): this;

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithJSonData(jsonData: NSData): this;

	initWithJSonFileName(filename: string): this;

	initWithJSonString(jsonString: string): this;

	lineNumbers(): NSArray<any>;
}

interface ALRange {
	min: number;
	max: number;
}
declare var ALRange: interop.StructType<ALRange>;

declare const enum ALReportingMode {

	Enabled = 0,

	Disabled = 1,

	NotSet = 2
}

declare class ALResult extends NSObject {

	static alloc(): ALResult; // inherited from NSObject

	static new(): ALResult; // inherited from NSObject

	specs: ALROISpec;

	valid: boolean;

	identifiers(): NSArray<any>;

	resultForIdentifier(identifier: string): any;
}

declare const enum ALRunFailure {

	Unkown = -1,

	NoLinesFound = -2,

	NoTextFound = -3,

	ConfidenceNotReached = -4,

	ResultNotValid = -5,

	SharpnessNotReached = -6
}

declare class ALRunSkippedReason extends NSObject {

	static alloc(): ALRunSkippedReason; // inherited from NSObject

	static new(): ALRunSkippedReason; // inherited from NSObject

	readonly pluginID: string;

	reason: ALRunFailure;

	constructor(o: { runFailure: ALRunFailure; pluginID: string; });

	initWithRunFailurePluginID(reason: ALRunFailure, pluginID: string): this;
}

declare class ALScanInfo extends NSObject {

	static alloc(): ALScanInfo; // inherited from NSObject

	static new(): ALScanInfo; // inherited from NSObject

	readonly pluginID: string;

	readonly value: any;

	readonly variableName: string;

	constructor(o: { variableName: string; value: any; pluginID: string; });

	initWithVariableNameValuePluginID(variableName: string, value: any, pluginID: string): this;
}

declare const enum ALScanMode {

	AnalogMeter = 0,

	SerialNumber = 1,

	DigitalMeter = 2,

	HeatMeter4 = 3,

	HeatMeter5 = 4,

	HeatMeter6 = 5,

	AutoAnalogDigitalMeter = 6,

	DialMeter = 7,

	Barcode = 8
}

declare class ALScanResult<ObjectType> extends NSObject {

	static alloc<ObjectType>(): ALScanResult<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): ALScanResult<ObjectType>; // inherited from NSObject

	readonly confidence: number;

	fullImage: UIImage;

	readonly image: UIImage;

	outline: ALSquare;

	readonly pluginID: string;

	readonly result: ObjectType;

	constructor(o: { result: ObjectType; image: UIImage; fullImage: UIImage; confidence: number; outline: ALSquare; pluginID: string; });

	initWithResultImageFullImageConfidenceOutlinePluginID(result: ObjectType, image: UIImage, fullImage: UIImage, confidence: number, outline: ALSquare, pluginID: string): this;
}

declare class ALSegmentResult extends NSObject {

	static alloc(): ALSegmentResult; // inherited from NSObject

	static new(): ALSegmentResult; // inherited from NSObject

	active: boolean;

	frame: CGRect;

	readonly ratioBlackPixel: number;

	constructor(o: { ratioBlackPixel: number; frame: CGRect; });

	initWithRatioBlackPixelFrame(ratioBlackPixel: number, frame: CGRect): this;
}

declare class ALSegmentSpec extends NSObject {

	static alloc(): ALSegmentSpec; // inherited from NSObject

	static new(): ALSegmentSpec; // inherited from NSObject

	bounds: CGRect;

	constructor(o: { bounds: CGRect; });

	constructor(o: { dictionary: NSDictionary<any, any>; });

	initWithBounds(bounds: CGRect): this;

	initWithDictionary(dictionary: NSDictionary<any, any>): this;
}

declare class ALSquare extends NSObject {

	static alloc(): ALSquare; // inherited from NSObject

	static new(): ALSquare; // inherited from NSObject

	downLeft: CGPoint;

	downRight: CGPoint;

	upLeft: CGPoint;

	upRight: CGPoint;

	constructor(o: { CGRect: CGRect; });

	constructor(o: { upLeft: CGPoint; upRight: CGPoint; downLeft: CGPoint; downRight: CGPoint; });

	area(): number;

	area2(): number;

	boundingHeight(): number;

	boundingWidth(): number;

	boundingX(): number;

	boundingY(): number;

	boxRect(): CGRect;

	initWithCGRect(rect: CGRect): this;

	initWithUpLeftUpRightDownLeftDownRight(upLeft: CGPoint, upRight: CGPoint, downLeft: CGPoint, downRight: CGPoint): this;

	ratio(): number;

	squareWithPointOffset(offset: CGPoint): ALSquare;

	squareWithScale(scale: number): ALSquare;
}

declare class ALTextDataPoint extends ALDataPoint {

	static alloc(): ALTextDataPoint; // inherited from NSObject

	static new(): ALTextDataPoint; // inherited from NSObject

	characterCount: ALCharacterRange;

	readonly languages: NSArray<any>;

	readonly tesseractParameter: NSDictionary<any, any>;

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; languages: NSArray<any>; tesseractParameter: NSDictionary<any, any>; });

	constructor(o: { area: CGRect; indexPath: ALIndexPath; identifier: string; languages: NSArray<any>; tesseractParameter: NSDictionary<any, any>; characterRange: ALCharacterRange; });

	initWithAreaIndexPathIdentifierLanguagesTesseractParameter(area: CGRect, indexPath: ALIndexPath, identifier: string, languages: NSArray<any>, tesseractParameter: NSDictionary<any, any>): this;

	initWithAreaIndexPathIdentifierLanguagesTesseractParameterCharacterRange(area: CGRect, indexPath: ALIndexPath, identifier: string, languages: NSArray<any>, tesseractParameter: NSDictionary<any, any>, characterRange: ALCharacterRange): this;
}

declare class ALTorchManager extends NSObject implements ALFlashButtonStatusDelegate {

	static alloc(): ALTorchManager; // inherited from NSObject

	static new(): ALTorchManager; // inherited from NSObject

	captureDevice: AVCaptureDevice;

	flashStatus: ALFlashStatus;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	calculateBrightnessCount(brightness: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	flashButtonStatusChanged(flashButton: ALFlashButton, flashStatus: ALFlashStatus): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetLightLevelCounter(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCountForAutoFlash(brightnessCount: number): void;

	setLevelForAutoFlash(brightness: number): void;

	setTorch(onOff: boolean): void;

	torchAvailable(): boolean;
}

declare class ALUIConfiguration extends NSObject {

	static AL_lugPath(): UIBezierPath;

	static alloc(): ALUIConfiguration; // inherited from NSObject

	static cutoutConfigurationFromJsonFile(jsonFile: string): ALUIConfiguration;

	static new(): ALUIConfiguration; // inherited from NSObject

	backgroundAlpha: number;

	backgroundColorWithoutAlpha: UIColor;

	beepOnResult: boolean;

	blinkAnimationOnResult: boolean;

	cancelOnResult: boolean;

	captureMode: ALCaptureViewMode;

	captureResolution: ALCaptureViewResolution;

	cornerRadius: number;

	cutoutAlignment: ALCutoutAlignment;

	cutoutBackgroundColor: UIColor;

	cutoutCropOffset: CGPoint;

	cutoutCropPadding: CGSize;

	cutoutMaxPercentHeight: number;

	cutoutMaxPercentWidth: number;

	cutoutOffset: CGPoint;

	cutoutPath: UIBezierPath;

	cutoutWidthPercent: number;

	defaultCamera: string;

	feedbackStrokeColor: UIColor;

	feedbackStyle: ALUIFeedbackStyle;

	flashAlignment: ALFlashAlignment;

	flashImage: UIImage;

	flashMode: ALFlashMode;

	flashOffset: CGPoint;

	overlayImage: UIImage;

	pictureResolution: ALPictureResolution;

	reportingEnabled: ALReportingMode;

	strokeColor: UIColor;

	strokeWidth: number;

	vibrateOnResult: boolean;

	visualFeedbackAnimation: ALUIVisualFeedbackAnimation;

	visualFeedbackAnimationDuration: number;

	visualFeedbackCornerRadius: number;

	visualFeedbackFillColor: UIColor;

	visualFeedbackRedrawTimeout: number;

	visualFeedbackStrokeColor: UIColor;

	visualFeedbackStrokeWidth: number;

	constructor(o: { dictionary: NSDictionary<any, any>; bundlePath: string; });

	initWithDictionaryBundlePath(dictionary: NSDictionary<any, any>, bundlePath: string): this;

	setCutoutPathForWidthHeight(width: number, height: number): void;

	updateCutoutWidth(width: number): void;
}

declare const enum ALUIFeedbackStyle {

	Rect = 0,

	ContourRect = 1,

	ContourUnderline = 2,

	ContourPoint = 3,

	None = 4
}

declare const enum ALUIVisualFeedbackAnimation {

	TraverseSingle = 0,

	TraverseMulti = 1,

	Kitt = 2,

	Blink = 3,

	Resize = 4,

	Pulse = 5,

	PulseRandom = 6,

	None = 7
}

declare class ALValuesStack extends NSObject {

	static alloc(): ALValuesStack; // inherited from NSObject

	static new(): ALValuesStack; // inherited from NSObject

	consecutivelyValue: boolean;

	currentEqualCount: number;

	currentEqualCountWithoutEmpty: number;

	hasNewResult: boolean;

	lastCommitedResult: any;

	minEqualResults: number;

	size: number;

	constructor(o: { size: number; minimalEqualResults: number; allowSameValueConsecutively: boolean; });

	addResult(result: any): void;

	initWithSizeMinimalEqualResultsAllowSameValueConsecutively(size: number, minEqualResults: number, consecutivelyValue: boolean): this;

	newResult(): any;
}

declare class ALValuesStackFlipping extends ALValuesStack {

	static alloc(): ALValuesStackFlipping; // inherited from NSObject

	static new(): ALValuesStackFlipping; // inherited from NSObject

	constructor(o: { size: number; minimalEqualResults: number; allowSameValueConsecutively: boolean; acceptPartialResultSize: number; });

	initWithSizeMinimalEqualResultsAllowSameValueConsecutivelyAcceptPartialResultSize(size: number, minEqualResults: number, consecutivelyValue: boolean, partialResultSize: number): this;
}

declare class AnylineAbstractModuleView extends UIView {

	static alloc(): AnylineAbstractModuleView; // inherited from NSObject

	static appearance(): AnylineAbstractModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineAbstractModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineAbstractModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineAbstractModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineAbstractModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineAbstractModuleView; // inherited from UIAppearance

	static new(): AnylineAbstractModuleView; // inherited from NSObject

	beepOnResult: boolean;

	blinkOnResult: boolean;

	cancelOnResult: boolean;

	cornerRadius: number;

	currentConfiguration: ALUIConfiguration;

	readonly cutoutRect: CGRect;

	debugDelegate: AnylineDebugDelegate;

	flashButtonAlignment: ALFlashAlignment;

	flashButtonOffset: CGPoint;

	flashImage: UIImage;

	flashStatus: ALFlashStatus;

	outerAlpha: number;

	outerColor: UIColor;

	strokeColor: UIColor;

	strokeWidth: number;

	vibrateOnResult: boolean;

	videoView: AnylineVideoView;

	readonly watermarkRect: CGRect;

	cancelScanningAndReturnError(): boolean;

	enableReporting(enable: boolean): void;

	isRunning(): boolean;

	startScanningAndReturnError(): boolean;

	stopListeningForMotion(): void;
}

interface AnylineBarcodeModuleDelegate extends NSObjectProtocol {

	anylineBarcodeModuleViewDidFindResult(anylineBarcodeModuleView: AnylineBarcodeModuleView, scanResult: ALBarcodeResult): void;

	anylineBarcodeModuleViewDidFindScanResultWithBarcodeFormatAtImage?(anylineBarcodeModuleView: AnylineBarcodeModuleView, scanResult: string, barcodeFormat: ALBarcodeFormatOptions, image: UIImage): void;
}
declare var AnylineBarcodeModuleDelegate: {

	prototype: AnylineBarcodeModuleDelegate;
};

declare class AnylineBarcodeModuleView extends AnylineAbstractModuleView {

	static alloc(): AnylineBarcodeModuleView; // inherited from NSObject

	static appearance(): AnylineBarcodeModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineBarcodeModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineBarcodeModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineBarcodeModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineBarcodeModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineBarcodeModuleView; // inherited from UIAppearance

	static new(): AnylineBarcodeModuleView; // inherited from NSObject

	barcodeFormatOptions: ALBarcodeFormatOptions;

	barcodeScanPlugin: ALBarcodeScanPlugin;

	useOnlyNativeBarcodeScanning: boolean;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: AnylineBarcodeModuleDelegate): boolean;
}

interface AnylineDebugDelegate extends NSObjectProtocol {

	anylineModuleViewReportDebugVariableValue?(anylineModuleView: AnylineAbstractModuleView, variableName: string, value: any): void;

	anylineModuleViewRunSkipped?(anylineModuleView: AnylineAbstractModuleView, runFailure: ALRunFailure): void;
}
declare var AnylineDebugDelegate: {

	prototype: AnylineDebugDelegate;
};

interface AnylineDocumentModuleDelegate extends NSObjectProtocol {

	anylineDocumentModuleViewDetectedPictureCornersInImage?(anylineDocumentModuleView: AnylineDocumentModuleView, corners: ALSquare, image: UIImage): void;

	anylineDocumentModuleViewDocumentOutlineDetectedAnglesValid?(anylineDocumentModuleView: AnylineDocumentModuleView, outline: NSArray<any>, anglesValid: boolean): boolean;

	anylineDocumentModuleViewHasResultFullImage?(anylineDocumentModuleView: AnylineDocumentModuleView, transformedImage: UIImage, fullFrame: UIImage): void;

	anylineDocumentModuleViewHasResultFullImageDocumentCorners(anylineDocumentModuleView: AnylineDocumentModuleView, transformedImage: UIImage, fullFrame: UIImage, corners: ALSquare): void;

	anylineDocumentModuleViewReportsPictureProcessingFailure?(anylineDocumentModuleView: AnylineDocumentModuleView, error: ALDocumentError): void;

	anylineDocumentModuleViewReportsPreviewProcessingFailure?(anylineDocumentModuleView: AnylineDocumentModuleView, error: ALDocumentError): void;

	anylineDocumentModuleViewReportsPreviewResult?(anylineDocumentModuleView: AnylineDocumentModuleView, image: UIImage): void;

	anylineDocumentModuleViewTakePictureError?(anylineDocumentModuleView: AnylineDocumentModuleView, error: NSError): void;

	anylineDocumentModuleViewTakePictureSuccess?(anylineDocumentModuleView: AnylineDocumentModuleView): void;
}
declare var AnylineDocumentModuleDelegate: {

	prototype: AnylineDocumentModuleDelegate;
};

declare class AnylineDocumentModuleView extends AnylineAbstractModuleView {

	static alloc(): AnylineDocumentModuleView; // inherited from NSObject

	static appearance(): AnylineDocumentModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineDocumentModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineDocumentModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineDocumentModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineDocumentModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineDocumentModuleView; // inherited from UIAppearance

	static new(): AnylineDocumentModuleView; // inherited from NSObject

	documentScanPlugin: ALDocumentScanPlugin;

	maxDocumentRatioDeviation: number;

	setDocumentRatios(ratios: NSArray<number>): void;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: AnylineDocumentModuleDelegate): boolean;

	triggerPictureCornerDetectionAndReturnError(): boolean;
}

interface AnylineEnergyModuleDelegate extends NSObjectProtocol {

	anylineEnergyModuleViewDidFindResult(anylineEnergyModuleView: AnylineEnergyModuleView, scanResult: ALEnergyResult): void;

	anylineEnergyModuleViewDidFindScanResultCropImageFullImageInMode?(anylineEnergyModuleView: AnylineEnergyModuleView, scanResult: string, image: UIImage, fullImage: UIImage, scanMode: ALScanMode): void;
}
declare var AnylineEnergyModuleDelegate: {

	prototype: AnylineEnergyModuleDelegate;
};

declare class AnylineEnergyModuleView extends AnylineAbstractModuleView {

	static alloc(): AnylineEnergyModuleView; // inherited from NSObject

	static appearance(): AnylineEnergyModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineEnergyModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineEnergyModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineEnergyModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineEnergyModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineEnergyModuleView; // inherited from UIAppearance

	static new(): AnylineEnergyModuleView; // inherited from NSObject

	barcodeScanPlugin: ALBarcodeScanPlugin;

	meterScanPlugin: ALMeterScanPlugin;

	readonly scanMode: ALScanMode;

	setScanMode(scanMode: ALScanMode): void;

	setScanModeError(scanMode: ALScanMode): boolean;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: AnylineEnergyModuleDelegate): boolean;
}

interface AnylineMRZModuleDelegate extends NSObjectProtocol {

	anylineMRZModuleViewDidFindResult(anylineMRZModuleView: AnylineMRZModuleView, scanResult: ALMRZResult): void;

	anylineMRZModuleViewDidFindScanResultAllCheckDigitsValidAtImage?(anylineMRZModuleView: AnylineMRZModuleView, scanResult: ALIdentification, allCheckDigitsValid: boolean, image: UIImage): void;
}
declare var AnylineMRZModuleDelegate: {

	prototype: AnylineMRZModuleDelegate;
};

declare class AnylineMRZModuleView extends AnylineAbstractModuleView {

	static alloc(): AnylineMRZModuleView; // inherited from NSObject

	static appearance(): AnylineMRZModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineMRZModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineMRZModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineMRZModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineMRZModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineMRZModuleView; // inherited from UIAppearance

	static new(): AnylineMRZModuleView; // inherited from NSObject

	mrzScanPlugin: ALMRZScanPlugin;

	setupWithLicenseKeyDelegateError(licenseKey: string, delegate: AnylineMRZModuleDelegate): boolean;
}

interface AnylineNativeBarcodeDelegate extends NSObjectProtocol {

	anylineVideoViewDidFindBarcodeResultType(videoView: AnylineVideoView, scanResult: string, barcodeType: string): void;
}
declare var AnylineNativeBarcodeDelegate: {

	prototype: AnylineNativeBarcodeDelegate;
};

interface AnylineOCRModuleDelegate extends NSObjectProtocol {

	anylineOCRModuleViewDidFindResult(anylineOCRModuleView: AnylineOCRModuleView, result: ALOCRResult): void;

	anylineOCRModuleViewReportsRunFailure?(anylineOCRModuleView: AnylineOCRModuleView, error: ALOCRError): void;

	anylineOCRModuleViewReportsVariableValue?(anylineOCRModuleView: AnylineOCRModuleView, variableName: string, value: any): void;

	anylineOCRModuleViewTextOutlineDetected?(anylineOCRModuleView: AnylineOCRModuleView, outline: ALSquare): boolean;
}
declare var AnylineOCRModuleDelegate: {

	prototype: AnylineOCRModuleDelegate;
};

declare class AnylineOCRModuleView extends AnylineAbstractModuleView {

	static alloc(): AnylineOCRModuleView; // inherited from NSObject

	static appearance(): AnylineOCRModuleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineOCRModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineOCRModuleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineOCRModuleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineOCRModuleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineOCRModuleView; // inherited from UIAppearance

	static new(): AnylineOCRModuleView; // inherited from NSObject

	readonly ocrConfig: ALOCRConfig;

	ocrScanPlugin: ALOCRScanPlugin;

	copyTrainedDataFileHashError(trainedDataPath: string, hash: string): boolean;

	setOCRConfigError(ocrConfig: ALOCRConfig): boolean;

	setupWithLicenseKeyDelegateOcrConfigError(licenseKey: string, delegate: AnylineOCRModuleDelegate, ocrConfig: ALOCRConfig): boolean;
}

interface AnylineVideoDataSampleBufferDelegate extends NSObjectProtocol {

	anylineVideoViewDidOutputSampleBuffer(videoView: AnylineVideoView, sampleBuffer: any): void;
}
declare var AnylineVideoDataSampleBufferDelegate: {

	prototype: AnylineVideoDataSampleBufferDelegate;
};

declare class AnylineVideoView extends UIView implements ALImageProvider {

	static alloc(): AnylineVideoView; // inherited from NSObject

	static appearance(): AnylineVideoView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AnylineVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AnylineVideoView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): AnylineVideoView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AnylineVideoView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): AnylineVideoView; // inherited from UIAppearance

	static new(): AnylineVideoView; // inherited from NSObject

	barcodeDelegate: AnylineNativeBarcodeDelegate;

	readonly cutoutView: ALCutoutView;

	readonly flashButton: ALFlashButton;

	sampleBufferDelegate: AnylineVideoDataSampleBufferDelegate;

	torchManager: ALTorchManager;

	readonly watermarkRect: CGRect;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; configuration: ALUIConfiguration; });

	constructor(o: { frame: CGRect; configuration: ALUIConfiguration; });

	captureStillImageAndStopWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCoderConfiguration(aDecoder: NSCoder, configuration: ALUIConfiguration): this;

	initWithFrameConfiguration(frame: CGRect, configuration: ALUIConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	provideNewFullResolutionImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	provideNewImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	provideNewStillImageWithCompletionBlock(completionHandler: (p1: ALImage, p2: NSError) => void): void;

	resizeSquareToFullImageSquareWithImageSizeResizeWidth(square: ALSquare, imageSize: CGSize, resizeWidth: number): ALSquare;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setFocusAndExposurePoint(point: CGPoint): void;

	startVideoAndReturnError(): boolean;

	stopVideo(): void;
}

declare var charWhiteListForEmail: string;

declare var charWhiteListForIMEI: string;

declare var charWhiteListForISBN: string;

declare var charWhiteListForPriceTag: string;

declare var charWhiteListForURL: string;

declare var charWhiteListForVIN: string;

declare var kBrightnessVariableName: string;

declare var kCodeTypeAztec: string;

declare var kCodeTypeCodabar: string;

declare var kCodeTypeCode128: string;

declare var kCodeTypeCode39: string;

declare var kCodeTypeCode93: string;

declare var kCodeTypeDataMatrix: string;

declare var kCodeTypeEAN13: string;

declare var kCodeTypeEAN8: string;

declare var kCodeTypeITF: string;

declare var kCodeTypePDF417: string;

declare var kCodeTypeQR: string;

declare var kCodeTypeRSS14: string;

declare var kCodeTypeRSSExpanded: string;

declare var kCodeTypeUPCA: string;

declare var kCodeTypeUPCE: string;

declare var kCodeTypeUPCEANExtension: string;

declare var kContoursVariableName: string;

declare var kDeviceAccelerationVariableName: string;

declare var kOutlineVariableName: string;

declare var kPolygonVariableName: string;

declare var kShakeDetectionWarningVariableName: string;

declare var kSharpnessVariableName: string;

declare var kSquareVariableName: string;

declare var kThresholdedImageVariableName: string;

declare var regexForEmail: string;

declare var regexForIMEI: string;

declare var regexForISBN: string;

declare var regexForPriceTag: string;

declare var regexForURL: string;

declare var regexForVIN: string;
