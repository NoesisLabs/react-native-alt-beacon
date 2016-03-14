declare namespace RNABeacon {

    interface callback {
        (): any
    }
   
    interface resultCallback {
        (result: number): any
    }
    
    interface RNABeaconStatic {
        addBeaconParser(beaconLayout: string): void;
        checkTransmissionSupported(callback: resultCallback): void
        clearBeaconParsers(): void   
        startTransmitting(uuid: string, params: any, onSuccess: callback, onError: resultCallback): void
        startMonitoring(uuid: string): void
        startRanging(uuid: string): void
        unbind(): void
    }
}

declare module 'react-native-alt-beacon' {
    var rnaBeacon: RNABeacon.RNABeaconStatic;
    export default rnaBeacon;
}
