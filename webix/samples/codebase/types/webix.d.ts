// Type definitions for Webix UI 7.0
// Project: https://webix.com

type WebixTemplate = (...args: any[]) => string;
type WebixCallback = (...args: any[]) => any;
type EventHash = { [id: string]: WebixCallback };
type SizeInfo = { width: number, height: number };


export function ajax(url?: string, params?: any): webix.Ajax | Promise<any>;

export function $$(id: string | Event | HTMLElement): webix.ui.baseview;


interface Ajax {
    master: any;

    bind(master: any): Ajax;

    del(url: string, params?: any, callback?: WebixCallback): Promise<any>;

    get(url: string, params?: any, callback?: WebixCallback): Promise<any>;

    getXHR(): any;

    headers(values: any): Ajax;

    post(url: string, params?: any, callback?: WebixCallback): Promise<any>;

    put(url: string, params?: any, callback?: WebixCallback): Promise<any>;

    response(type: string): Ajax;

    stringify(data: any): string;

    sync(): Ajax;
}

interface clipbuffer {
    destructor(): void;

    focus(): void;

    init(): void;

    set(text: string): void;
}

interface color {
    hexToDec(hex: string): number;

    hsvToRgb(h: number, s: number, v: number): any[];

    rgbToHsv(r: number, g: number, b: number): any[];

    toHex(number: number, length?: number): string;

    toRgb(rgb: string): any[];
}

interface csv {
    delimiter: any;
    escape: boolean;

    parse(text: string, delimiter?: any): any[];

    stringify(data: any[], delimiter?: any): string;
}

interface editors {
    $popup: any;
    checkbox: string;
    color: string;
    combo: string;
    date: string;
    "inline-checkbox": string;
    "inline-text": string;
    multiselect: string;
    password: string;
    popup: string;
    richselect: string;
    select: string;
    text: string;
}

interface env {
    cssPrefix: string;
    isFF: boolean;
    isIE: boolean;
    isSafari: boolean;
    isWebKit: boolean;
    jsPrefix: string;
    mouse: any;
    strict: boolean;
    svg: boolean;
    transform: boolean;
    transition: boolean;
    transitionDuration: string;
    transitionEnd: string;
    translate: string;
}

interface history {
    push(view: string, url: string, value: any): void;

    track(view: string, url: string): void;
}

interface html {
    addCss(node: HTMLElement, name: string): void;

    addMeta(name: string, value: string): void;

    addStyle(css: string): void;

    allowSelect(): void;

    create(name: string, attrs: any, html?: string): HTMLElement;

    createCss(data: any): string;

    denySelect(): void;

    getValue(node: HTMLElement): string;

    index(node: HTMLElement): number;

    insertBefore(node: HTMLElement, before: HTMLElement, rescue?: HTMLElement): void;

    locate(ev: Event | HTMLElement, name: string): string;

    offset(node: HTMLElement): any;

    pos(ev: Event): any;

    posRelative(ev: Event): any;

    preventEvent(ev: Event): boolean;

    remove(node: HTMLElement | HTMLElement[]): void;

    removeCss(node: HTMLElement, name: string): void;

    stopEvent(ev: Event): boolean;

    getTextSize(text: (string | string[]), css?: string, width?: number): SizeInfo;

    triggerEvent(node: HTMLElement, type: string, name: string): void;
}

interface i18n {
    calendar: any;
    controls: any;
    dateFormat: string;
    decimalDelimiter: string;
    decimalSize: number;
    fileSize: any[];
    fullDateFormat: string;
    groupDelimiter: string;
    groupSize: number;
    locales: any;
    longDateFormat: string;
    parseFormat: string;
    parseTimeFormat: string;
    price: string;
    priceSettings: any;
    timeFormat: string;

    dateFormatDate(date: string): any;

    dateFormatStr(date: any): string;

    fullDateFormatDate(date: string): any;

    fullDateFormatStr(date: Date): string;

    intFormat(num: number): string;

    longDateFormatDate(date: string): any;

    longDateFormatStr(date: any): string;

    numberFormat(number: number): string;

    parseFormatDate(date: string): any;

    parseFormatStr(date: any): string;

    parseTimeFormatDate(date: string): any;

    parseTimeFormatStr(date: any): string;

    priceFormat(number: number): string;

    setLocale(name: string): void;

    timeFormatDate(time: string): any;

    timeFormatStr(date: any): string;
}

interface locale {
    pager: any;
}

interface markup {
    attribute: any;
    dataTag: any;
    namespace: any;

    init(node: string, target: string): webix.ui.baseview;

    parse(data: any, datatype: string): void;
}

interface promise {
    new(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void): Promise<any>;

    all(promises: Promise<any>[]): Promise<any>;

    race(promises: Promise<any>[]): Promise<any>;

    defer(): Promise<any>;

    resolve(value: any): Promise<any>;

    reject(value: any): Promise<any>;

}

interface rules {
    isChecked(): boolean;

    isEmail(): boolean;

    isNotEmpty(): boolean;

    isNumber(): boolean;
}

interface cookie {
    clear(): void;

    get(name: string): any;

    put(name: string, value: any): void;

    remove(name: string): void;
}

interface local {
    clear(): void;

    get(name: string): any;

    put(name: string, value: any): void;

    remove(name: string): void;
}

interface session {
    clear(): void;

    get(name: string): any;

    put(name: string, value: any): void;

    remove(name: string): void;
}

interface storage {
    cookie: webix.cookie;
    local: webix.local;
    session: webix.session;
}

export function alert(text: any, type?: string | WebixCallback, callback?: WebixCallback): Promise<any>;

export function animate(html_element: HTMLElement, animation: any): void;

export function attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

export function bind(code: WebixCallback, master: any): WebixCallback;

export function blockEvent(): void;

export function callEvent(name: string, params: any[]): boolean;

export function clone(source: any): any;

export function confirm(text: any, type?: string | WebixCallback, callback?: WebixCallback): Promise<any>;

export function copy(source: any): any;

export function delay(code: WebixCallback, owner?: any, params?: any[], delay?: number): number;

export function detachEvent(id: string): void;

export function dp(name: any): any;

export function editStop(): void;

export function event(node: HTMLElement | string, event: string, handler: WebixCallback, context?: any): string | number;

export function eventRemove(id: string | number): void;

export function exec(code: string): void;

export function extend(target: any, source: any, overwrite?: boolean): any;

export function hasEvent(name: string): boolean;

export function isArray(check: any): boolean;

export function isDate(check: any): boolean;

export function isUndefined(check: any): boolean;

export function mapEvent(map: any): void;

export function message(content: any, type?: string, expire?: number, id?: string | number): string;

export function modalbox(text: any, type?: string | WebixCallback, callback?: WebixCallback): Promise<any>;

export function once(code: WebixCallback): void;

export function print(view: any, options?: any): void;

export function proto(target: any, ...mixins: any[]): any;

export function protoUI(target: any, ...mixins: any[]): any;

export function proxy(type: string, source: string): any;

export function ready(code: WebixCallback): void;

export function remote(): void;

export function require(url: any, callback?: WebixCallback, master?: any): Promise<any>;

export function send(url: string, values: any, method: string, target: string): void;

export function single(source: WebixCallback): WebixCallback;

export function stringify(obj: any): string;

export function template(template: string): WebixCallback;

export function toCSV(id: any, options?: any): any;

export function toExcel(id: any, options?: any): any;

export function toFunctor(name: string): WebixCallback;

export function toNode(id: string): HTMLElement;

export function toPDF(id: any, options?: any): any;

export function toPNG(id: any, options?: any): any;

export function type(config: any): void;

export function ui(config: any, parent?: any, replacement?: any): webix.ui.baseview;

export function uid(): number;

export function unblockEvent(): void;

export function wrap(target: WebixCallback, source: WebixCallback): WebixCallback;

export var codebase: string;
export var name: string;
export var version: string;
export var clipbuffer: webix.clipbuffer;
export var color: webix.color;
export var csv: webix.csv;
export var editors: webix.editors;
export var env: webix.env;
export var history: webix.history;
export var html: webix.html;
export var i18n: webix.i18n;
export var locale: webix.locale;
export var markup: webix.markup;
export var promise: webix.promise;
export var rules: webix.rules;
export var storage: webix.storage;

export namespace message {
    function hide(content: any): void;
}

interface AtomDataLoader {
    load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

    parse(data: any, type: string): void;
}

export var AtomDataLoader: AtomDataLoader;

interface AtomRender {
    render(id: string | number, data: any, type: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;
}

export var AtomRender: AtomRender;

interface AutoScroll {
}

export var AutoScroll: AutoScroll;

interface AutoTooltip {
    $tooltipOut: void;

    $tooltipIn(node: HTMLElement): HTMLElement;

    $tooltipMove(t: HTMLElement, e: Event, text: string): void;
}

export var AutoTooltip: AutoTooltip;

interface BaseBind {
    bind(target: any, rule?: WebixCallback, format?: string): void;

    unbind(): void;
}

export var BaseBind: BaseBind;

interface BindSource {
    addBind(source: any, rule: string, format: string): void;

    getBindData(key: string | number, update: boolean): void;

    removeBind(source: any): void;

    saveBatch(handler: WebixCallback): void;

    setBindData(data: any, key: string | number): void;
}

export var BindSource: BindSource;

interface Canvas {
    clearCanvas(): void;

    getCanvas(context: string): any;

    hideCanvas(): void;

    renderText(x: number, y: number, text: string, css: string, w: number): void;

    renderTextAt(valign: string, align: string, x: number, y: number, t: string, c: string, w: number): void;

    showCanvas(): void;

    toggleCanvas(): void;
}

export var Canvas: Canvas;

interface CodeParser {
    collapseNames(obj: any): { [key: string]: any; };

    expandNames(obj: { [key: string]: any; }): any;
}

export var CodeParser: CodeParser;

interface CollectionBind {
    getCursor(): number;

    refreshCursor(): void;

    setCursor(cursor: string | number): void;
}

export var CollectionBind: CollectionBind;

interface ContextHelper {
    attachTo(view: any): void;

    getContext(): any;

    setContext(context: any): void;
}

export var ContextHelper: ContextHelper;

interface CopyPaste {
}

export var CopyPaste: CopyPaste;

interface CustomPrint {
    $customPrint: WebixCallback;
}

export var CustomPrint: CustomPrint;

interface CustomScroll {
    scrollStep: number;

    enable(html_node: HTMLElement | webix.ui.baseview): void;

    init(): void;

    resize(): void;
}

export var CustomScroll: CustomScroll;

interface DataCollection {
    config: DataCollectionConfig;
    data: DataStore;
    name: string;
    waitData: Promise<any>;

    add(obj: any, index?: number): string | number;

    addBind(source: any, rule: string, format: string): void;

    attachEvent(type: DataCollectionEventName, functor: WebixCallback, id?: string): string | number;

    bind(target: any, rule?: WebixCallback, format?: string): void;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    clearAll(soft?: boolean): void;

    clearValidation(): void;

    copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

    count(): number;

    define(property: string, value: any): void;

    destructor(): void;

    detachEvent(id: string): void;

    exists(id: number | string): boolean;

    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

    find(criterion: WebixCallback, first?: boolean): any;

    getBindData(key: string | number, update: boolean): void;

    getCursor(): number;

    getFirstId(): number | string;

    getIdByIndex(index: number | string): string | number;

    getIndexById(id: number | string): number;

    getItem(id: number | string): any;

    getLastId(): number | string;

    getNextId(id: number | string, step: number): string | number;

    getPrevId(id: number | string, step: number): string | number;

    hasEvent(name: string): boolean;

    isVisible(): boolean;

    load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

    loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

    mapEvent(map: any): void;

    move(sid: string, tindex: number, tobj?: any, details?: any): string;

    moveBottom(id: string | number): void;

    moveDown(id: string | number, step: number): void;

    moveTop(id: string | number): void;

    moveUp(id: string | number, step: number): void;

    parse(data: any, type: string): void;

    refresh(id?: number | string): void;

    refreshCursor(): void;

    remove(id: string | number | any[]): void;

    removeBind(source: any): void;

    saveBatch(handler: WebixCallback): void;

    serialize(all?: boolean): any[];

    setBindData(data: any, key: string | number): void;

    setCursor(cursor: string | number): void;

    sort(by: string, dir?: string, as?: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;

    unbind(): void;

    unblockEvent(): void;

    updateItem(id: number | string, data: any): void;

    validate(id?: string): boolean;

    waitSave(handler: WebixCallback): Promise<any>;
}

interface DataCollectionConfig {
    view?: string;
    data?: string | any[];
    dataFeed?: string | WebixCallback;
    datathrottle?: number;
    datatype?: string;
    defaultData?: any;
    externalData?: WebixCallback;
    id?: string | number;
    map?: any;
    on?: EventHash;
    ready?: WebixCallback;
    removeMissed?: boolean;
    rules?: any;
    save?: any;
    scheme?: any;
    url?: any;
}

type DataCollectionEventName =
    'onAfterAdd'
    | 'onAfterCursorChange'
    | 'onAfterDelete'
    | 'onAfterLoad'
    | 'onAfterSort'
    | 'onBeforeAdd'
    | 'onBeforeCursorChange'
    | 'onBeforeDelete'
    | 'onBeforeLoad'
    | 'onBeforeSort'
    | 'onBindRequest'
    | 'onBindUpdate'
    | 'onDataRequest'
    | 'onDataUpdate'
    | 'onDestruct'
    | 'onLoadError'
    | 'onValidationError'
    | 'onValidationSuccess';

interface DataCollectionFactory {
    new(config?: DataCollectionConfig): DataCollection;
}

export var DataCollection: DataCollectionFactory;

interface DataDriver {
    csv: any;
    excel: string;
    html: any;
    htmltable: any;
    jsarray: any;
    json: any;
    xml: any;
}

export var DataDriver: DataDriver;

interface DataLoader {
    data: DataStore;
    waitData: Promise<any>;

    add(obj: any, index?: number): string | number;

    clearAll(soft?: boolean): void;

    count(): number;

    exists(id: number | string): boolean;

    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

    find(criterion: WebixCallback, first?: boolean): any;

    getFirstId(): number | string;

    getIdByIndex(index: number | string): string | number;

    getIndexById(id: number | string): number;

    getItem(id: number | string): any;

    getLastId(): number | string;

    getNextId(id: number | string, step: number): string | number;

    getPrevId(id: number | string, step: number): string | number;

    load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

    loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

    parse(data: any, type: string): void;

    refresh(id?: number | string): void;

    remove(id: string | number | any[]): void;

    serialize(all?: boolean): any[];

    sort(by: string, dir?: string, as?: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;

    updateItem(id: number | string, data: any): void;

    waitSave(handler: WebixCallback): Promise<any>;
}

export var DataLoader: DataLoader;

interface DataMarks {
    addCss(id: string | number, css: string, silent?: boolean): void;

    clearCss(css: string, silent?: boolean): void;

    hasCss(id: string | number, css: string): boolean;

    removeCss(id: string | number, css: string, silent?: boolean): void;
}

export var DataMarks: DataMarks;

interface DataMove {
    copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

    move(sid: string, tindex: number, tobj?: any, details?: any): string;

    moveBottom(id: string | number): void;

    moveDown(id: string | number, step: number): void;

    moveTop(id: string | number): void;

    moveUp(id: string | number, step: number): void;
}

export var DataMove: DataMove;

interface DataProcessor {
    config: { [key: string]: any; };
    name: string;

    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

    attachProgress(start: WebixCallback, end: WebixCallback, error: WebixCallback): void;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    clearValidation(): void;

    define(property: string, value: any): void;

    detachEvent(id: string): void;

    escape(value: string): string;

    getItemState(itemId: string | number): any;

    getState(): string | boolean;

    hasEvent(name: string): boolean;

    ignore(code: WebixCallback, master: any): void;

    mapEvent(map: any): void;

    off(): void;

    on(): void;

    processResult(data: any): void;

    reset(): void;

    save(id: string | number, operation?: string, obj?: any): Promise<any>;

    send(): Promise<any>;

    setItemState(itemId: string | number, state: boolean): void;

    unblockEvent(): void;

    validate(mode?: any): boolean;
}

export var DataProcessor: DataProcessor;

interface DataRecord {
    config: { [key: string]: any; };
    name: string;

    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

    bind(target: any, rule?: WebixCallback, format?: string): void;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    define(property: string, value: any): void;

    detachEvent(id: string): void;

    getValues(): any;

    hasEvent(name: string): boolean;

    isVisible(): boolean;

    load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

    mapEvent(map: any): void;

    parse(data: any, type: string): void;

    refresh(id?: string | number): void;

    setValues(values: any, update?: boolean): void;

    unbind(): void;

    unblockEvent(): void;
}

interface DataRecordConfig {
    view?: string;
    data?: string | any[];
    dataFeed?: string | WebixCallback;
    datatype?: string;
    id?: string | number;
    on?: EventHash;
    url?: any;
}

type DataRecordEventName = 'onAfterLoad' | 'onBeforeLoad' | 'onBindRequest' | 'onChange' | 'onLoadError';

interface DataRecordFactory {
    new(config?: DataRecordConfig): DataRecord;
}

export var DataRecord: DataRecordFactory;

interface DataState {
    getState(): any;

    setState(state: any): void;
}

export var DataState: DataState;

interface DataStore {
    driver: any;
    name: string;
    order: any[];
    pull: any;
    sorting: any;

    add(obj: any, index?: number): string | number;

    addMark(id: string, name: string, css?: boolean, value?: any): any;

    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    changeId(old: string | number, newid: string | number): void;

    clearAll(soft?: boolean): void;

    clearMark(name: string): void;

    count(): number;

    destructor(): void;

    detachEvent(id: string): void;

    each(method: WebixCallback, master?: any, all?: boolean): void;

    exists(id: number | string): boolean;

    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

    find(criterion: WebixCallback, first?: boolean): any;

