export declare function fill(obj: any, name: any, replacement: any, track?: any): void;
export interface IElementSerialization {
    tag: string;
    class?: string[];
    id?: string;
    data?: {
        [key: string]: string;
    };
}
export declare function serializeDOMElement(dom: HTMLElement): IElementSerialization;
export declare function htmlTreeAsString(elem: any): string;
export declare function htmlElementAsString(elem: any): string;
export declare function hasKey(object: any, key: any): any;
export declare function merge(target: any, source: any): any;
export declare function isString(raw: any): boolean;
export declare function isNull(raw: any): boolean;
export declare function isUndefined(raw: any): boolean;
export declare function isObject(raw: any): boolean;
export declare function isError(raw: any): boolean;
export declare function isNil(raw: any): boolean;
export declare function isFunction(raw: any): any;
export declare function isArray(raw: any): number;
export declare function clone(raw: any): any;
export declare function timestampToUTCStr(timestamp: number): any;
export declare function convertDateToDateStr(oldDate: Date, hasHour: boolean, separator: string): string;
export declare function getDominFromUrl(urlStr: string): any;
export declare function getCookier(name: string): any;
export declare function setCookier(name: string, value: string): void;
export declare function getBrowserInfo(): any;
export declare function getCurrentScript(): any;
export declare function generateUUID(): string;
export declare function localStorageIsSupported(): boolean;
export declare function sendAjax(Method: string, url: string, contentType: string, data: string): void;
