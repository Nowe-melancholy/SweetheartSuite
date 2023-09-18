// package: SweetheartSuite.v2
// file: pkg/User/presenter/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddUserRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): AddUserRequest;
    getGender(): Gender;
    setGender(value: Gender): AddUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserRequest): AddUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserRequest;
    static deserializeBinaryFromReader(message: AddUserRequest, reader: jspb.BinaryReader): AddUserRequest;
}

export namespace AddUserRequest {
    export type AsObject = {
        name: string,
        gender: Gender,
    }
}

export class AddUserResponse extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): AddUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserResponse): AddUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserResponse;
    static deserializeBinaryFromReader(message: AddUserResponse, reader: jspb.BinaryReader): AddUserResponse;
}

export namespace AddUserResponse {
    export type AsObject = {
        userid: string,
    }
}

export enum Gender {
    UNDEFINED = 0,
    MAN = 1,
    WOMAN = 2,
}