    getFirstId(): number | string;

    getIdByIndex(index: number | string): string | number;

    getIndexById(id: number | string): number;

    getIndexRange(from: string | number, to: string | number): any[];

    getItem(id: number | string): any;

    getLastId(): number | string;

    getMark(id: number | string, mark_name: string): any;

    getNextId(id: number | string, step: number): string | number;

    getPrevId(id: number | string, step: number): string | number;

    getRange(from: number | string, to: string | number): any[];

    hasEvent(name: string): boolean;

    id(item: any): number | string;

    importData(source: webix.ui.baseview): void;

    mapEvent(map: any): void;

    move(sid: string, tindex: number, tobj?: any, details?: any): string;

    provideApi(target: any, eventable: boolean): void;

    refresh(id?: number | string): void;

    remove(id: string | number | any[]): void;

    removeMark(id: number | string, name: string, css: boolean): void;

    scheme(config: any): void;

    serialize(all?: boolean): any[];

    setDriver(type: string): void;

    silent(code: WebixCallback): void;

    sort(by: string, dir?: string, as?: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;

    unblockEvent(): void;

    unsync(): void;

    updateItem(id: number | string, data: any): void;
}

export var DataStore: DataStore;

interface DataValue {
    name: string;

    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

    bind(target: any, rule?: WebixCallback, format?: string): void;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    detachEvent(id: string): void;

    getValue(): string;

    hasEvent(name: string): boolean;

    isVisible(): boolean;

    mapEvent(map: any): void;

    refresh(): void;

    setValue(value: string): void;

    unbind(): void;

    unblockEvent(): void;
}

interface DataValueConfig {
    view?: string;
    id?: string | number;
    on?: EventHash;
    value?: string | number;
}

type DataValueEventName = 'onBindRequest' | 'onChange';

interface DataValueFactory {
    new(config?: DataValueConfig): DataValue;
}

export var DataValue: DataValueFactory;

interface Date {
    startOnMonday: boolean;

    add(date: any, inc: number, mode: string, copy: boolean): any;

    copy(date: any): any;

    datePart(date: any, copy: boolean): any;

    dateToStr(format: string, utc: boolean): WebixCallback;

    dayStart(date: any): any;

    equal(datea: any, dateb: any): boolean;

    getISOWeek(date: any): number;

    getUTCISOWeek(date: any): number;

    isHoliday(date: any): boolean;

    monthStart(date: any): any;

    strToDate(format: string, utc: boolean): WebixCallback;

    timePart(date: any): number;

    toFixed(num: number | string): number | string;

    weekStart(date: any): any;

    yearStart(date: any): any;
}

export var Date: Date;

interface Destruction {
    destructor(): void;
}

export var Destruction: Destruction;

interface DragControl {
    $dragPos: WebixCallback;
    left: number;
    top: number;

    addDrag(node: string | number | HTMLElement, ctrl: any): void;

    addDrop(node: string | number | HTMLElement, ctrl: any, master_mode?: boolean): void;

    createDrag(event: Event): void;

    destroyDrag(): void;

    getContext(): any;

    getMaster(target: any): any;

    getNode(): HTMLElement;

    sendSignal(signal: string): void;

    $drag(source: HTMLElement, ev: Event): HTMLElement;

    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): void;

    $dragOut(source: HTMLElement, target: HTMLElement, drop: HTMLElement, event: Event): void;

    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
}

export var DragControl: DragControl;

interface DragItem {
    $dragHTML: WebixCallback;
    $dropAllow: WebixCallback;
    $dropHTML: WebixCallback;

    $drag(source: HTMLElement, ev: Event): string;

    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

    $dragMark(context: any, ev: Event): boolean;

    $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
}

export var DragItem: DragItem;

interface DragOrder {
    $dragDestroy: void;
    $dragMark: boolean;
    $dragPos: WebixCallback;

    $drag(source: HTMLElement, ev: Event): string;

    $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

    $dragOut(source: HTMLElement, target: HTMLElement, drop: HTMLElement): void;

    $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;
}

export var DragOrder: DragOrder;

interface EditAbility {
    edit(id: any): void;

    editCancel(): void;

    editNext(): void;

    editStop(): void;

    focusEditor(id: any): void;

    getEditState(): any;

    getEditor(id?: string): any;

    getEditorValue(): string;

    validateEditor(id?: string | number): boolean;
}

export var EditAbility: EditAbility;

interface EventSystem {
    attachEvent(type: string, functor: WebixCallback, id?: string): string | number;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    detachEvent(id: string): void;

    hasEvent(name: string): boolean;

    mapEvent(map: any): void;

    unblockEvent(): void;
}

export var EventSystem: EventSystem;

interface FlexLayout {
    $getSize: any[];

    render(): void;
}

export var FlexLayout: FlexLayout;

interface Group {
    group(config: any, target?: string | number): void;

    ungroup(mode: boolean): void;
}

export var Group: Group;

interface GroupMethods {
    any(property: string, data: any): void;

    count(property: string, data: any): void;

    max(property: string, data: any): void;

    min(property: string, data: any): void;

    string(property: string, data: any): void;

    sum(property: string, data: any): void;
}

export var GroupMethods: GroupMethods;

interface GroupStore {
    group(config: any, target?: string): void;

    ungroup(): void;
}

export var GroupStore: GroupStore;

interface HTMLOptions {
    addOption(id: string | number, value: any, show?: boolean, index?: number): void;

    disableOption(id: string | number): void;

    enableOption(id: string | number): void;

    getOption(id: string | number): any;

    hideOption(id: string | number): void;

    optionIndex(ID: string | number): number;

    removeOption(id: string | number): void;

    showOption(id: string | number): void;
}

export var HTMLOptions: HTMLOptions;

interface HtmlMap {
    addPoly(id: string | number, points: any[], userdata?: string): void;

    addRect(id: string | number, points: any[], userdata?: string): void;

    addSector(id: string | number, aplha0: number, aplha1: number, x: number, y: number, R: number, ky: number, userdata?: string): void;

    hide(html: HTMLElement, userdata: string, mode: boolean): void;

    render(html: HTMLElement): void;
}

export var HtmlMap: HtmlMap;

interface IdSpace {
    $$: any;

    innerId(id: number | string): number | string;

    ui(view: any): webix.ui.baseview;
}

export var IdSpace: IdSpace;

interface KanbanView {
    $dragPos: WebixCallback;
    $dropHTML: WebixCallback;
    $skin: WebixCallback;
    on_context: { [key: string]: any; };

    eachOtherList(code: WebixCallback): void;

    getKanban(): any;

    move(sid: string, tindex: number, tobj?: any, details?: any): string;

    $dragCreate(source: HTMLElement, event: Event): HTMLElement;
}

export var KanbanView: KanbanView;

interface KeysNavigation {
    moveSelection(direction: string): void;
}

export var KeysNavigation: KeysNavigation;

interface MapCollection {
}

export var MapCollection: MapCollection;

interface Modality {
}

export var Modality: Modality;

interface MouseEvents {
    on_click: WebixCallback;
    on_context: { [key: string]: any; };
    on_dblclick: WebixCallback;
    on_mouse_move: WebixCallback;
}

export var MouseEvents: MouseEvents;

interface Movable {
}

export var Movable: Movable;

interface NavigationButtons {
}

export var NavigationButtons: NavigationButtons;

interface Number {
    format(value: number, config: any): string;

    getConfig(format: string): any;

    numToStr(config: any): WebixCallback;

    parse(value: string, config: any): number;
}

export var Number: Number;

interface OverlayBox {
    hideOverlay(): void;

    showOverlay(): void;
}

export var OverlayBox: OverlayBox;

interface PagingAbility {
    getPage(): number;

    getPager(): any;

    setPage(page: number): void;
}

export var PagingAbility: PagingAbility;

interface ProgressBar {
    hideProgress(): void;

    showProgress(config?: any): void;
}

export var ProgressBar: ProgressBar;

interface RecordBind {
}

export var RecordBind: RecordBind;

interface RenderStack {
    type: { [key: string]: any; };
    types: { [key: string]: any; };

    customize(obj: any): void;

    getItemNode(id: string | number): HTMLElement;

    locate(e: Event): string | number;

    render(id: string | number, data: any, type: string): void;

    showItem(id: string | number): void;
}

export var RenderStack: RenderStack;

interface ResizeArea {
}

export var ResizeArea: ResizeArea;

interface Scrollable {
    getScrollState(): any;

    scrollTo(x: number, y: number): void;
}

export var Scrollable: Scrollable;

interface SelectionModel {
    getSelectedId(as_array: boolean): string | any[];

    getSelectedItem(as_array: boolean): any;

    isSelected(id: string | number): boolean;

    select(id: string | any[], preserve: boolean): void;

    selectAll(from?: string, to?: string): void;

    unselect(id?: string): void;

    unselectAll(): void;
}

export var SelectionModel: SelectionModel;

interface Settings {
    config: { [key: string]: any; };
    name: string;

    define(property: string, value: any): void;
}

export var Settings: Settings;

interface SingleRender {
    type: { [key: string]: any; };

    customize(obj: any): void;

    render(id: string | number, data: any, type: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;
}

export var SingleRender: SingleRender;

interface Sparklines {
    paddingX: number;
    paddingY: number;
    radius: number;

    template(item: any, common: string, data: any[], column: any, index: number): string;
}

export var Sparklines: Sparklines;

interface TablePaste {
}

export var TablePaste: TablePaste;

interface TooltipControl {
    delay: number;

    addTooltip(target: string | HTMLElement, config: any): void;

    getMaster(target: HTMLElement): any;

    getTooltip(): webix.ui.baseview;

    removeTooltip(target: string | HTMLElement): void;

    $tooltipIn(target: HTMLElement, event: Event): void;

    $tooltipMove(target: HTMLElement, event: Event, text: string): void;

    $tooltipOut(previousTarget: HTMLElement, target: HTMLElement, event: Event): void;
}

export var TooltipControl: TooltipControl;

interface Touch {
    config: any;

    disable(): void;

    enable(): void;

    limit(mode: boolean): void;

    scrollTo(node: HTMLElement, x: number, y: number, speed: string): void;
}

export var Touch: Touch;

interface TreeAPI {
    close(id: string | number): void;

    closeAll(): void;

    getOpenItems(): any[];

    getState(): any;

    isBranchOpen(id: string | number): boolean;

    open(id: string | number, show?: boolean): void;

    openAll(): void;

    setState(state: any): void;
}

export var TreeAPI: TreeAPI;

interface TreeClick {
    webix_tree_checkbox(obj: any, common: { [key: string]: any; }): string;

    webix_tree_close(obj: any, common: { [key: string]: any; }): string;

    webix_tree_open(obj: any, common: { [key: string]: any; }): string;
}

export var TreeClick: TreeClick;

interface TreeCollection {
    config: TreeCollectionConfig;
    data: DataStore;
    name: string;
    waitData: Promise<any>;

    add(obj: any, index?: number, parentId?: string): string;

    addBind(source: any, rule: string, format: string): void;

    attachEvent(type: TreeCollectionEventName, functor: WebixCallback, id?: string): string | number;

    bind(target: any, rule?: WebixCallback, format?: string): void;

    blockEvent(): void;

    callEvent(name: string, params: any[]): boolean;

    clearAll(soft?: boolean): void;

    clearValidation(): void;

    copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

    count(): number;

    define(property: string, value: any): void;

    destructor(): void;

    detachEvent(id: string): void;

    exists(id: number | string): boolean;

    filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

    find(criterion: WebixCallback, first?: boolean): any;

    getBindData(key: string | number, update: boolean): void;

    getBranchIndex(id: string | number, parent?: string | number): number;

    getCursor(): number;

    getFirstChildId(id: string | number): string;

    getFirstId(): number | string;

    getIdByIndex(index: number | string): string | number;

    getIndexById(id: number | string): number;

    getItem(id: number | string): any;

    getLastId(): number | string;

    getNextId(id: number | string, step: number): string | number;

    getNextSiblingId(id: string | number): string | number;

    getParentId(id: string | number): string | number;

    getPrevId(id: number | string, step: number): string | number;

    getPrevSiblingId(id: string | number): string | number;

    hasEvent(name: string): boolean;

    isBranch(id: string | number): boolean;

    isVisible(): boolean;

    load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

    loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

    loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

    mapEvent(map: any): void;

    move(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): string | number;

    moveBottom(id: string | number): void;

    moveTop(id: string | number): void;

    parse(data: any, type: string): void;

    refresh(id?: number | string): void;

    refreshCursor(): void;

    remove(id: string | number | any[]): void;

    removeBind(source: any): void;

    saveBatch(handler: WebixCallback): void;

    serialize(all?: boolean): any[];

    setBindData(data: any, key: string | number): void;

    setCursor(cursor: string | number): void;

    sort(by: string, dir?: string, as?: string): void;

    sync(source: any, filter: WebixCallback, silent: boolean): void;

    unbind(): void;

    unblockEvent(): void;

    updateItem(id: number | string, data: any): void;

    validate(id?: string): boolean;

    waitSave(handler: WebixCallback): Promise<any>;
}

interface TreeCollectionConfig {
    view?: string;
    data?: string | any[];
    datathrottle?: number;
    datatype?: string;
    defaultData?: any;
    externalData?: WebixCallback;
    filterMode?: any;
    id?: string | number;
    map?: any;
    on?: EventHash;
    ready?: WebixCallback;
    removeMissed?: boolean;
    rules?: any;
    save?: any;
    scheme?: any;
    url?: any;
}

type TreeCollectionEventName =
    'onAfterAdd'
    | 'onAfterCursorChange'
    | 'onAfterDelete'
    | 'onAfterLoad'
    | 'onAfterSort'
    | 'onBeforeAdd'
    | 'onBeforeCursorChange'
    | 'onBeforeDelete'
    | 'onBeforeLoad'
    | 'onBeforeSort'
    | 'onBindRequest'
    | 'onBindUpdate'
    | 'onDataRequest'
    | 'onDataUpdate'
    | 'onDestruct'
    | 'onLoadError'
    | 'onValidationError'
    | 'onValidationSuccess';

interface TreeCollectionFactory {
    new(config?: TreeCollectionConfig): TreeCollection;
}

export var TreeCollection: TreeCollectionFactory;

interface TreeDataLoader {
    loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;
}

export var TreeDataLoader: TreeDataLoader;

interface TreeDataMove {
    $dropAllow: WebixCallback;

    copy(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): number;

    move(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): string | number;
}

export var TreeDataMove: TreeDataMove;

interface TreeRenderStack {
    getItemNode(id: string | number): HTMLElement;

    render(id: string | number, data: any, type: string): void;
}

export var TreeRenderStack: TreeRenderStack;

interface TreeStateCheckbox {
    checkAll(id?: string | number): void;

    checkItem(id: string): void;

    getChecked(): any[];

    isChecked(id: string | number): boolean;

    uncheckAll(id?: string | number): void;

    uncheckItem(id: string): void;
}

export var TreeStateCheckbox: TreeStateCheckbox;

interface TreeStore {
    name: string;

    add(obj: any, index?: number, parentId?: string): string;

    changeId(old: string | number, newid: string | number): void;

    clearAll(soft?: boolean): void;

    count(): number;

    each(code: WebixCallback, master: any, all: boolean, pid: string): void;

    eachChild(pid: string, code: WebixCallback, master?: any, all?: boolean): void;

    eachLeaf(pid: string, code: WebixCallback): void;

    eachOpen(code: WebixCallback, master?: any, pid?: string): void;

    eachSubItem(pid: string, code: WebixCallback): void;

    getBranch(id: string): any[];

    getBranchIndex(id: string | number, parent?: string | number): number;

    getFirstChildId(id: string | number): string;

    getNextSiblingId(id: string | number): string | number;

    getParentId(id: string | number): string | number;

    getPrevSiblingId(id: string | number): string | number;

    getTopRange(): any[];

    isBranch(id: string | number): boolean;

    provideApi(target: any, eventable: boolean): void;

    remove(id: string | number | any[]): void;

    serialize(all?: boolean): any[];
}

export var TreeStore: TreeStore;

interface TreeTablePaste {
    insert(data: any[]): void;
}

export var TreeTablePaste: TreeTablePaste;

interface TreeType {
    checkbox(obj: any, common: any): string;

    folder(obj: any, common: any): string;

    icon(obj: any, common: any): string;

    space(obj: any, common: any): string;
}

export var TreeType: TreeType;

interface UIManager {
    addHotKey(key: string, handler: WebixCallback, obj?: any): void;

    applyChanges(): void;

    canFocus(id: string | number): boolean;

    destructor(): void;

    getFocus(): webix.ui.baseview;

    getNext(view: any): any;

    getPrev(view: any): any;

    getState(id: string, children: boolean): any;

    getTop(id: string | number): any;

    hasFocus(id: string | number): boolean;

    removeHotKey(key: string, handler?: WebixCallback, obj?: any): void;

    setFocus(id: string | number): void;

    setState(state: any): void;
}

export var UIManager: UIManager;

interface Undo {
    ignoreUndo(functor: WebixCallback): void;

    removeUndo(id: string): void;

    undo(id: string): void;
}

export var Undo: Undo;

interface UploadDriver {
    html5: any;
}

export var UploadDriver: UploadDriver;

interface VRenderStack {
    getItemNode(id: string | number): HTMLElement;

    render(id: string | number, data: any, type: string): void;

    showItem(id: string | number): void;

    $setSize(x: number, y: number): boolean;
}

export var VRenderStack: VRenderStack;

interface ValidateCollection {
    clearValidation(): void;

    validate(id?: string): boolean;
}

export var ValidateCollection: ValidateCollection;

interface ValidateData {
    clearValidation(): void;

    validate(mode?: any): boolean;
}

export var ValidateData: ValidateData;

interface ValueBind {
}

export var ValueBind: ValueBind;

interface Values {
    clear(): void;

