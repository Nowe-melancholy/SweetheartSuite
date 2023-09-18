// package: SweetheartSuite.v2
// file: pkg/ToDo/presenter/todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddItemRequest extends jspb.Message { 
    getCoupleid(): string;
    setCoupleid(value: string): AddItemRequest;
    getTitle(): string;
    setTitle(value: string): AddItemRequest;
    getDescription(): string;
    setDescription(value: string): AddItemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddItemRequest): AddItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddItemRequest;
    static deserializeBinaryFromReader(message: AddItemRequest, reader: jspb.BinaryReader): AddItemRequest;
}

export namespace AddItemRequest {
    export type AsObject = {
        coupleid: string,
        title: string,
        description: string,
    }
}

export class AddItemResponse extends jspb.Message { 
    getItemid(): string;
    setItemid(value: string): AddItemResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddItemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddItemResponse): AddItemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddItemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddItemResponse;
    static deserializeBinaryFromReader(message: AddItemResponse, reader: jspb.BinaryReader): AddItemResponse;
}

export namespace AddItemResponse {
    export type AsObject = {
        itemid: string,
    }
}

export class AddListRequest extends jspb.Message { 
    getCoupleid(): string;
    setCoupleid(value: string): AddListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddListRequest): AddListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddListRequest;
    static deserializeBinaryFromReader(message: AddListRequest, reader: jspb.BinaryReader): AddListRequest;
}

export namespace AddListRequest {
    export type AsObject = {
        coupleid: string,
    }
}

export class AddListResponse extends jspb.Message { 
    getListid(): string;
    setListid(value: string): AddListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddListResponse): AddListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddListResponse;
    static deserializeBinaryFromReader(message: AddListResponse, reader: jspb.BinaryReader): AddListResponse;
}

export namespace AddListResponse {
    export type AsObject = {
        listid: string,
    }
}

export class GetItemsRequest extends jspb.Message { 
    getListid(): string;
    setListid(value: string): GetItemsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetItemsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetItemsRequest): GetItemsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetItemsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetItemsRequest;
    static deserializeBinaryFromReader(message: GetItemsRequest, reader: jspb.BinaryReader): GetItemsRequest;
}

export namespace GetItemsRequest {
    export type AsObject = {
        listid: string,
    }
}

export class GetItemsResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): GetItemsResponse;
    addItems(value?: Item, index?: number): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetItemsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetItemsResponse): GetItemsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetItemsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetItemsResponse;
    static deserializeBinaryFromReader(message: GetItemsResponse, reader: jspb.BinaryReader): GetItemsResponse;
}

export namespace GetItemsResponse {
    export type AsObject = {
        itemsList: Array<Item.AsObject>,
    }
}

export class Item extends jspb.Message { 
    getItemid(): string;
    setItemid(value: string): Item;
    getTitle(): string;
    setTitle(value: string): Item;
    getDescription(): string;
    setDescription(value: string): Item;
    getIsdone(): boolean;
    setIsdone(value: boolean): Item;
    getDonedate(): string;
    setDonedate(value: string): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        itemid: string,
        title: string,
        description: string,
        isdone: boolean,
        donedate: string,
    }
}