    focus(item: string): void;

    getCleanValues(): any;

    getDirtyValues(): any;

    getValues(details?: any): any;

    isDirty(): boolean;

    markInvalid(name: string, state?: boolean | string): void;

    setDirty(mark?: boolean): void;

    setValues(values: any, update?: boolean): void;
}

export var Values: Values;

interface VirtualRenderStack {
    getItemNode(id: string | number): HTMLElement;

    render(id: string | number, data: any, type: string): void;

    showItem(id: string | number): void;
}

export var VirtualRenderStack: VirtualRenderStack;


export namespace ui {

    interface WebixFilter {
        getValue(node: HTMLElement): any;

        setValue(node: HTMLElement, value: any): any;

        refresh(master: webix.ui.baseview, node: HTMLElement, value: any): void;

        render(master: webix.ui.baseview, config: { [name: string]: any }): string;
    }

    namespace datafilter {
        class textFilter implements WebixFilter {
            getValue(node: HTMLElement): any;

            setValue(node: HTMLElement, value: any): any;

            refresh(master: webix.ui.baseview, node: HTMLElement, value: any): void;

            render(master: webix.ui.baseview, config: { [name: string]: any }): string;

            getInputNode(node: HTMLElement): HTMLElement;
        }

        class selectFilter extends textFilter {
        }

        class serverFilter extends textFilter {
        }

        class serverSelectFilter extends textFilter {
        }

        class numberFilter extends textFilter {
        }

        class dateFilter extends textFilter {
        }

        class multiSelectFilter extends textFilter {
        }

        class serverMultiSelectFilter extends textFilter {
        }

        class multiComboFilter extends textFilter {
        }

        class datepickerFilter extends textFilter {
        }

        class dateRangeFilter extends textFilter {
        }

        class summColumn extends textFilter {
        }

        class masterCheckbox extends textFilter {
        }

        class columnGroup extends textFilter {
        }
    }

    function delay(config: any): void;

    function fullScreen(): void;

    function hasMethod(name: string, method_name: string): boolean;

    function resize(): void;

    function zIndex(): number;

    var scrollSize: number;
    var zIndexBase: number;

    interface baselayoutConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        responsive?: string;
        rows?: any[];
        visibleBatch?: string;
        width?: number;
    }

    type baselayoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class baselayout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: baselayoutConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: baselayoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        serialize(serializer?: WebixCallback): any;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface baseviewConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        width?: number;
    }

    type baseviewEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export interface baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: baseviewConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface protoConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        click?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        template?: string | WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
    }

    type protoEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class proto implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: protoConfig;
        data: DataStore;
        name: string;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: protoEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface resizeareaConfig {
        view?: string;
        border?: boolean;
        container?: string | HTMLElement;
        cursor?: string;
        dir?: string;
        eventPos?: number;
        height?: number;
        id?: string | number;
        on?: EventHash;
        start?: number;
        width?: number;
    }

    type resizeareaEventName = 'onResize' | 'onResizeEnd';

    export interface resizearea {
        config: resizeareaConfig;
        name: string;

        attachEvent(type: resizeareaEventName, functor: WebixCallback, id?: string): string | number;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        detachEvent(id: string): void;

        hasEvent(name: string): boolean;

        mapEvent(map: any): void;

        unblockEvent(): void;
    }

    interface viewConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        width?: number;
    }

    type viewEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class view implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: viewConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface vscrollConfig {
        view?: string;
        container?: string | HTMLElement;
        id?: string | number;
        on?: EventHash;
        scroll?: string;
        scrollHeight?: number;
        scrollPos?: number;
        scrollSize?: number;
        scrollStep?: number;
        scrollVisible?: boolean;
        scrollWidth?: number;
        zoom?: number;
    }

    type vscrollEventName = 'onScroll';

    export interface vscroll {
        config: vscrollConfig;
        name: string;

        activeArea(node: HTMLElement): void;

        attachEvent(type: vscrollEventName, functor: WebixCallback, id?: string): string | number;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        detachEvent(id: string): void;

        getScroll(): number;

        getSize(): number;

        hasEvent(name: string): boolean;

        mapEvent(map: any): void;

        reset(): void;

        scrollTo(pos: number): void;

        sizeTo(size: number): void;

        unblockEvent(): void;
    }

    interface abslayoutConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cells?: any[];
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        responsive?: string;
        rows?: any[];
        visibleBatch?: string;
        width?: number;
    }

    type abslayoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class abslayout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: abslayoutConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: abslayoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface accordionConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        collapsed?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multi?: boolean | string;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        panelClass?: string;
        responsive?: string;
        rows?: any[];
        type?: string;
        visibleBatch?: string;
        width?: number;
    }

    type accordionEventName = 'onAfterCollapse' | 'onAfterExpand' | 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class accordion implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: accordionConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: accordionEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        serialize(serializer?: WebixCallback): any;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface accordionitemConfig {
        view?: string;
        animate?: any;
        body?: any;
        borderless?: boolean;
        collapsed?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        header?: boolean | string | WebixCallback;
        headerAlt?: string | WebixCallback;
        headerAltHeight?: number;
        headerHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        width?: number;
    }

    type accordionitemEventName =
        'onAfterContextMenu'
        | 'onAfterScroll'
        | 'onBeforeContextMenu'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class accordionitem implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: accordionitemConfig;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;

        adjust(): void;

        attachEvent(type: accordionitemEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        collapse(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        expand(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface alignConfig {
        view?: string;
        align?: string;
        animate?: any;
        body?: any;
        borderless?: boolean;
        bottom?: number;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        right?: number;
        top?: number;
        width?: number;
    }

    type alignEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class align implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: alignConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getBody(): webix.ui.baseview;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface barcodeConfig {
        view?: string;
        animate?: any;
        ariaLabel?: string;
        borderless?: boolean;
        color?: string;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        paddingX?: number;
        paddingY?: number;
        textHeight?: number;
        type?: string;
        value?: string;
        width?: number;
    }

    type barcodeEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class barcode implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: barcodeConfig;
        name: string;
        types: any[];

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        render(): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface bulletConfig {
        view?: string;
        animate?: any;
        bands?: any[];
        barWidth?: number;
        borderless?: boolean;
        color?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        flowTime?: number;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        label?: string;
        labelHeight?: number;
        labelWidth?: number;
        layout?: string;
        marker?: number | boolean;
        maxHeight?: number;
        maxRange?: number;
        maxWidth?: number;
        minHeight?: number;
        minRange?: number;
        minWidth?: number;
        placeholder?: any;
        scale?: any;
        smoothFlow?: boolean;
        stroke?: number;
        tickSize?: number;
        value?: number;
        width?: number;
    }

    type bulletEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class bullet implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: bulletConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(bullet_value: number): void;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        resize(): void;

        setValue(new_value: number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface buttonConfig {
        view?: string;
        align?: string;
        animate?: any;
        autowidth?: boolean;
        badge?: number | string;
        borderless?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        image?: string;
        inputHeight?: number;
        inputWidth?: number;
        keyPressTimeout?: number;
        label?: string;
        labelPosition?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        placeholder?: string;
        popup?: string;
        tooltip?: any;
        type?: string;
        value?: string | number;
        width?: number;
    }

    type buttonEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class button implements webix.ui.baseview {
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: buttonConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: buttonEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface calendarConfig {
        view?: string;
        animate?: any;
        blockDates?: WebixCallback;
        blockTime?: WebixCallback;
        borderless?: boolean;
        calendarHeader?: string;
        calendarTime?: string;
        calendarWeekHeader?: string;
        cellHeight?: number | string;
        container?: string | HTMLElement;
        css?: any;
        date?: Date | string;
        dayTemplate?: WebixCallback;
        disabled?: boolean;
        events?: WebixCallback;
        gravity?: number;
        headerHeight?: number;
        height?: number;
        hidden?: boolean;
        icons?: any;
        id?: string | number;
        keyPressTimeout?: number;
        maxDate?: Date | string;
        maxHeight?: number;
        maxTime?: string;
        maxWidth?: number;
        minDate?: Date | string;
        minHeight?: number;
        minTime?: string;
        minWidth?: number;
        minuteStep?: number;
        monthHeader?: boolean;
        monthSelect?: boolean;
        mouseEventDelay?: number;
        multiselect?: boolean | string;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        select?: boolean;
        skipEmptyWeeks?: boolean;
        timeIcon?: string;
        timepicker?: boolean;
        timepickerHeight?: number;
        type?: string;
        weekHeader?: boolean;
        weekNumber?: boolean;
        width?: number;
    }

    type calendarEventName =
        'onAfterContextMenu'
        | 'onAfterDateSelect'
        | 'onAfterMonthChange'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterZoom'
        | 'onBeforeContextMenu'
        | 'onBeforeDateSelect'
        | 'onBeforeMonthChange'
        | 'onBeforeRender'
        | 'onBeforeZoom'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDateClear'
        | 'onDateSelect'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTodaySet'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class calendar implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: calendarConfig;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;

        adjust(): void;

        attachEvent(type: calendarEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getSelectedDate(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): any;

        getVisibleDate(): any;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        moveSelection(direction: string): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        selectDate(date: string | Date, mode: boolean): void;

        setValue(date: string | Date): void;

        show(force?: boolean, animation?: boolean): void;

        showCalendar(date: string | Date): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface carouselConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        navigation?: any;
        on?: EventHash;
        rows?: any[];
        scrollSpeed?: string;
        type?: string;
        width?: number;
    }

    type carouselEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class carousel implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: carouselConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        adjustScroll(): void;

        attachEvent(type: carouselEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getActiveId(): string;

        getActiveIndex(): number;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getLayout(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        removeView(id: any): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        setActive(id: string): void;

        setActiveIndex(index: number): void;

        show(force?: boolean, animation?: boolean): void;

        showNext(): void;

        showPrev(): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface chartConfig {
        view?: string;
        alpha?: number;
        animate?: any;
        animateDuration?: number;
        ariaLabel?: string;
        barWidth?: number;
        border?: boolean;
        borderColor?: string;
        borderWidth?: number;
        borderless?: boolean;
        cant?: number;
        cellWidth?: number;
        color?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disableLines?: boolean;
        disabled?: boolean;
        dynamic?: boolean;
        eventRadius?: number;
        fill?: string;
        fixOverflow?: boolean;
        gradient?: boolean | string | WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        label?: string | WebixCallback;
        labelOffset?: number;
        legend?: any;
        line?: any;
        lineColor?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        offset?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        origin?: number | string;
        padding?: any;
        pieHeight?: number;
        pieInnerText?: string | WebixCallback;
        preset?: string;
        radius?: number;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scale?: string;
        scheme?: any;
        series?: any;
        shadow?: boolean;
        tooltip?: any;
        type?: string;
        url?: any;
        value?: string | WebixTemplate;
        width?: number;
        x?: number;
        xAxis?: any;
        xValue?: string;
        y?: number;
        yAxis?: any;
        yValue?: string;
    }

    type chartEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLegendClick'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class chart implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        colormap: { [key: string]: any; };
        config: chartConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        presets: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addSeries(obj: any): void;

        adjust(): void;

        attachEvent(type: chartEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCanvas(): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasEvent(name: string): boolean;

        hide(): void;

        hideSeries(index: number): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeAllSeries(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        serialize(all?: boolean): any[];

        show(force?: boolean, animation?: boolean): void;

        showSeries(index: number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface checkboxConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        checkValue?: string;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        customCheckbox?: boolean;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelRight?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        popup?: string;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        uncheckValue?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type checkboxEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class checkbox implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: checkboxConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: checkboxEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        toggle(): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface checksuggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        button?: boolean;
        buttonText?: string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: webix.ui.baseview;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        selectAll?: boolean;
        separator?: string;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        value?: string | number;
        width?: number;
        zIndex?: number;
    }

    type checksuggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class checksuggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: checksuggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: checksuggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getButton(): webix.ui.baseview;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface colorboardConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: number;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxLightness?: number;
        maxWidth?: number;
        minHeight?: number;
        minLightness?: number;
        minWidth?: number;
        navigation?: boolean;
        on?: EventHash;
        palette?: any[];
        rows?: number;
        template?: WebixCallback;
        value?: string;
        width?: number;
    }

    type colorboardEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSelect'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class colorboard implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: colorboardConfig;
        name: string;

        adjust(): void;

        attachEvent(type: colorboardEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        moveSelection(direction: string): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setValue(value: string): string;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;
    }

    interface colorpickerConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        autowidth?: boolean;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        editable?: boolean;
        format?: string;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icons?: boolean;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        placeholder?: string;
        point?: boolean;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        stringResult?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type colorpickerEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class colorpicker implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: colorpickerConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: colorpickerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface commentsConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        currentUser?: number;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        listItem?: any;
        maxHeight?: number;
        maxWidth?: number;
        mentions?: boolean;
        minHeight?: number;
        minWidth?: number;
        mode?: string;
        moreButton?: string | WebixCallback;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        readonly?: boolean;
        scheme?: any;
        sendAction?: string;
        type?: string;
        url?: any;
        users?: any[] | string | DataCollection;
        width?: number;
    }

    type commentsEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterEditStart'
        | 'onAfterLoad'
        | 'onBeforeAdd'
        | 'onBeforeDelete'
        | 'onBeforeEditStart'
        | 'onBeforeLoad'
        | 'onBeforeMenuAction'
        | 'onBindRequest'
        | 'onDestruct'
        | 'onLoadError'
        | 'onUserMentioned'
        | 'onViewShow';

    export class comments implements webix.ui.baseview {
        $height: number;
        $onLoad: WebixCallback;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: commentsConfig;
        name: string;

        adjust(): void;

        attachEvent(type: commentsEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        edit(id: number | string): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getMenu(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getUsers(): DataCollection;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        setCurrentUser(id: number | string): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $exportView(): webix.ui.baseview;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface comboConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        editable?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        options?: any;
        placeholder?: string;
        popup?: string;
        popupWidth?: number;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type comboEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class combo implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: comboConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: comboEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getList(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface contextConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        toFront?: boolean;
        top?: number;
        width?: number;
        zIndex?: number;
    }

    type contextEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class context implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: contextConfig;
        name: string;

        adjust(): void;

        attachEvent(type: contextEventName, functor: WebixCallback, id?: string): string | number;

        attachTo(view: any): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getContext(): any;

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setContext(context: any): void;

        setPosition(x: number, y: number): void;

        show(node?: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface contextmenuConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        autoheight?: boolean;
        autowidth?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        mouseEventDelay?: number;
        move?: boolean;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        openAction?: string;
        padding?: any;
        pager?: any;
        point?: boolean;
        position?: string | WebixCallback;
        ready?: WebixCallback;
        relative?: string;
        removeMissed?: boolean;
        resize?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        subMenuPos?: string;
        submenuConfig?: any;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        toFront?: boolean;
        tooltip?: any;
        top?: number;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
        zIndex?: number;
    }

    type contextmenuEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeShow'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMenuItemClick'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class contextmenu implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: contextmenuConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: contextmenuEventName, functor: WebixCallback, id?: string): string | number;

        attachTo(view: any): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBody(): any;

        getChildViews(): any[];

        getContext(): any;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getMenu(id: string | number): any;

        getMenuItem(id: string | number): any;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getSubMenu(id: string | number): any;

        getTopMenu(): any;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideItem(id: string | number): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        resizeChildren(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setContext(context: any): void;

        setPage(page: number): void;

        setPosition(x: number, y: number): void;

        show(node?: HTMLElement, position?: any, point?: string): void;

        showItem(id: string | number): void;

        sizeToContent(): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        show(force: boolean, animation: boolean): void;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface counterConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        max?: number;
        maxHeight?: number;
        maxWidth?: number;
        min?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        popup?: string;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        step?: number;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type counterEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class counter implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: counterConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: counterEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        next(step?: number): void;

        prev(step?: number): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: number): void;

        shift(value?: number): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface dashboardConfig {
        view?: string;
        animate?: any;
        autoplace?: boolean;
        borderless?: boolean;
        cellHeight?: number;
        cellWidth?: number;
        cells?: any[];
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        factory?: WebixCallback;
        gravity?: number;
        gridColumns?: number;
        gridRows?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: number;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        visibleBatch?: string;
        width?: number;
    }

    type dashboardEventName =
        'onAfterDrop'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBindRequest'
        | 'onChange'
        | 'onDestruct'
        | 'onDragOut'
        | 'onViewShow';

    export class dashboard implements webix.ui.baseview {
        $dragPos: WebixCallback;
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: dashboardConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: dashboardEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        moveView(id: string | number, view: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        serialize(serializer?: WebixCallback): any[];

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $dragCreate(source: HTMLElement, event: Event): HTMLElement;

        $dragDestroy(target: HTMLElement, html: HTMLElement, e: Event): void;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface datalayoutConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        ready?: WebixCallback;
        removeMissed?: boolean;
        responsive?: string;
        rows?: any[];
        save?: any;
        scheme?: any;
        type?: string;
        url?: any;
        visibleBatch?: string;
        width?: number;
    }

    type datalayoutEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onLoadError'
        | 'onViewShow';

    export class datalayout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: datalayoutConfig;
        data: DataStore;
        name: string;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: datalayoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        getValue(): any[];

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeView(id: any): void;

        render(id: string | number, obj: any, mode: string): void;

        resize(): void;

        resizeChildren(): void;

        setValue(values: any[]): void;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface datasuggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: webix.ui.baseview;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        width?: number;
        zIndex?: number;
    }

    type datasuggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class datasuggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: datasuggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: datasuggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(node: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface datatableConfig {
        view?: string;
        animate?: any;
        areaselect?: boolean;
        autoConfig?: boolean;
        autoheight?: boolean;
        autowidth?: boolean;
        blockselect?: boolean | string;
        borderless?: boolean;
        checkboxRefresh?: boolean;
        clipboard?: boolean | string;
        columnWidth?: number;
        columns?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datafetch?: number;
        datathrottle?: number;
        datatype?: string;
        delimiter?: any;
        disabled?: boolean;
        drag?: boolean | string;
        dragColumn?: boolean | string;
        dragscroll?: boolean | string;
        editMath?: boolean;
        editValue?: string;
        editable?: boolean;
        editaction?: string;
        externalData?: WebixCallback;
        filterMode?: any;
        fixedRowHeight?: boolean;
        footer?: boolean;
        form?: string;
        gravity?: number;
        header?: boolean;
        headerRowHeight?: number;
        headermenu?: any;
        height?: number;
        hidden?: boolean;
        hover?: string;
        id?: string | number;
        keyPressTimeout?: number;
        leftSplit?: number;
        liveValidation?: boolean;
        loadahead?: number;
        map?: any;
        math?: boolean;
        maxColumnWidth?: number;
        maxHeight?: number;
        maxRowHeight?: number;
        maxWidth?: number;
        minColumnWidth?: number;
        minHeight?: number;
        minRowHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        prerender?: boolean;
        ready?: WebixCallback;
        removeMissed?: boolean;
        resizeColumn?: any;
        resizeRow?: any;
        rightSplit?: number;
        rowHeight?: number;
        rowLineHeight?: number;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollAlignY?: boolean;
        scrollX?: boolean;
        scrollY?: boolean;
        select?: boolean | string;
        spans?: any[];
        subRowHeight?: string;
        subrow?: string;
        subview?: webix.ui.baseview | WebixCallback;
        templateCopy?: WebixCallback;
        tooltip?: any;
        topSplit?: number;
        type?: any;
        undo?: boolean;
        url?: any;
        width?: number;
        yCount?: number;
    }

    type datatableEventName =
        'onAfterAdd'
        | 'onAfterAreaAdd'
        | 'onAfterAreaRemove'
        | 'onAfterBlockSelect'
        | 'onAfterColumnDrop'
        | 'onAfterColumnDropOrder'
        | 'onAfterColumnHide'
        | 'onAfterColumnShow'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterEditStart'
        | 'onAfterEditStop'
        | 'onAfterFilter'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onAfterUnSelect'
        | 'onAreaDrag'
        | 'onBeforeAdd'
        | 'onBeforeAreaAdd'
        | 'onBeforeAreaRemove'
        | 'onBeforeBlockSelect'
        | 'onBeforeColumnDrag'
        | 'onBeforeColumnDrop'
        | 'onBeforeColumnDropOrder'
        | 'onBeforeColumnHide'
        | 'onBeforeColumnShow'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeEditStart'
        | 'onBeforeEditStop'
        | 'onBeforeFilter'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBeforeUnSelect'
        | 'onBindRequest'
        | 'onBlur'
        | 'onCheck'
        | 'onCollectValues'
        | 'onColumnGroupCollapse'
        | 'onColumnResize'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEditorChange'
        | 'onEnter'
        | 'onFocus'
        | 'onHeaderClick'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLiveEdit'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onResize'
        | 'onRowResize'
        | 'onScrollX'
        | 'onScrollY'
        | 'onSelectChange'
        | 'onStructureLoad'
        | 'onStructureUpdate'
        | 'onSubViewClose'
        | 'onSubViewCreate'
        | 'onSubViewOpen'
        | 'onSubViewRender'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class datatable implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $touch: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: datatableConfig;
        data: DataStore;
        headerContent: any;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCellCss(id: string, name: string, css: string): void;

        addCss(id: string | number, css: string, silent?: boolean): void;

        addRowCss(id: string, css: string): void;

        addSelectArea(start: any, end: any, preserve: boolean, area_name?: string, css?: string, handle?: boolean): void;

        addSpan(id: any, column: string, width: number, height: number, value?: string, css?: string): void;

        adjust(): void;

        adjustColumn(id: string | number, mode?: string): void;

        adjustRowHeight(columnId?: string, silent?: boolean): void;

        attachEvent(type: datatableEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearSelection(): void;

        clearValidation(): void;

        closeSub(id: string | number): void;

        collectValues(id: string | number, mode: any): any[];

        columnId(index: number): string | number;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachColumn(handler: WebixCallback, all?: boolean): void;

        eachRow(handler: WebixCallback, all?: boolean): void;

        edit(id: any): void;

        editCancel(): void;

        editCell(row: string | number, col: string | number, preserve?: boolean, show?: boolean): void;

        editColumn(id: string): void;

        editNext(): void;

        editRow(id: string): void;

        editStop(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        filterByAll(): void;

        find(criterion: WebixCallback, first?: boolean): any;

        focusEditor(id: any): void;

        freezeRow(id: number | string, state: boolean): void;

        getAllSelectAreas(): any;

        getChildViews(): any[];

        getColumnConfig(id: string): any;

        getColumnIndex(id: string | number): number;

        getCss(rowId: string | number, columnId: string | number): string;

        getEditState(): any;

        getEditor(row?: any, column?: string | number): any;

        getEditorValue(): string;

        getFilter(columnID: string | number): any;

        getFirstId(): number | string;

        getFooterNode(columnId: string, rowIndex?: number): HTMLElement;

        getFormView(): webix.ui.baseview;

        getHeaderContent(id: string | number): { [key: string]: any; };

        getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectArea(area_name: string): any;

        getSelectedId(asArray: boolean, asString: boolean): any;

        getSelectedItem(as_array?: boolean): any;

        getSpan(): any[];

        getSpanNode(id: any): HTMLElement;

        getState(): any;

        getSubView(id: string | number): any;

        getText(rowid: string | number, colid: string | number): string;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideColumn(id: string | number, options?: any, silent?: boolean, mode?: boolean): void;

        hideOverlay(): void;

        ignoreUndo(functor: WebixCallback): void;

        isColumnVisible(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): void;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(node: HTMLElement | Event): any;

        mapCells(startrow: number, startcol: string, numrows: number, numcols: number, callback: WebixCallback): void;

        mapEvent(map: any): void;

        mapSelection(callback: WebixCallback): void;

        markSorting(column_id: string, direction: string): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveColumn(id: string, index: number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        openSub(id: string | number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        refreshColumns(config?: any[], reset?: boolean): void;

        refreshFilter(id: string | number): void;

        refreshSelectArea(): void;

        registerFilter(object: any, config: any, controller: any): void;

        remove(id: string | number | any[]): void;

        removeCellCss(id: string, name: string, css_name: string): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        removeRowCss(id: string, css_name: string): void;

        removeSelectArea(area_name: string): void;

        removeSpan(id: string | number, column: string): void;

        removeUndo(id: string): void;

        render(id: string | number, data: any, operation: string): void;

        resize(): void;

        resizeSubView(id: string | number): void;

        scrollTo(x: number, y: number): void;

        select(row_id: string | number, preserve: boolean): void;

        selectAll(): void;

        selectRange(row_id: string | number, end_row_id: string | number, preserve?: boolean): void;

        serialize(all?: boolean): any[];

        setColumnWidth(id: string | number, width: number): void;

        setPage(page: number): void;

        setRowHeight(id: string | number, height: number): void;

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showCell(row: string, column: string): void;

        showColumn(id: string | number): void;

        showColumnBatch(batch: string | number, preserve: boolean): void;

        showItem(id: string | number): void;

        showItemByIndex(index: number): void;

        showOverlay(message: string): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        undo(id: string): void;

        ungroup(mode: boolean): void;

        unselect(row_id: string | number): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        validateEditor(id?: string | number): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface dataviewConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datafetch?: number;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        loadahead?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        prerender?: boolean;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        sizeToContent?: boolean;
        template?: string | WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
    }

    type dataviewEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class dataview implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: dataviewConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: dataviewEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getTopParentView(): webix.ui.baseview;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface daterangeConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        button?: boolean;
        calendarCount?: number;
        calendarHeight?: number;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        icons?: any;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        timepicker?: boolean;
        type?: string;
        value?: any;
        width?: number;
    }

    type daterangeEventName =
        'onAfterDateSelect'
        | 'onBeforeDateSelect'
        | 'onBindRequest'
        | 'onChange'
        | 'onDateClear'
        | 'onDestruct'
        | 'onTodaySet'
        | 'onViewShow';

    export class daterange implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: daterangeConfig;
        name: string;

        addToRange(dates: string | Date): void;

        adjust(): void;

        attachEvent(type: daterangeEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): any;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        resize(): void;

        setValue(range: any): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface daterangepickerConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        editable?: boolean;
        format?: string;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        icons?: boolean;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        pattern?: any;
        placeholder?: string;
        point?: boolean;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        stringResult?: boolean;
        suggest?: any;
        timeIcon?: string;
        timepicker?: boolean;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type daterangepickerEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class daterangepicker implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: daterangepickerConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: daterangepickerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface daterangesuggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: webix.ui.baseview;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        width?: number;
        zIndex?: number;
    }

    type daterangesuggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class daterangesuggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: daterangesuggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: daterangesuggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getButton(): webix.ui.baseview;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getRange(): webix.ui.baseview;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface datepickerConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        editable?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        icons?: boolean;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multiselect?: boolean | string;
        name?: string;
        on?: EventHash;
        placeholder?: string;
        point?: boolean;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        separator?: string;
        stringResult?: boolean;
        suggest?: any;
        timeIcon?: string;
        timepicker?: boolean;
        tooltip?: any;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: Date | string;
        width?: number;
    }

    type datepickerEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class datepicker implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: datepickerConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: datepickerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface dbllistConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        buttons?: string | boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        labelBottomLeft?: string;
        labelBottomRight?: string;
        labelLeft?: string;
        labelRight?: string;
        list?: any;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        type?: string;
        url?: any;
        value?: string | any[];
        width?: number;
    }

    type dbllistEventName =
        'onAfterLoad'
        | 'onBeforeLoad'
        | 'onBindRequest'
        | 'onChange'
        | 'onDestruct'
        | 'onLoadError'
        | 'onViewShow';

    export class dbllist implements webix.ui.baseview {
        $$: any;
        $height: number;
        $onLoad: WebixCallback;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: dbllistConfig;
        name: string;

        adjust(): void;

        attachEvent(type: dbllistEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        innerId(id: number | string): number | string;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        select(id: string | any[], mode: boolean): void;

        setValue(ids: string | any[]): void;

        show(force?: boolean, animation?: boolean): void;

        ui(view: any): webix.ui.baseview;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface excelviewerConfig {
        view?: string;
        animate?: any;
        areaselect?: boolean;
        autoConfig?: boolean;
        autoheight?: boolean;
        autowidth?: boolean;
        blockselect?: boolean | string;
        borderless?: boolean;
        checkboxRefresh?: boolean;
        clipboard?: boolean | string;
        columnWidth?: number;
        columns?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datafetch?: number;
        datathrottle?: number;
        datatype?: string;
        delimiter?: any;
        disabled?: boolean;
        drag?: boolean | string;
        dragColumn?: boolean | string;
        dragscroll?: boolean | string;
        editMath?: boolean;
        editValue?: string;
        editable?: boolean;
        editaction?: string;
        excelHeader?: boolean;
        externalData?: WebixCallback;
        filterMode?: any;
        fixedRowHeight?: boolean;
        footer?: boolean;
        form?: string;
        gravity?: number;
        header?: boolean;
        headerRowHeight?: number;
        headermenu?: any;
        height?: number;
        hidden?: boolean;
        hover?: string;
        id?: string | number;
        keyPressTimeout?: number;
        leftSplit?: number;
        liveValidation?: boolean;
        loadahead?: number;
        map?: any;
        math?: boolean;
        maxColumnWidth?: number;
        maxHeight?: number;
        maxRowHeight?: number;
        maxWidth?: number;
        minColumnWidth?: number;
        minHeight?: number;
        minRowHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        prerender?: boolean;
        ready?: WebixCallback;
        removeMissed?: boolean;
        resizeColumn?: any;
        resizeRow?: any;
        rightSplit?: number;
        rowHeight?: number;
        rowLineHeight?: number;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollAlignY?: boolean;
        scrollX?: boolean;
        scrollY?: boolean;
        select?: boolean | string;
        spans?: any[];
        subRowHeight?: string;
        subrow?: string;
        subview?: webix.ui.baseview | WebixCallback;
        templateCopy?: WebixCallback;
        toolbar?: string;
        tooltip?: any;
        topSplit?: number;
        type?: any;
        undo?: boolean;
        url?: any;
        width?: number;
        yCount?: number;
    }

    type excelviewerEventName =
        'onAfterAdd'
        | 'onAfterAreaAdd'
        | 'onAfterAreaRemove'
        | 'onAfterBlockSelect'
        | 'onAfterColumnDrop'
        | 'onAfterColumnDropOrder'
        | 'onAfterColumnHide'
        | 'onAfterColumnShow'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterEditStart'
        | 'onAfterEditStop'
        | 'onAfterFilter'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onAfterUnSelect'
        | 'onAreaDrag'
        | 'onBeforeAdd'
        | 'onBeforeAreaAdd'
        | 'onBeforeAreaRemove'
        | 'onBeforeBlockSelect'
        | 'onBeforeColumnDrag'
        | 'onBeforeColumnDrop'
        | 'onBeforeColumnDropOrder'
        | 'onBeforeColumnHide'
        | 'onBeforeColumnShow'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeEditStart'
        | 'onBeforeEditStop'
        | 'onBeforeFilter'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBeforeUnSelect'
        | 'onBindRequest'
        | 'onBlur'
        | 'onCheck'
        | 'onCollectValues'
        | 'onColumnResize'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEditorChange'
        | 'onEnter'
        | 'onFocus'
        | 'onHeaderClick'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLiveEdit'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onResize'
        | 'onRowResize'
        | 'onScrollX'
        | 'onScrollY'
        | 'onSelectChange'
        | 'onStructureLoad'
        | 'onStructureUpdate'
        | 'onSubViewClose'
        | 'onSubViewCreate'
        | 'onSubViewOpen'
        | 'onSubViewRender'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class excelviewer implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $touch: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: excelviewerConfig;
        data: DataStore;
        headerContent: any;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCellCss(id: string, name: string, css: string): void;

        addCss(id: string | number, css: string, silent?: boolean): void;

        addRowCss(id: string, css: string): void;

        addSelectArea(start: any, end: any, preserve: boolean, area_name?: string, css?: string, handle?: boolean): void;

        addSpan(id: any, column: string, width: number, height: number, value?: string, css?: string): void;

        adjust(): void;

        adjustColumn(id: string | number, mode?: string): void;

        adjustRowHeight(columnId?: string, silent?: boolean): void;

        attachEvent(type: excelviewerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        closeSub(id: string | number): void;

        collectValues(id: string | number, mode: any): any[];

        columnId(index: number): string | number;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachColumn(handler: WebixCallback, all?: boolean): void;

        eachRow(handler: WebixCallback, all?: boolean): void;

        edit(id: any): void;

        editCancel(): void;

        editCell(row: string | number, col: string | number, preserve?: boolean, show?: boolean): void;

        editColumn(id: string): void;

        editNext(): void;

        editRow(id: string): void;

        editStop(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        filterByAll(): void;

        find(criterion: WebixCallback, first?: boolean): any;

        focusEditor(id: any): void;

        freezeRow(id: number | string, state: boolean): void;

        getAllSelectAreas(): any;

        getChildViews(): any[];

        getColumnConfig(id: string): any;

        getColumnIndex(id: string | number): number;

        getCss(rowId: string | number, columnId: string | number): string;

        getEditState(): any;

        getEditor(id?: string): any;

        getEditorValue(): string;

        getFilter(columnID: string | number): any;

        getFirstId(): number | string;

        getFooterNode(columnId: string, rowIndex?: number): HTMLElement;

        getFormView(): webix.ui.baseview;

        getHeaderContent(id: string | number): { [key: string]: any; };

        getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectArea(area_name: string): any;

        getSelectedId(asArray: boolean, asString: boolean): any;

        getSelectedItem(as_array?: boolean): any;

        getSheets(): any[];

        getSpan(): any[];

        getSpanNode(id: any): HTMLElement;

        getState(): any;

        getSubView(id: string | number): any;

        getText(rowid: string | number, colid: string | number): string;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideColumn(id: string | number, options?: any, silent?: boolean, mode?: boolean): void;

        hideOverlay(): void;

        isColumnVisible(id: string | number): boolean;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(node: HTMLElement | Event): any;

        mapCells(startrow: number, startcol: string, numrows: number, numcols: number, callback: WebixCallback): void;

        mapEvent(map: any): void;

        markSorting(column_id: string, direction: string): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveColumn(id: string, index: number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        openSub(id: string | number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        refreshColumns(config?: any[], reset?: boolean): void;

        refreshFilter(id: string | number): void;

        refreshSelectArea(): void;

        registerFilter(object: any, config: any, controller: any): void;

        remove(id: string | number | any[]): void;

        removeCellCss(id: string, name: string, css_name: string): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        removeRowCss(id: string, css_name: string): void;

        removeSelectArea(area_name: string): void;

        removeSpan(id: string | number, column: string): void;

        render(id: string | number, data: any, operation: string): void;

        resize(): void;

        resizeSubView(id: string | number): void;

        scrollTo(x: number, y: number): void;

        serialize(all?: boolean): any[];

        setColumnWidth(id: string | number, width: number): void;

        setPage(page: number): void;

        setRowHeight(id: string | number, height: number): void;

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showCell(row: string, column: string): void;

        showColumn(id: string | number): void;

        showColumnBatch(batch: string | number, preserve: boolean): void;

        showItem(id: string | number): void;

        showItemByIndex(index: number): void;

        showOverlay(message: string): void;

        showSheet(name: string): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        validateEditor(id?: string | number): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface fieldsetConfig {
        view?: string;
        $cssName?: string;
        animate?: any;
        body?: webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        label?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        paddingX?: number;
        paddingY?: number;
        width?: number;
    }

    type fieldsetEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class fieldset implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: fieldsetConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface filemanagerConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        filterMode?: any;
        gravity?: number;
        handlers?: any;
        height?: number;
        hidden?: boolean;
        icons?: any;
        id?: string | number;
        legacyUploader?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        menuFilter?: WebixCallback;
        minHeight?: number;
        minWidth?: number;
        mode?: string;
        modes?: any[];
        noFileCache?: boolean;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        readonly?: boolean;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scheme?: any;
        structure?: any;
        templateCreate?: WebixCallback;
        templateDate?: WebixCallback;
        templateIcon?: WebixCallback;
        templateName?: WebixCallback;
        templateSize?: WebixCallback;
        templateType?: WebixCallback;
        type?: string;
        uploadProgress?: any;
        url?: any;
        width?: number;
    }

    type filemanagerEventName =
        'onAfterAdd'
        | 'onAfterBack'
        | 'onAfterCreateFolder'
        | 'onAfterDelete'
        | 'onAfterDeleteFile'
        | 'onAfterDrop'
        | 'onAfterDynParse'
        | 'onAfterEditFile'
        | 'onAfterEditStop'
        | 'onAfterFileUpload'
        | 'onAfterHideTree'
        | 'onAfterLevelDown'
        | 'onAfterLevelUp'
        | 'onAfterLoad'
        | 'onAfterMarkCopy'
        | 'onAfterMarkCut'
        | 'onAfterMenu'
        | 'onAfterModeChange'
        | 'onAfterPasteFile'
        | 'onAfterPathClick'
        | 'onAfterRun'
        | 'onAfterSearch'
        | 'onAfterShowTree'
        | 'onAfterSort'
        | 'onAfterUploadDialog'
        | 'onBeforeAdd'
        | 'onBeforeBack'
        | 'onBeforeCreateFolder'
        | 'onBeforeDelete'
        | 'onBeforeDeleteFile'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDynLoad'
        | 'onBeforeDynParse'
        | 'onBeforeEditFile'
        | 'onBeforeEditStop'
        | 'onBeforeFileUpload'
        | 'onBeforeHideTree'
        | 'onBeforeLevelDown'
        | 'onBeforeLevelUp'
        | 'onBeforeLoad'
        | 'onBeforeMarkCopy'
        | 'onBeforeMarkCut'
        | 'onBeforeMenu'
        | 'onBeforeModeChange'
        | 'onBeforePasteFile'
        | 'onBeforeRequest'
        | 'onBeforeRun'
        | 'onBeforeSearch'
        | 'onBeforeSearchRequest'
        | 'onBeforeShowTree'
        | 'onBeforeSort'
        | 'onBeforeUploadDialog'
        | 'onBindRequest'
        | 'onComponentInit'
        | 'onCopyError'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDynLoadError'
        | 'onErrorResponse'
        | 'onFolderSelect'
        | 'onHideSearchResults'
        | 'onHistoryChange'
        | 'onItemRename'
        | 'onItemSelect'
        | 'onLoadError'
        | 'onMoveError'
        | 'onPathComplete'
        | 'onPathLevel'
        | 'onShowSearchResults'
        | 'onSuccessResponse'
        | 'onViewInit'
        | 'onViewShow';

    export class filemanager implements webix.ui.baseview {
        $$: any;
        $dropAllow: WebixCallback;
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: filemanagerConfig;
        data: DataStore;
        name: string;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: filemanagerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        copy(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): number;

        copyFile(source: string | any[], target: string): void;

        count(): number;

        createFolder(targetId: string): void;

        define(property: string, value: any): void;

        deleteFile(ids: string | any[]): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        download(id: string): void;

        editFile(id: string): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getActive(): string | any[];

        getActiveView(): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChildViews(): any[];

        getCurrentFolder(): string;

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getMenu(): any;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPath(id: string): any[];

        getPathNames(id: string): any[];

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getSearchData(id: string, text: string): any[];

        getSelectedFile(): string | any[];

        getTopParentView(): webix.ui.baseview;

        getUploader(): any;

        goBack(step: number): void;

        goForward(step: number): void;

        hasEvent(name: string): boolean;

        hide(): void;

        hideProgress(): void;

        hideSearchResults(): void;

        hideTree(): void;

        innerId(id: number | string): number | string;

        isBranch(id: string | number): boolean;

        isEnabled(): boolean;

        isVisible(): boolean;

        levelUp(id: string): void;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        mapEvent(map: any): void;

        markCopy(id: string | any[]): void;

        markCut(id: string | any[]): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveFile(source: string, target: string): void;

        openFolders(folders: any[]): void;

        parse(data: any, type: string): void;

        pasteFile(id: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        renameFile(id: string, name: string, property: string): void;

        resize(): void;

        setDefaultHandlers(url: string): void;

        setPath(id: string): void;

        show(force?: boolean, animation?: boolean): void;

        showProgress(config?: any): void;

        showSearchResults(text: string): void;

        showTree(): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        ui(view: any): webix.ui.baseview;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        uploadFile(target: string): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface formConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        borderless?: boolean;
        cols?: any[];
        complexData?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datatype?: string;
        disabled?: boolean;
        elements?: any[];
        elementsConfig?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        rules?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        type?: string;
        url?: any;
        visibleBatch?: string;
        width?: number;
    }

    type formEventName =
        'onAfterLoad'
        | 'onAfterScroll'
        | 'onAfterValidation'
        | 'onBeforeLoad'
        | 'onBeforeValidate'
        | 'onBindRequest'
        | 'onChange'
        | 'onDestruct'
        | 'onLoadError'
        | 'onSubmit'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onValues'
        | 'onViewShow';

    export class form implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: formConfig;
        elements: any;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: formEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clear(): void;

        clearValidation(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(item: string): void;

        getChildViews(): any[];

        getCleanValues(): any;

        getDirtyValues(): any;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        getValues(details?: any): any;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isDirty(): boolean;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        markInvalid(name: string, state?: boolean | string): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        refresh(): void;

        removeView(id: any): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        scrollTo(x: number, y: number): void;

        serialize(serializer?: WebixCallback): any;

        setDirty(mark?: boolean): void;

        setValues(values: any, update?: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(mode?: any): boolean;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface forminputConfig {
        view?: string;
        $cssName?: string;
        animate?: any;
        body?: webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        value?: any;
        width?: number;
    }

    type forminputEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class forminput implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: forminputConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setBottomText(text: string): void;

        setValue(value: any): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface gageConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        color?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        label?: string;
        maxHeight?: number;
        maxRange?: number;
        maxWidth?: number;
        minHeight?: number;
        minRange?: number;
        minWidth?: number;
        on?: EventHash;
        placeholder?: string;
        scale?: number;
        smoothFlow?: boolean;
        stroke?: number;
        value?: number;
        width?: number;
    }

    type gageEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class gage implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: gageConfig;
        name: string;

        adjust(): void;

        attachEvent(type: gageEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        resize(): void;

        setValue(new_value: number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface geochartConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        chart?: any;
        columns?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        key?: string;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scheme?: any;
        tooltip?: string | WebixCallback;
        url?: any;
        width?: number;
    }

    type geochartEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMapError'
        | 'onMapReady'
        | 'onRegionClick'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class geochart implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: geochartConfig;
        data: DataStore;
        name: string;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: geochartEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getMap(): any;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        render(): void;

        resize(): void;

        serialize(all?: boolean): any[];

        setDisplayMode(mode: string): void;

        setRegion(region: string): void;

        show(force?: boolean, animation?: boolean): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface googleMapConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        center?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        heatmapConfig?: any;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        layerType?: string;
        mapType?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scheme?: any;
        url?: any;
        width?: number;
        zoom?: number;
    }

    type googleMapEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHeatMapRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class googleMap implements webix.ui.baseview {
        $height: number;
        $onLoad: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: googleMapConfig;
        data: DataStore;
        name: string;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: googleMapEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getMap(waitMap?: boolean): any;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        render(): void;

        resize(): void;

        serialize(all?: boolean): any[];

        show(force?: boolean, animation?: boolean): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface gridlayoutConfig {
        view?: string;
        animate?: any;
        autoplace?: boolean;
        borderless?: boolean;
        cellHeight?: number;
        cellWidth?: number;
        cells?: any[];
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        factory?: WebixCallback;
        gravity?: number;
        gridColumns?: number;
        gridRows?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: number;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        visibleBatch?: string;
        width?: number;
    }

    type gridlayoutEventName = 'onBindRequest' | 'onChange' | 'onDestruct' | 'onViewShow';

    export class gridlayout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: gridlayoutConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: gridlayoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        moveView(id: string | number, view: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        serialize(serializer?: WebixCallback): any[];

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface gridsuggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: webix.ui.baseview;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        width?: number;
        zIndex?: number;
    }

    type gridsuggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class gridsuggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: gridsuggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: gridsuggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(node: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface grouplistConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        template?: string | WebixCallback;
        templateBack?: string | string | WebixTemplate;
        templateCopy?: WebixCallback;
        templateGroup?: string | WebixCallback;
        templateItem?: string | WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
    }

    type grouplistEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class grouplist implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: grouplistConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number, parentId?: string): string;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: grouplistEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getOpenState(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface headerlayoutConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        collapsed?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multi?: boolean | string;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        panelClass?: string;
        responsive?: string;
        rows?: any[];
        type?: string;
        visibleBatch?: string;
        width?: number;
    }

    type headerlayoutEventName = 'onAfterCollapse' | 'onAfterExpand' | 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class headerlayout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: headerlayoutConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: headerlayoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        serialize(serializer?: WebixCallback): any;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface hintConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        nextButton?: boolean | string;
        on?: EventHash;
        prevButton?: boolean | string;
        stepTimeout?: number;
        steps?: any[];
        top?: number;
        width?: number;
    }

    type hintEventName =
        'onAfterScroll'
        | 'onAfterStart'
        | 'onBeforeStart'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnd'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onNext'
        | 'onPrevious'
        | 'onSkip'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class hint implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: hintConfig;
        name: string;

        adjust(): void;

        attachEvent(type: hintEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        end(): void;

        getChildViews(): any[];

        getCurrentStep(): number;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getSteps(): any[];

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resume(stepNumber?: number): void;

        setSteps(steps: any[]): void;

        show(force?: boolean, animation?: boolean): void;

        start(): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface htmlformConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        borderless?: boolean;
        complexData?: boolean;
        container?: string | HTMLElement;
        content?: string | number | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        scroll?: boolean | string;
        scrollSpeed?: string;
        src?: string;
        template?: string | WebixCallback;
        tooltip?: any;
        url?: any;
        width?: number;
    }

    type htmlformEventName =
        'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValues'
        | 'onViewResize'
        | 'onViewShow';

    export class htmlform implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: htmlformConfig;
        name: string;

        adjust(): void;

        attachEvent(type: htmlformEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        clear(all?: boolean): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(item: string): void;

        getChildViews(): any[];

        getCleanValues(): any;

        getDirtyValues(): any;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        getValues(details?: any): any;

        hasEvent(name: string): boolean;

        hide(): void;

        isDirty(): boolean;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        markInvalid(name: string, state?: boolean | string): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        setContent(node: any): void;

        setDirty(mark?: boolean): void;

        setHTML(html: string): void;

        setValues(values: any, update?: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface iconConfig {
        view?: string;
        align?: string;
        animate?: any;
        autowidth?: boolean;
        borderless?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputHeight?: number;
        inputWidth?: number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        popup?: string;
        tooltip?: any;
        value?: string | number;
        width?: number;
    }

    type iconEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class icon implements webix.ui.baseview {
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: iconConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: iconEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface iframeConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        src?: string;
        width?: number;
    }

    type iframeEventName =
        'onAfterLoad'
        | 'onAfterScroll'
        | 'onBeforeLoad'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class iframe implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: iframeConfig;
        name: string;

        adjust(): void;

        attachEvent(type: iframeEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getIframe(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getWindow(): HTMLElement;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(value: string): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface kanbanConfig {
        view?: string;
        animate?: any;
        attachments?: string;
        borderless?: boolean;
        cardActions?: boolean | any[];
        collapsed?: boolean;
        colors?: any[] | string;
        cols?: any[];
        comments?: any;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        delimiter?: string;
        disabled?: boolean;
        editor?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        listFilter?: WebixCallback;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multi?: boolean | string;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        panelClass?: string;
        ready?: WebixCallback;
        removeMissed?: boolean;
        responsive?: string;
        rows?: any[];
        save?: any;
        scheme?: any;
        tags?: any[] | string;
        type?: string;
        url?: any;
        userList?: any;
        users?: any[] | string;
        visibleBatch?: string;
        width?: number;
    }

    type kanbanEventName =
        'onAfterAdd'
        | 'onAfterCollapse'
        | 'onAfterCopy'
        | 'onAfterDelete'
        | 'onAfterEditorShow'
        | 'onAfterExpand'
        | 'onAfterLoad'
        | 'onAfterSort'
        | 'onAfterStatusChange'
        | 'onAvatarClick'
        | 'onBeforeAdd'
        | 'onBeforeCopy'
        | 'onBeforeDelete'
        | 'onBeforeEditorAction'
        | 'onBeforeEditorShow'
        | 'onBeforeLoad'
        | 'onBeforeSort'
        | 'onBeforeStatusChange'
        | 'onBindRequest'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onListAfterContextMenu'
        | 'onListAfterDrop'
        | 'onListAfterSelect'
        | 'onListBeforeContextMenu'
        | 'onListBeforeDrag'
        | 'onListBeforeDragIn'
        | 'onListBeforeDrop'
        | 'onListBeforeSelect'
        | 'onListIconClick'
        | 'onListItemClick'
        | 'onListItemDblClick'
        | 'onLoadError'
        | 'onViewShow';

    export class kanban implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: kanbanConfig;
        data: DataStore;
        name: string;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: kanbanEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        copy(id: number | string): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachList(func: WebixCallback): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getColors(): DataCollection;

        getComments(): webix.ui.baseview;

        getEditor(): webix.ui.baseview;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getMenu(): webix.ui.baseview;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getOwnerList(itemId: string | number): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getSelectedId(): string | number;

        getStatuses(): any[];

        getTags(): DataCollection;

        getTopParentView(): webix.ui.baseview;

        getUserList(): webix.ui.baseview;

        getUsers(): DataCollection;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        select(id: string | number): void;

        serialize(all?: boolean): any[];

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        showEditor(obj?: any): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface labelConfig {
        view?: string;
        align?: string;
        animate?: any;
        autowidth?: boolean;
        borderless?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputHeight?: number;
        inputWidth?: number;
        keyPressTimeout?: number;
        label?: string;
        labelPosition?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        popup?: string;
        tooltip?: any;
        value?: string | number;
        width?: number;
    }

    type labelEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class label implements webix.ui.baseview {
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: labelConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: labelEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setHTML(html: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface layoutConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        type?: string;
        visibleBatch?: string;
        width?: number;
    }

    type layoutEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class layout implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: layoutConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: layoutEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory: WebixCallback, configOnly: boolean): void;

        serialize(serializer?: WebixCallback): any;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface listConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datafetch?: number;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        dynamic?: boolean;
        externalData?: WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
    }

    type listEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class list implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: listConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: listEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface menuConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        openAction?: string;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        subMenuPos?: string;
        submenuConfig?: any;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
    }

    type menuEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMenuItemClick'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class menu implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: menuConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: menuEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getMenu(id: string | number): any;

        getMenuItem(id: string | number): any;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getSubMenu(id: string | number): any;

        getTopMenu(): any;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideItem(id: string | number): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sizeToContent(): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface multicomboConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        button?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keepText?: boolean;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        newValues?: boolean;
        on?: EventHash;
        optionWidth?: number;
        options?: any;
        placeholder?: string;
        popup?: string;
        popupWidth?: number;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        separator?: string;
        suggest?: any;
        tagMode?: boolean;
        tagTemplate?: WebixCallback;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: number | string | any[];
        width?: number;
    }

    type multicomboEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class multicombo implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: multicomboConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: multicomboEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getList(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(config?: any): string | any[];

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface multiselectConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        optionWidth?: number;
        options?: any;
        placeholder?: string;
        popup?: string;
        popupWidth?: number;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        separator?: string;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type multiselectEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class multiselect implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: multiselectConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: multiselectEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getList(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface multisuggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        button?: boolean;
        buttonText?: string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: webix.ui.baseview;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        separator?: string;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        value?: string | number;
        width?: number;
        zIndex?: number;
    }

    type multisuggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class multisuggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: multisuggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: multisuggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getButton(): webix.ui.baseview;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface multitextConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        iconWidth?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        separator?: string;
        subConfig?: any;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type multitextEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSectionAdd'
        | 'onSectionRemove'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class multitext implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: multitextConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        addSection(): string | number;

        adjust(): void;

        attachEvent(type: multitextEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        getValueHere(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        removeSection(id?: string | number): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        setValueHere(value: string | number): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface multiviewConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cells?: any;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        fitBiggest?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keepViews?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        responsive?: string;
        rows?: any[];
        visibleBatch?: string;
        width?: number;
    }

    type multiviewEventName = 'onBeforeBack' | 'onBindRequest' | 'onDestruct' | 'onViewChange' | 'onViewShow';

    export class multiview implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: multiviewConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: multiviewEventName, functor: WebixCallback, id?: string): string | number;

        back(step: number): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getActiveId(): string;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        setValue(id: string | number): void;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface organogramConfig {
        view?: string;
        animate?: any;
        ariaLabel?: string;
        autoheight?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        filterMode?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        template?: string | WebixCallback;
        threeState?: boolean;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
    }

    type organogramEventName =
        'onAfterAdd'
        | 'onAfterClose'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterOpen'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeClose'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeOpen'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemCheck'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class organogram implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: organogramConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: organogramEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        close(id: string | number): void;

        closeAll(): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChildViews(): any[];

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getOpenItems(): any[];

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getState(): any;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isBranch(id: string | number): boolean;

        isBranchOpen(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        open(id: string | number, show?: boolean): void;

        openAll(): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface pagerConfig {
        view?: string;
        animate?: any;
        apiOnly?: boolean;
        borderless?: boolean;
        container?: string | HTMLElement;
        count?: number;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        group?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        level?: number;
        limit?: number;
        master?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        page?: number;
        size?: number;
        template?: string | WebixCallback;
        width?: number;
    }

    type pagerEventName =
        'onAfterContextMenu'
        | 'onAfterPageChange'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeContextMenu'
        | 'onBeforePageChange'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class pager implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: pagerConfig;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };

        adjust(): void;

        attachEvent(type: pagerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clone(config: any): any;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: string | number): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        select(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface panelConfig {
        view?: string;
        animate?: any;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        icon?: string | boolean;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        resize?: boolean;
        type?: string;
        width?: number;
    }

    type panelEventName = 'onBindRequest' | 'onDestruct' | 'onViewResize' | 'onViewShow';

    export class panel implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: panelConfig;
        name: string;

        adjust(): void;

        attachEvent(type: panelEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $resizeEnd(pos: number): void;

        $resizeMove(pos: number): void;

        $setSize(x: number, y: number): boolean;
    }

    interface pdfviewerConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        downloadName?: string;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        scale?: string | number;
        toolbar?: string;
        url?: any;
        width?: number;
    }

    type pdfviewerEventName =
        'onAfterLoad'
        | 'onAfterScroll'
        | 'onBeforeLoad'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onDocumentReady'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onPageRender'
        | 'onScaleChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class pdfviewer implements webix.ui.baseview {
        $height: number;
        $numPages: number;
        $onLoad: WebixCallback;
        $pageNum: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: pdfviewerConfig;
        name: string;

        adjust(): void;

        attachEvent(type: pdfviewerEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clear(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        download(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        nextPage(): void;

        parse(data: any, type: string): void;

        prevPage(): void;

        queryView(config: any, mode?: string): any;

        renderPage(page: number): void;

        resize(): void;

        setScale(scale: string | number, update: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        zoomIn(): void;

        zoomOut(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface pivotConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        columnWidth?: number;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datatable?: any;
        datatype?: string;
        defaultOperation?: string;
        disabled?: boolean;
        externalProcessing?: boolean;
        fieldMap?: any;
        filterLabelAlign?: string;
        filterLabelWidth?: number;
        filterMap?: any;
        filterMinWidth?: number;
        filterPlaceholder?: boolean | string;
        filterWidth?: number;
        footer?: string | boolean;
        format?: WebixCallback;
        gravity?: number;
        headerTemplate?: WebixCallback;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        max?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        min?: boolean;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        ping?: WebixCallback;
        popup?: any;
        profile?: boolean;
        readonly?: boolean;
        readonlyTitle?: string;
        ready?: WebixCallback;
        removeMissed?: boolean;
        scheme?: any;
        separateLabel?: boolean;
        stableRowId?: boolean;
        structure?: any;
        totalColumn?: string | boolean;
        type?: string;
        url?: any;
        webWorker?: string;
        width?: number;
        yScaleWidth?: number;
    }

    type pivotEventName =
        'onAfterAdd'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeApply'
        | 'onBeforeCancel'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onCancel'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onFilterChange'
        | 'onFilterCreate'
        | 'onHeaderInit'
        | 'onItemClick'
        | 'onLoadError'
        | 'onPopup'
        | 'onViewInit'
        | 'onViewShow'
        | 'onWebWorkerEnd'
        | 'onWebWorkerStart';

    export class pivot implements webix.ui.baseview {
        $$: any;
        $divider: string;
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: pivotConfig;
        data: DataStore;
        name: string;
        operations: any;
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addOperation(name: string, operation: WebixCallback, options: any): void;

        addTotalOperation(name: string, operation: WebixCallback, options: any): void;

        adjust(): void;

        attachEvent(type: pivotEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        configure(): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getConfigWindow(): any;

        getFields(): any;

        getFilterView(): any;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getStructure(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        innerId(id: number | string): number | string;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        render(): void;

        resize(): void;

        setStructure(config: any): void;

        show(force?: boolean, animation?: boolean): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        ui(view: any): webix.ui.baseview;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface popupConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        toFront?: boolean;
        top?: number;
        width?: number;
        zIndex?: number;
    }

    type popupEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class popup implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: popupConfig;
        name: string;

        adjust(): void;

        attachEvent(type: popupEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setPosition(x: number, y: number): void;

        show(node?: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface portletConfig {
        view?: string;
        animate?: any;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        cols?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        icon?: boolean | string;
        id?: string | number;
        isolate?: boolean;
        layoutType?: string;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mode?: string;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        type?: string;
        visibleBatch?: string;
        width?: number;
    }

    type portletEventName =
        'onAfterPortletMove'
        | 'onBeforePortletMove'
        | 'onBindRequest'
        | 'onDestruct'
        | 'onViewShow';

    export class portlet implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: portletConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: portletEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        markDropArea(target: string, mode: string): void;

        movePortlet(target: string, mode: string): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        removeView(id: any): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory: WebixCallback): void;

        serialize(serializer?: WebixCallback): any;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $drag(source: HTMLElement, ev: Event): string;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface propertyConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        borderless?: boolean;
        complexData?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        editValue?: string;
        editable?: boolean;
        editaction?: string;
        elements?: any;
        form?: string;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        map?: any;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        nameWidth?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        scroll?: boolean | string;
        scrollSpeed?: string;
        template?: string | WebixCallback;
        tooltip?: any;
        url?: any;
        width?: number;
    }

    type propertyEventName =
        'onAfterContextMenu'
        | 'onAfterEditStart'
        | 'onAfterEditStop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeContextMenu'
        | 'onBeforeEditStart'
        | 'onBeforeEditStop'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onCheck'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLiveEdit'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class property implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: propertyConfig;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_edit: { [key: string]: any; };
        on_mouse_move: WebixCallback;
        on_render: { [key: string]: any; };
        type: { [key: string]: any; };

        adjust(): void;

        attachEvent(type: propertyEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clear(): void;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        edit(id: any): void;

        editCancel(): void;

        editNext(): void;

        editStop(): void;

        enable(): void;

        focusEditor(id: any): void;

        getChildViews(): any[];

        getEditState(): any;

        getEditor(id?: string): any;

        getEditorValue(): string;

        getFormView(): webix.ui.baseview;

        getItem(id: string): any;

        getItemNode(id: string | number): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        getValues(): { [key: string]: any; };

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: string | number): void;

        registerType(name: string, data: any): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        setValues(values: any, update?: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(): void;

        validateEditor(id?: string | number): boolean;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface proxyConfig {
        view?: string;
        animate?: any;
        body?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        width?: number;
    }

    type proxyEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class proxy implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: proxyConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface querybuilderConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        columnMode?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        fields?: any[];
        filtering?: boolean;
        filters?: any[] | DataCollection;
        glue?: string;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        inputMaxWidth?: number;
        inputWidth?: number;
        maxHeight?: number;
        maxLevel?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        sorting?: boolean;
        type?: string;
        width?: number;
    }

    type querybuilderEventName = 'onBindRequest' | 'onDestruct' | 'onKeySelect' | 'onViewShow';

    export class querybuilder implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: querybuilderConfig;
        name: string;
        sqlOperators: any;

        adjust(): void;

        attachEvent(type: querybuilderEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachLine(callback: WebixCallback): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFilterHelper(): WebixCallback;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getSortingElements(): any[];

        getSortingHelper(): WebixCallback;

        getTopParentView(): webix.ui.baseview;

        getValue(): any;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        setValue(value: any): void;

        show(force?: boolean, animation?: boolean): void;

        toSQL(config?: any, rules?: any): any;

        unbind(): void;

        unblockEvent(): void;

        validate(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface radioConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        autowidth?: boolean;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        customRadio?: boolean;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        newline?: boolean;
        on?: EventHash;
        optionHeight?: number;
        options?: any[];
        popup?: string;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        vertical?: boolean;
        width?: number;
    }

    type radioEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onOptionAdd'
        | 'onOptionRemove'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class radio implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: radioConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        addOption(id: string | number, value: any, show?: boolean, index?: number): void;

        adjust(): void;

        attachEvent(type: radioEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableOption(id: string | number): void;

        enable(): void;

        enableOption(id: string | number): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getOption(id: string | number): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        hideOption(id: string | number): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        optionIndex(ID: string | number): number;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        removeOption(id: string | number): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        showOption(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface rangechartConfig {
        view?: string;
        alpha?: number;
        animate?: any;
        ariaLabel?: string;
        barWidth?: number;
        border?: boolean;
        borderColor?: string;
        borderWidth?: number;
        borderless?: boolean;
        cant?: number;
        color?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disableLines?: boolean;
        disabled?: boolean;
        eventRadius?: number;
        fill?: string;
        fixOverflow?: boolean;
        frameId?: string;
        gradient?: boolean | string | WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        label?: string | WebixCallback;
        labelOffset?: number;
        legend?: any;
        line?: any;
        lineColor?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        offset?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        origin?: number | string;
        padding?: any;
        pieHeight?: number;
        pieInnerText?: string | WebixCallback;
        preset?: string;
        radius?: number;
        range?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scale?: string;
        scheme?: any;
        series?: any;
        shadow?: boolean;
        tooltip?: any;
        type?: string;
        url?: any;
        value?: string | WebixTemplate;
        width?: number;
        x?: number;
        xAxis?: any;
        xValue?: string;
        y?: number;
        yAxis?: any;
        yValue?: string;
    }

    type rangechartEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterRangeChange'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLegendClick'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class rangechart implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        colormap: { [key: string]: any; };
        config: rangechartConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        presets: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addSeries(obj: any): void;

        adjust(): void;

        attachEvent(type: rangechartEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCanvas(): void;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getFrameData(): any[];

        getFrameRange(): any;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasEvent(name: string): boolean;

        hide(): void;

        hideSeries(index: number): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeAllSeries(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        serialize(all?: boolean): any[];

        setFrameRange(range: any): void;

        show(force?: boolean, animation?: boolean): void;

        showSeries(index: number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface rangesliderConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        max?: number;
        maxHeight?: number;
        maxWidth?: number;
        min?: number;
        minHeight?: number;
        minWidth?: number;
        moveTitle?: boolean;
        name?: string;
        on?: EventHash;
        popup?: string;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        separator?: string;
        step?: number;
        stringResult?: boolean;
        suggest?: any;
        title?: string | WebixCallback;
        tooltip?: any;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | any[];
        vertical?: boolean;
        width?: number;
    }

    type rangesliderEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSliderDrag'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class rangeslider implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $touchCapture: boolean;
        $view: HTMLElement;
        $width: number;
        config: rangesliderConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: rangesliderEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface resizerConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        onContext?: { [key: string]: any; };
        width?: number;
    }

    type resizerEventName = 'onViewShow';

    export class resizer implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: resizerConfig;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface richselectConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        options?: any;
        placeholder?: string;
        popup?: string;
        popupWidth?: number;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type richselectEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class richselect implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: richselectConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: richselectEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getList(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getText(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface richtextConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        label?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        type?: string;
        value?: string | number;
        width?: number;
    }

    type richtextEventName = 'onBindRequest' | 'onChange' | 'onDestruct' | 'onViewShow';

    export class richtext implements webix.ui.baseview {
        $$: any;
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: richtextConfig;
        name: string;

        adjust(): void;

        attachEvent(type: richtextEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        innerId(id: number | string): number | string;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        ui(view: any): webix.ui.baseview;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface scrollviewConfig {
        view?: string;
        animate?: any;
        body?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        scroll?: boolean | string;
        scrollSpeed?: string;
        width?: number;
    }

    type scrollviewEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class scrollview implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: scrollviewConfig;
        name: string;

        adjust(): void;

        attachEvent(type: scrollviewEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        scrollTo(x: number, y: number): void;

        show(force?: boolean, animation?: boolean): void;

        showView(id: string | number): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface searchConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        autowidth?: boolean;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        pattern?: any;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type searchEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSearchIconClick'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class search implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: searchConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: searchEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface segmentedConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multiview?: boolean;
        name?: string;
        on?: EventHash;
        optionWidth?: number;
        options?: any[];
        popup?: string;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type segmentedEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterTabClick'
        | 'onBeforeRender'
        | 'onBeforeTabClick'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onOptionAdd'
        | 'onOptionRemove'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class segmented implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: segmentedConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        addOption(id: string | number, value: any, show?: boolean, index?: number): void;

        adjust(): void;

        attachEvent(type: segmentedEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableOption(id: string | number): void;

        enable(): void;

        enableOption(id: string | number): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getOption(id: string | number): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        hideOption(id: string | number): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        optionIndex(ID: string | number): number;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        removeOption(id: string | number): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        showOption(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface selectConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        options?: any[] | string;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type selectEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class select implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: selectConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: selectEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface sidebarConfig {
        view?: string;
        activeTitle?: boolean;
        animate?: any;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        collapsed?: boolean;
        collapsedWidth?: number;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        filterMode?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multipleOpen?: boolean;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        position?: string;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        threeState?: boolean;
        titleHeight?: number;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
    }

    type sidebarEventName =
        'onAfterAdd'
        | 'onAfterClose'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterOpen'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeClose'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeOpen'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemCheck'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPartialRender'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class sidebar implements webix.ui.baseview {
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $fixEditor: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: sidebarConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: sidebarEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        checkAll(id?: string | number): void;

        checkItem(id: string): void;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        close(id: string | number): void;

        closeAll(): void;

        collapse(): void;

        copy(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): number;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        expand(): void;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChecked(): any[];

        getChildViews(): any[];

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getOpenItems(): any[];

        getPage(): number;

        getPager(): any;

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPopup(): any;

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getState(): any;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isBranch(id: string | number): boolean;

        isBranchOpen(id: string | number): boolean;

        isChecked(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveSelection(direction: string): void;

        open(id: string | number, show?: boolean): void;

        openAll(): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        toggle(): void;

        unbind(): void;

        unblockEvent(): void;

        uncheckAll(id?: string | number): void;

        uncheckItem(id: string): void;

        ungroup(mode: boolean): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface sidemenuConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        state?: WebixCallback;
        toFront?: boolean;
        top?: number;
        width?: number;
        zIndex?: number;
    }

    type sidemenuEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class sidemenu implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: sidemenuConfig;
        name: string;

        adjust(): void;

        attachEvent(type: sidemenuEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setPosition(x: number, y: number): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface sliderConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        max?: number;
        maxHeight?: number;
        maxWidth?: number;
        min?: number;
        minHeight?: number;
        minWidth?: number;
        moveTitle?: boolean;
        name?: string;
        on?: EventHash;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        step?: number;
        suggest?: any;
        title?: string | WebixCallback;
        tooltip?: any;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        vertical?: boolean;
        width?: number;
    }

    type sliderEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSliderDrag'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class slider implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $touchCapture: boolean;
        $view: HTMLElement;
        $width: number;
        config: sliderConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: sliderEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface spacerConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        width?: number;
    }

    type spacerEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class spacer implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: spacerConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface spreadsheetConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        bottombar?: boolean;
        buttons?: any;
        clipboard?: boolean;
        clipboardDecimalDelimiter?: string;
        columnCount?: number;
        columnWidth?: number;
        conditionStyle?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        liveEditor?: boolean;
        maxHeight?: number;
        maxWidth?: number;
        menu?: boolean;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        readonly?: boolean;
        resizeCell?: boolean;
        rowCount?: number;
        rowHeight?: number;
        sheetTabWidth?: number;
        subbar?: any;
        toolbar?: string | boolean;
        type?: string;
        url?: any;
        width?: number;
    }

    type spreadsheetEventName =
        'onAfterConditionSet'
        | 'onAfterLoad'
        | 'onAfterRangeSet'
        | 'onAfterSelect'
        | 'onAfterSheetShow'
        | 'onAfterSpan'
        | 'onAfterSplit'
        | 'onBeforeCommentShow'
        | 'onBeforeLoad'
        | 'onBeforeSheetShow'
        | 'onBeforeSpan'
        | 'onBeforeSplit'
        | 'onBeforeValueChange'
        | 'onBindRequest'
        | 'onCellChange'
        | 'onChange'
        | 'onCommentHide'
        | 'onComponentInit'
        | 'onDataParse'
        | 'onDataSerialize'
        | 'onDestruct'
        | 'onLoadError'
        | 'onMathRefresh'
        | 'onReset'
        | 'onSheetAdd'
        | 'onSheetRemove'
        | 'onSheetRename'
        | 'onStyleSet'
        | 'onViewInit'
        | 'onViewShow';

    export class spreadsheet implements webix.ui.baseview {
        $$: any;
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        comments: any;
        config: spreadsheetConfig;
        name: string;

        addFilter(rowId: number, columnId: number): void;

        addImage(rowId: number, columnId: number, url: string): void;

        addSheet(content: any): void;

        addSparkline(rowId: number, columnId: number, config: any): void;

        addStyle(styleProps: any, baseStyle: any): void;

        adjust(): void;

        alert(config: any): HTMLElement;

        attachEvent(type: spreadsheetEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        changeDecimals(row: number, column: number, change: number): void;

        clearRange(rangeStr: string, type: any): void;

        clearSheet(): void;

        combineCells(range?: any): void;

        compactStyles(): void;

        confirm(config: any): void;

        define(property: string, value: any): void;

        deleteColumn(columnId: number): void;

        deleteRow(rowId: number): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachSelectedCell(handler: WebixCallback): void;

        editSheet(name: string): void;

        enable(): void;

        filterSpreadSheet(): void;

        freezeColumns(columns: number): void;

        freezeRows(rows: number): void;

        getActiveSheet(): string;

        getCellEditor(row: number, column: number): any;

        getCellValue(row: number, column: number): string;

        getChildViews(): any[];

        getColumn(id: string): any;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getRow(id: string): any;

        getSelectedId(): any[];

        getSelectedRange(): string;

        getSheetData(sheet_name: string): void;

        getStyle(row: number, column: number): any;

        getTopParentView(): webix.ui.baseview;

        groupUndo(func: WebixCallback): void;

        hasEvent(name: string): boolean;

        hide(): void;

        hideColumn(columnId: number, state: boolean): void;

        hideGridlines(state: boolean): void;

        hideHeaders(state: boolean): void;

        hideRow(rowId: number, state: boolean): void;

        ignoreUndo(func: WebixCallback): void;

        innerId(id: number | string): number | string;

        insertColumn(columnId: number): void;

        insertRow(rowId: number): void;

        isCellLocked(rowId: number, columnId: number): boolean;

        isColumnVisible(columnId: number): boolean;

        isEnabled(): boolean;

        isRowVisible(rowId: number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        lockCell(row: any, column: any, state: boolean): void;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        recalculate(): void;

        redo(): void;

        refresh(): void;

        registerMathMethod(name: string, handler: WebixCallback): void;

        removeFilter(): void;

        removeSheet(name: string): void;

        renameSheet(name: string, newName: string): void;

        reset(): void;

        resetUndo(): void;

        resize(): void;

        saveCell(row: number, column: number): void;

        serialize(options?: any): any;

        setCellEditor(rowId: number, columnId: number, editorObject: any): void;

        setCellFilter(rowId: number, columnId: number, options: string | any[]): void;

        setCellValue(row: number, column: any, value: string): void;

        setColumnWidth(id: string | number, width: number): void;

        setFormat(rowId: number, columnId: number, format: string): void;

        setPlaceholder(placeholder: any): void;

        setRangeStyle(rangeStr: string, style: any): void;

        setRangeValue(range: string): void;

        setRowHeight(id: string | number, height: number): void;

        setStyle(row: number, column: number, style: any): void;

        show(force?: boolean, animation?: boolean): void;

        showSheet(name: string): void;

        sortRange(range?: string, dir?: string): void;

        splitCell(row: number, column: number): void;

        ui(view: any): webix.ui.baseview;

        unbind(): void;

        unblockEvent(): void;

        undo(id: string): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface submenuConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        autoheight?: boolean;
        autowidth?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        mouseEventDelay?: number;
        move?: boolean;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        openAction?: string;
        padding?: any;
        pager?: any;
        point?: boolean;
        position?: string | WebixCallback;
        ready?: WebixCallback;
        relative?: string;
        removeMissed?: boolean;
        resize?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        subMenuPos?: string;
        submenuConfig?: any;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        toFront?: boolean;
        tooltip?: any;
        top?: number;
        type?: any;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
        zIndex?: number;
    }

    type submenuEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeShow'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMenuItemClick'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class submenu implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: submenuConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: submenuEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBody(): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getMenu(id: string | number): any;

        getMenuItem(id: string | number): any;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getSubMenu(id: string | number): any;

        getTopMenu(): any;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideItem(id: string | number): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        resizeChildren(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        setPosition(x: number, y: number): void;

        show(node?: HTMLElement, position?: any, point?: string): void;

        showItem(id: string | number): void;

        sizeToContent(): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        show(force: boolean, animation: boolean): void;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface suggestConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        disabled?: boolean;
        filter?: WebixCallback;
        fitMaster?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        input?: HTMLElement | string;
        keyPressTimeout?: number;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        template?: string | WebixTemplate;
        textValue?: string;
        toFront?: boolean;
        top?: number;
        type?: string;
        url?: string;
        width?: number;
        zIndex?: number;
    }

    type suggestEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValueSuggest'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class suggest implements webix.ui.baseview {
        $enterKey: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: suggestConfig;
        name: string;

        adjust(): void;

        attachEvent(type: suggestEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getItemId(text: string): string | number;

        getItemText(id: string | number): string;

        getList(): webix.ui.baseview;

        getMasterValue(): any;

        getNode(): any;

        getParentView(): any;

        getSuggestion(): string;

        getTopParentView(): webix.ui.baseview;

        getValue(): string | number;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        linkInput(input: HTMLElement): void;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setMasterValue(value: any): void;

        setPosition(x: number, y: number): void;

        setValue(value: string | number): void;

        show(node: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface switchButtonConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        badge?: number | string;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        checkValue?: string;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        customCheckbox?: boolean;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        icon?: string;
        id?: string | number;
        image?: string;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelRight?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        pattern?: any;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        type?: string;
        uncheckValue?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type switchButtonEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class switchButton implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: switchButtonConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: switchButtonEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        toggle(): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface tabbarConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomOffset?: number;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        moreTemplate?: WebixCallback;
        multiview?: boolean;
        name?: string;
        on?: EventHash;
        optionWidth?: number;
        options?: any[];
        placeholder?: string;
        popup?: string;
        popupTemplate?: WebixCallback;
        popupWidth?: number;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tabMargin?: number;
        tabMinWidth?: number;
        tabMoreWidth?: number;
        tabOffset?: number;
        tabbarPopup?: webix.ui.baseview;
        tooltip?: any;
        topOffset?: number;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
        yCount?: number;
    }

    type tabbarEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterTabClick'
        | 'onBeforeRender'
        | 'onBeforeTabClick'
        | 'onBeforeTabClose'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onOptionAdd'
        | 'onOptionRemove'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class tabbar implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: tabbarConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        addOption(id: string | number, value: any, show?: boolean, index?: number): void;

        adjust(): void;

        attachEvent(type: tabbarEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableOption(id: string | number): void;

        enable(): void;

        enableOption(id: string | number): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getOption(id: string | number): any;

        getParentView(): any;

        getPopup(): webix.ui.baseview;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        hideOption(id: string | number): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        optionIndex(ID: string | number): number;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        removeOption(id: string | number): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        showOption(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface tabviewConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cells?: any[];
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multiview?: any;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        tabbar?: any;
        type?: string;
        width?: number;
    }

    type tabviewEventName = 'onBindRequest' | 'onDestruct' | 'onViewShow';

    export class tabview implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: tabviewConfig;
        name: string;

        addView(obj: any): void;

        adjust(): void;

        attachEvent(type: tabviewEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getMultiview(): any;

        getNode(): any;

        getParentView(): any;

        getTabbar(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        removeView(id: any): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface templateConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        borderless?: boolean;
        container?: string | HTMLElement;
        content?: string | number | HTMLElement;
        css?: any;
        data?: string | any[];
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        scroll?: boolean | string;
        scrollSpeed?: string;
        src?: string;
        template?: string | WebixCallback;
        tooltip?: any;
        type?: string;
        url?: any;
        width?: number;
    }

    type templateEventName =
        'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class template implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: templateConfig;
        name: string;

        adjust(): void;

        attachEvent(type: templateEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        getValues(): void;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        setContent(node: any): void;

        setHTML(html: string): void;

        setValues(obj: any, update?: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface textConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        pattern?: any;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        type?: string;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type textEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class text implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: textConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: textEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface textareaConfig {
        view?: string;
        align?: string;
        animate?: any;
        attributes?: any;
        borderless?: boolean;
        bottomLabel?: string;
        bottomPadding?: number;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        format?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputAlign?: string;
        inputHeight?: number;
        inputWidth?: number;
        invalid?: boolean;
        invalidMessage?: string;
        keyPressTimeout?: number;
        label?: string;
        labelAlign?: string;
        labelPosition?: string;
        labelWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        on?: EventHash;
        pattern?: any;
        placeholder?: string;
        popup?: string;
        readonly?: boolean;
        relatedAction?: string;
        relatedView?: string;
        required?: boolean;
        suggest?: any;
        tooltip?: any;
        validate?: WebixCallback;
        validateEvent?: string;
        value?: string | number;
        width?: number;
    }

    type textareaEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class textarea implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $render: WebixCallback;
        $renderIcon: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: textareaConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: textareaEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setBottomText(text: string): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(): boolean;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(obj: any, html: string, id: string | number): string;

        $renderLabel(config: any, id: string | number): string;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface timelineConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        click?: string | WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        ready?: WebixCallback;
        removeMissed?: boolean;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        template?: string | WebixCallback;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
    }

    type timelineEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onLoadError'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onViewShow';

    export class timeline implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: timelineConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: timelineEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        serialize(all?: boolean): any[];

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        updateItem(id: number | string, data: any): void;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface toggleConfig {
        view?: string;
        align?: string;
        animate?: any;
        autowidth?: boolean;
        borderless?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        icon?: string;
        id?: string | number;
        inputHeight?: number;
        inputWidth?: number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        name?: string;
        offIcon?: string;
        offLabel?: string;
        on?: EventHash;
        onIcon?: string;
        onLabel?: string;
        popup?: string;
        tooltip?: any;
        type?: string;
        value?: string | number;
        width?: number;
    }

    type toggleEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onChange'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class toggle implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $height: number;
        $prepareValue: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: toggleConfig;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        adjust(): void;

        attachEvent(type: toggleEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        toggle(): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface toolbarConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        cols?: any[];
        complexData?: boolean;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datatype?: string;
        disabled?: boolean;
        elements?: any[];
        elementsConfig?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        isolate?: boolean;
        margin?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        padding?: any;
        paddingX?: number;
        paddingY?: number;
        responsive?: string;
        rows?: any[];
        rules?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        type?: string;
        url?: any;
        visibleBatch?: string;
        width?: number;
    }

    type toolbarEventName =
        'onAfterLoad'
        | 'onAfterScroll'
        | 'onAfterValidation'
        | 'onBeforeLoad'
        | 'onBeforeValidate'
        | 'onBindRequest'
        | 'onChange'
        | 'onDestruct'
        | 'onLoadError'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onValues'
        | 'onViewShow';

    export class toolbar implements webix.ui.baseview {
        $height: number;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: toolbarConfig;
        name: string;

        addView(view: any, index?: number): string | number;

        adjust(): void;

        attachEvent(type: toolbarEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clear(): void;

        clearValidation(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        focus(item: string): void;

        getChildViews(): any[];

        getCleanValues(): any;

        getDirtyValues(): any;

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getScrollState(): any;

        getTopParentView(): webix.ui.baseview;

        getValues(details?: any): any;

        hasEvent(name: string): boolean;

        hide(): void;

        index(obj: any): number;

        isDirty(): boolean;

        isEnabled(): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        mapEvent(map: any): void;

        markInvalid(name: string, state?: boolean | string): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        reconstruct(): void;

        refresh(): void;

        removeView(id: any): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        resizeChildren(): void;

        restore(state: any, factory?: WebixCallback): void;

        scrollTo(x: number, y: number): void;

        serialize(serializer?: WebixCallback): any;

        setDirty(mark?: boolean): void;

        setValues(values: any, update?: boolean): void;

        show(force?: boolean, animation?: boolean): void;

        showBatch(name: string, mode?: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        validate(mode?: any): boolean;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface tooltipConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        dx?: number;
        dy?: number;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        on?: EventHash;
        template?: string | WebixCallback;
        width?: number;
    }

    type tooltipEventName =
        'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export interface tooltip {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: tooltipConfig;
        name: string;
        type: { [key: string]: any; };

        adjust(): void;

        attachEvent(type: tooltipEventName, functor: WebixCallback, id?: string): string | number;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        show(data: any, position: any): void;

        unblockEvent(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface treeConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        filterMode?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: boolean | string;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        threeState?: boolean;
        tooltip?: any;
        type?: any;
        url?: any;
        width?: number;
    }

    type treeEventName =
        'onAfterAdd'
        | 'onAfterClose'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterOpen'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeClose'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeOpen'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemCheck'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPartialRender'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class tree implements webix.ui.baseview {
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $fixEditor: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: treeConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number, parentId?: string): string;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: treeEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        checkAll(id?: string | number): void;

        checkItem(id: string): void;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        close(id: string | number): void;

        closeAll(): void;

        copy(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): number;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChecked(): any[];

        getChildViews(): any[];

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getOpenItems(): any[];

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getState(): any;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isBranch(id: string | number): boolean;

        isBranchOpen(id: string | number): boolean;

        isChecked(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveSelection(direction: string): void;

        open(id: string | number, show?: boolean): void;

        openAll(): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(rootId: string | number, all: boolean): any[];

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        uncheckAll(id?: string | number): void;

        uncheckItem(id: string): void;

        ungroup(mode: boolean): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface treemapConfig {
        view?: string;
        activeItem?: boolean;
        animate?: any;
        borderless?: boolean;
        branch?: string;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        dataFeed?: string | WebixCallback;
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        filterMode?: any;
        gravity?: number;
        header?: boolean;
        headerHeight?: number;
        headerTemplate?: string;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        subRender?: boolean;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        threeState?: boolean;
        tooltip?: any;
        type?: any;
        url?: any;
        value?: string | WebixCallback;
        width?: number;
    }

    type treemapEventName =
        'onAfterAdd'
        | 'onAfterClose'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterLoad'
        | 'onAfterOpen'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeClose'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeLoad'
        | 'onBeforeOpen'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onItemCheck'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPartialRender'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class treemap implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: treemapConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: treemapEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        close(id: string | number): void;

        closeAll(): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChildViews(): any[];

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getOpenItems(): any[];

        getPage(): number;

        getPager(): any;

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getState(): any;

        getTopParentView(): webix.ui.baseview;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isBranch(id: string | number): boolean;

        isBranchOpen(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        moveSelection(direction: string): void;

        open(id: string | number, show?: boolean): void;

        openAll(): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showBranch(branchId: string | number): void;

        showItem(id: string | number): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        ungroup(mode: boolean): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface treetableConfig {
        view?: string;
        animate?: any;
        areaselect?: boolean;
        autoConfig?: boolean;
        autoheight?: boolean;
        autowidth?: boolean;
        blockselect?: boolean | string;
        borderless?: boolean;
        checkboxRefresh?: boolean;
        clipboard?: boolean | string;
        columnWidth?: number;
        columns?: any[];
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datafetch?: number;
        datathrottle?: number;
        datatype?: string;
        delimiter?: any;
        disabled?: boolean;
        drag?: boolean | string;
        dragColumn?: boolean | string;
        dragscroll?: boolean | string;
        editMath?: boolean;
        editValue?: string;
        editable?: boolean;
        editaction?: string;
        externalData?: WebixCallback;
        filterMode?: any;
        fixedRowHeight?: boolean;
        footer?: boolean;
        form?: string;
        gravity?: number;
        header?: boolean;
        headerRowHeight?: number;
        headermenu?: any;
        height?: number;
        hidden?: boolean;
        hover?: string;
        id?: string | number;
        keyPressTimeout?: number;
        leftSplit?: number;
        liveValidation?: boolean;
        loadahead?: number;
        map?: any;
        math?: boolean;
        maxColumnWidth?: number;
        maxHeight?: number;
        maxRowHeight?: number;
        maxWidth?: number;
        minColumnWidth?: number;
        minHeight?: number;
        minRowHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        prerender?: boolean;
        ready?: WebixCallback;
        removeMissed?: boolean;
        resizeColumn?: any;
        resizeRow?: any;
        rightSplit?: number;
        rowHeight?: number;
        rowLineHeight?: number;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollAlignY?: boolean;
        scrollX?: boolean;
        scrollY?: boolean;
        select?: boolean | string;
        spans?: any[];
        subRowHeight?: string | number;
        subrow?: string;
        subview?: webix.ui.baseview | WebixCallback;
        templateCopy?: WebixCallback;
        threeState?: boolean;
        tooltip?: any;
        type?: any;
        undo?: boolean;
        url?: any;
        width?: number;
        yCount?: number;
    }

    type treetableEventName =
        'onAfterAdd'
        | 'onAfterAreaAdd'
        | 'onAfterAreaRemove'
        | 'onAfterBlockSelect'
        | 'onAfterClose'
        | 'onAfterColumnDrop'
        | 'onAfterColumnDropOrder'
        | 'onAfterColumnHide'
        | 'onAfterColumnShow'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterEditStart'
        | 'onAfterEditStop'
        | 'onAfterFilter'
        | 'onAfterLoad'
        | 'onAfterOpen'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onAfterUnSelect'
        | 'onAreaDrag'
        | 'onBeforeAdd'
        | 'onBeforeAreaAdd'
        | 'onBeforeAreaRemove'
        | 'onBeforeBlockSelect'
        | 'onBeforeClose'
        | 'onBeforeColumnDrag'
        | 'onBeforeColumnDrop'
        | 'onBeforeColumnDropOrder'
        | 'onBeforeColumnHide'
        | 'onBeforeColumnShow'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeEditStart'
        | 'onBeforeEditStop'
        | 'onBeforeFilter'
        | 'onBeforeLoad'
        | 'onBeforeOpen'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBeforeUnSelect'
        | 'onBindRequest'
        | 'onBlur'
        | 'onCheck'
        | 'onCollectValues'
        | 'onColumnGroupCollapse'
        | 'onColumnResize'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEditorChange'
        | 'onEnter'
        | 'onFocus'
        | 'onHeaderClick'
        | 'onItemCheck'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onKeyPress'
        | 'onLiveEdit'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onResize'
        | 'onRowResize'
        | 'onScrollX'
        | 'onScrollY'
        | 'onSelectChange'
        | 'onStructureLoad'
        | 'onStructureUpdate'
        | 'onSubViewClose'
        | 'onSubViewCreate'
        | 'onSubViewOpen'
        | 'onSubViewRender'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class treetable implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $touch: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: treetableConfig;
        data: DataStore;
        headerContent: any;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        waitData: Promise<any>;

        add(obj: any, index?: number, parentId?: string): string;

        addCellCss(id: string, name: string, css: string): void;

        addCss(id: string | number, css: string, silent?: boolean): void;

        addRowCss(id: string, css: string): void;

        addSelectArea(start: any, end: any, preserve: boolean, area_name?: string, css?: string, handle?: boolean): void;

        addSpan(id: any, column: string, width: number, height: number, value?: string, css?: string): void;

        adjust(): void;

        adjustColumn(id: string | number, mode?: string): void;

        adjustRowHeight(columnId?: string, silent?: boolean): void;

        attachEvent(type: treetableEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        checkAll(id?: string | number): void;

        checkItem(id: string): void;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearSelection(): void;

        clearValidation(): void;

        close(id: string | number): void;

        closeAll(): void;

        closeSub(id: string | number): void;

        collectValues(id: string | number, mode: any): any[];

        columnId(index: number): string | number;

        copy(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): number;

        count(): number;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        eachColumn(handler: WebixCallback, all?: boolean): void;

        eachRow(handler: WebixCallback): void;

        edit(id: any): void;

        editCancel(): void;

        editCell(row: string | number, col: string | number, preserve?: boolean, show?: boolean): void;

        editColumn(id: string): void;

        editNext(): void;

        editRow(id: string): void;

        editStop(): void;

        enable(): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        filterByAll(): void;

        find(criterion: WebixCallback, first?: boolean): any;

        focusEditor(id: any): void;

        getAllSelectAreas(): any;

        getBranchIndex(id: string | number, parent?: string | number): number;

        getChecked(): any[];

        getChildViews(): any[];

        getColumnConfig(id: string): any;

        getColumnIndex(id: string | number): number;

        getCss(rowId: string | number, columnId: string | number): string;

        getEditState(): any;

        getEditor(row?: any, column?: string | number): any;

        getEditorValue(): string;

        getFilter(columnID: string | number): any;

        getFirstChildId(id: string | number): string;

        getFirstId(): number | string;

        getFooterNode(columnId: string, rowIndex?: number): HTMLElement;

        getFormView(): webix.ui.baseview;

        getHeaderContent(id: string | number): { [key: string]: any; };

        getHeaderNode(columnId: string, rowIndex?: number): HTMLElement;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNextSiblingId(id: string | number): string | number;

        getNode(): any;

        getOpenItems(): any[];

        getPage(): number;

        getPager(): any;

        getParentId(id: string | number): string | number;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getPrevSiblingId(id: string | number): string | number;

        getScrollState(): any;

        getSelectArea(area_name: string): any;

        getSelectedId(asArray: boolean, asString: boolean): any;

        getSelectedItem(as_array?: boolean): any;

        getSpan(): any[];

        getSpanNode(id: any): HTMLElement;

        getState(): any;

        getSubView(id: string | number): any;

        getText(rowid: string | number, colid: string | number): string;

        getTopParentView(): webix.ui.baseview;

        getVisibleCount(): number;

        group(config: any, target?: string | number): void;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        hideColumn(id: string | number, options?: any, silent?: boolean, mode?: boolean): void;

        hideOverlay(): void;

        ignoreUndo(functor: WebixCallback): void;

        isBranch(id: string | number): boolean;

        isBranchOpen(id: string | number): boolean;

        isChecked(id: string | number): boolean;

        isColumnVisible(id: string | number): boolean;

        isEnabled(): boolean;

        isSelected(id: string | number): void;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadBranch(id: string | number, callback: WebixCallback, url: string): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(node: HTMLElement | Event): any;

        mapCells(startrow: number, startcol: string, numrows: number, numcols: number, callback: WebixCallback): void;

        mapEvent(map: any): void;

        mapSelection(callback: WebixCallback): void;

        markSorting(column_id: string, direction: string): void;

        move(sid: string | number, tindex: number, tobj?: webix.ui.baseview, details?: any): string | number;

        moveBottom(id: string | number): void;

        moveColumn(id: string, index: number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        open(id: string | number, show?: boolean): void;

        openAll(): void;

        openSub(id: string | number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        refreshColumns(config?: any[], reset?: boolean): void;

        refreshFilter(id: string | number): void;

        refreshSelectArea(): void;

        registerFilter(object: any, config: any, controller: any): void;

        remove(id: string | number | any[]): void;

        removeCellCss(id: string, name: string, css_name: string): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        removeRowCss(id: string, css_name: string): void;

        removeSelectArea(area_name: string): void;

        removeSpan(id: string | number, column: string): void;

        removeUndo(id: string): void;

        render(id: string | number, data: any, operation: string): void;

        resize(): void;

        resizeSubView(id: string | number): void;

        scrollTo(x: number, y: number): void;

        select(row_id: string | number, preserve: boolean): void;

        selectAll(): void;

        selectRange(row_id: string | number, end_row_id: string | number, preserve?: boolean): void;

        serialize(id?: string | number, all?: boolean): any[];

        setColumnWidth(id: string | number, width: number): void;

        setPage(page: number): void;

        setRowHeight(id: string | number, height: number): void;

        setState(state: any): void;

        show(force?: boolean, animation?: boolean): void;

        showCell(row: string, column: string): void;

        showColumn(id: string | number): void;

        showColumnBatch(batch: string | number, preserve: boolean): void;

        showItem(id: string | number): void;

        showItemByIndex(index: number): void;

        showOverlay(message: string): void;

        sort(by: string, dir?: string, as?: string): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        uncheckAll(id?: string | number): void;

        uncheckItem(id: string): void;

        undo(id: string): void;

        ungroup(mode: boolean): void;

        unselect(row_id: string | number): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        validateEditor(id?: string | number): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface unitlistConfig {
        view?: string;
        animate?: any;
        autoheight?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: string | WebixCallback;
        clipboard?: boolean | string;
        container?: string | HTMLElement;
        css?: any;
        data?: string | any[];
        datathrottle?: number;
        datatype?: string;
        disabled?: boolean;
        drag?: boolean | string;
        dragscroll?: boolean | string;
        externalData?: WebixCallback;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        item?: any;
        keyPressTimeout?: number;
        layout?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        mouseEventDelay?: number;
        multiselect?: string | boolean;
        navigation?: boolean;
        on?: EventHash;
        onClick?: { [key: string]: any; };
        onContext?: { [key: string]: any; };
        onDblClick?: WebixCallback;
        onMouseMove?: WebixCallback;
        pager?: any;
        ready?: WebixCallback;
        removeMissed?: boolean;
        rules?: any;
        save?: any;
        scheme?: any;
        scroll?: boolean | string;
        scrollSpeed?: string;
        select?: boolean | string;
        template?: string | WebixCallback;
        templateCopy?: WebixCallback;
        tooltip?: any;
        type?: any;
        uniteBy?: WebixCallback;
        url?: any;
        width?: number;
        xCount?: number;
        yCount?: number;
    }

    type unitlistEventName =
        'onAfterAdd'
        | 'onAfterContextMenu'
        | 'onAfterDelete'
        | 'onAfterDrop'
        | 'onAfterLoad'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onAfterSelect'
        | 'onAfterSort'
        | 'onBeforeAdd'
        | 'onBeforeContextMenu'
        | 'onBeforeDelete'
        | 'onBeforeDrag'
        | 'onBeforeDragIn'
        | 'onBeforeDrop'
        | 'onBeforeDropOut'
        | 'onBeforeLoad'
        | 'onBeforeRender'
        | 'onBeforeSelect'
        | 'onBeforeSort'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDataRequest'
        | 'onDataUpdate'
        | 'onDestruct'
        | 'onDragOut'
        | 'onEnter'
        | 'onFocus'
        | 'onItemClick'
        | 'onItemDblClick'
        | 'onItemRender'
        | 'onKeyPress'
        | 'onLoadError'
        | 'onLongTouch'
        | 'onMouseMove'
        | 'onMouseMoving'
        | 'onMouseOut'
        | 'onPaste'
        | 'onSelectChange'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTabFocus'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onValidationError'
        | 'onValidationSuccess'
        | 'onViewResize'
        | 'onViewShow';

    export class unitlist implements webix.ui.baseview {
        $customPrint: WebixCallback;
        $dragHTML: WebixCallback;
        $dropAllow: WebixCallback;
        $dropHTML: WebixCallback;
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: unitlistConfig;
        data: DataStore;
        name: string;
        on_click: WebixCallback;
        on_context: { [key: string]: any; };
        on_dblclick: WebixCallback;
        on_mouse_move: WebixCallback;
        type: { [key: string]: any; };
        types: { [key: string]: any; };
        waitData: Promise<any>;

        add(obj: any, index?: number): string | number;

        addCss(id: string | number, css: string, silent?: boolean): void;

        adjust(): void;

        attachEvent(type: unitlistEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        clearAll(soft?: boolean): void;

        clearCss(css: string, silent?: boolean): void;

        clearValidation(): void;

        copy(sid: string | number, tindex: number, tobj?: any, details?: any): void;

        count(): number;

        customize(obj: any): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        disableItem(id: string | number): void;

        enable(): void;

        enableItem(id: string | number): void;

        exists(id: number | string): boolean;

        filter(text: string | WebixTemplate | WebixCallback, value?: string, preserve?: boolean): void;

        find(criterion: WebixCallback, first?: boolean): any;

        getChildViews(): any[];

        getFirstId(): number | string;

        getFormView(): webix.ui.baseview;

        getIdByIndex(index: number | string): string | number;

        getIndexById(id: number | string): number;

        getItem(id: number | string): any;

        getItemNode(id: string | number): HTMLElement;

        getLastId(): number | string;

        getNextId(id: number | string, step: number): string | number;

        getNode(): any;

        getPage(): number;

        getPager(): any;

        getParentView(): any;

        getPrevId(id: number | string, step: number): string | number;

        getScrollState(): any;

        getSelectedId(as_array: boolean): string | any[];

        getSelectedItem(as_array: boolean): any;

        getTopParentView(): webix.ui.baseview;

        getUnitList(name: string): any[];

        getUnits(): any[];

        getVisibleCount(): number;

        hasCss(id: string | number, css: string): boolean;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isEnabledItem(): boolean;

        isSelected(id: string | number): boolean;

        isVisible(): boolean;

        load(url: string, type?: string, callback?: WebixCallback): Promise<any>;

        loadNext(count: number, start: number, callback: WebixCallback, url: string, now: boolean): Promise<any>;

        locate(e: Event): string | number;

        mapEvent(map: any): void;

        move(sid: string, tindex: number, tobj?: any, details?: any): string;

        moveBottom(id: string | number): void;

        moveDown(id: string | number, step: number): void;

        moveSelection(direction: string): void;

        moveTop(id: string | number): void;

        moveUp(id: string | number, step: number): void;

        parse(data: any, type: string): void;

        queryView(config: any, mode?: string): any;

        refresh(id?: number | string): void;

        remove(id: string | number | any[]): void;

        removeCss(id: string | number, css: string, silent?: boolean): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        scrollTo(x: number, y: number): void;

        select(id: string | any[], preserve: boolean): void;

        selectAll(from?: string, to?: string): void;

        serialize(all?: boolean): any[];

        setPage(page: number): void;

        show(force?: boolean, animation?: boolean): void;

        showItem(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        unselect(id?: string): void;

        unselectAll(): void;

        updateItem(id: number | string, data: any): void;

        validate(id?: string): boolean;

        waitSave(handler: WebixCallback): Promise<any>;

        $drag(source: HTMLElement, ev: Event): string;

        $dragIn(source: HTMLElement, target: HTMLElement, ev: Event): HTMLElement;

        $dragMark(context: any, ev: Event): boolean;

        $dragOut(source: HTMLElement, old_target: HTMLElement, new_target: HTMLElement, ev: Event): void;

        $drop(source: HTMLElement, target: HTMLElement, ev: Event): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface uploaderConfig {
        view?: string;
        accept?: string;
        align?: string;
        animate?: any;
        apiOnly?: boolean;
        autosend?: boolean;
        autowidth?: boolean;
        borderless?: boolean;
        click?: WebixCallback;
        container?: string | HTMLElement;
        css?: any;
        datatype?: string;
        directory?: string;
        disabled?: boolean;
        formData?: any;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        hotkey?: string;
        id?: string | number;
        inputHeight?: number;
        inputName?: string;
        inputWidth?: number;
        keyPressTimeout?: number;
        label?: string;
        link?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        multiple?: boolean;
        name?: string;
        on?: EventHash;
        popup?: string;
        tooltip?: any;
        type?: string;
        upload?: string;
        urlData?: any;
        value?: string | number;
        width?: number;
    }

    type uploaderEventName =
        'onAfterFileAdd'
        | 'onAfterRender'
        | 'onAfterScroll'
        | 'onBeforeFileAdd'
        | 'onBeforeRender'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFileUpload'
        | 'onFileUploadError'
        | 'onFocus'
        | 'onItemClick'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onUploadComplete'
        | 'onViewResize'
        | 'onViewShow';

    export class uploader implements webix.ui.baseview {
        $allowsClear: boolean;
        $compareValue: WebixCallback;
        $cssName: string;
        $height: number;
        $prepareValue: WebixCallback;
        $scope: any;
        $skin: WebixCallback;
        $updateProgress: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: uploaderConfig;
        files: any;
        name: string;
        on_click: WebixCallback;
        touchable: boolean;

        addDropZone(element: HTMLElement): void;

        addFile(name: any, size: number, type?: string): void;

        adjust(): void;

        attachEvent(type: uploaderEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        blur(): void;

        callEvent(name: string, params: any[]): boolean;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        fileDialog(content?: any): void;

        focus(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getInputNode(): HTMLElement;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getValue(): string;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isUploaded(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        refresh(): void;

        render(id: string | number, data: any, type: string): void;

        resize(): void;

        send(id: number | string | WebixCallback): void;

        setValue(value: string): void;

        show(force?: boolean, animation?: boolean): void;

        stopUpload(id: string | number): void;

        sync(source: any, filter: WebixCallback, silent: boolean): void;

        unbind(): void;

        unblockEvent(): void;

        $getSize(): any[];

        $getValue(): string;

        $renderInput(config: any): HTMLElement;

        $setSize(x: number, y: number): boolean;

        $setValue(value: string): void;

        $tooltipIn(node: HTMLElement): HTMLElement;

        $tooltipMove(t: HTMLElement, e: Event, text: string): void;

        $tooltipOut(): void;
    }

    interface videoConfig {
        view?: string;
        animate?: any;
        borderless?: boolean;
        container?: string | HTMLElement;
        controls?: boolean;
        css?: any;
        disabled?: boolean;
        gravity?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        src?: string | any[];
        width?: number;
    }

    type videoEventName =
        'onAfterScroll'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewResize'
        | 'onViewShow';

    export class video implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: videoConfig;
        name: string;

        adjust(): void;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        define(property: string, value: any): void;

        destructor(): void;

        disable(): void;

        enable(): void;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        getVideo(): void;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        queryView(config: any, mode?: string): any;

        resize(): void;

        show(force?: boolean, animation?: boolean): void;

        unbind(): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

    interface windowConfig {
        view?: string;
        animate?: any;
        autofit?: boolean;
        autofocus?: boolean;
        body?: string | webix.ui.baseview;
        borderless?: boolean;
        close?: boolean;
        container?: string | HTMLElement;
        css?: any;
        disabled?: boolean;
        fullscreen?: boolean;
        gravity?: number;
        head?: any;
        headHeight?: number;
        height?: number;
        hidden?: boolean;
        id?: string | number;
        keyPressTimeout?: number;
        left?: number;
        master?: string;
        maxHeight?: number;
        maxWidth?: number;
        minHeight?: number;
        minWidth?: number;
        modal?: boolean;
        move?: boolean;
        on?: EventHash;
        padding?: any;
        point?: boolean;
        position?: string | WebixCallback;
        relative?: string;
        resize?: boolean;
        toFront?: boolean;
        top?: number;
        width?: number;
        zIndex?: number;
    }

    type windowEventName =
        'onAfterScroll'
        | 'onBeforeShow'
        | 'onBindRequest'
        | 'onBlur'
        | 'onDestruct'
        | 'onEnter'
        | 'onFocus'
        | 'onHide'
        | 'onKeyPress'
        | 'onLongTouch'
        | 'onShow'
        | 'onSwipeX'
        | 'onSwipeY'
        | 'onTimedKeyPress'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onViewMove'
        | 'onViewMoveEnd'
        | 'onViewResize'
        | 'onViewShow';

    export class window implements webix.ui.baseview {
        $height: number;
        $scope: any;
        $skin: WebixCallback;
        $view: HTMLElement;
        $width: number;
        config: windowConfig;
        name: string;

        adjust(): void;

        attachEvent(type: windowEventName, functor: WebixCallback, id?: string): string | number;

        bind(target: any, rule?: WebixCallback, format?: string): void;

        blockEvent(): void;

        callEvent(name: string, params: any[]): boolean;

        close(): void;

        define(property: string, value: any): void;

        destructor(): void;

        detachEvent(id: string): void;

        disable(): void;

        enable(): void;

        getBody(): any;

        getChildViews(): any[];

        getFormView(): webix.ui.baseview;

        getHead(): any;

        getNode(): any;

        getParentView(): any;

        getTopParentView(): webix.ui.baseview;

        hasEvent(name: string): boolean;

        hide(): void;

        isEnabled(): boolean;

        isVisible(): boolean;

        mapEvent(map: any): void;

        queryView(config: any, mode?: string): any;

        resize(): void;

        resizeChildren(): void;

        setPosition(x: number, y: number): void;

        show(node?: HTMLElement, position?: any, point?: string): void;

        unbind(): void;

        unblockEvent(): void;

        show(force: boolean, animation: boolean): void;

        $getSize(): any[];

        $setSize(x: number, y: number): boolean;
    }

}

export as namespace webix;