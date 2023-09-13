/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SweetheartSuite.v2";

export enum Gender {
  UNDEFINED = 0,
  MAN = 1,
  WOMAN = 2,
  UNRECOGNIZED = -1,
}

export function genderFromJSON(object: any): Gender {
  switch (object) {
    case 0:
    case "UNDEFINED":
      return Gender.UNDEFINED;
    case 1:
    case "MAN":
      return Gender.MAN;
    case 2:
    case "WOMAN":
      return Gender.WOMAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Gender.UNRECOGNIZED;
  }
}

export function genderToJSON(object: Gender): string {
  switch (object) {
    case Gender.UNDEFINED:
      return "UNDEFINED";
    case Gender.MAN:
      return "MAN";
    case Gender.WOMAN:
      return "WOMAN";
    case Gender.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AddUserRequest {
  name: string;
  gender: Gender;
}

export interface AddUserResponse {
  userId: string;
}

function createBaseAddUserRequest(): AddUserRequest {
  return { name: "", gender: 0 };
}

export const AddUserRequest = {
  encode(message: AddUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.gender !== 0) {
      writer.uint32(16).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddUserRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: AddUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserRequest>, I>>(base?: I): AddUserRequest {
    return AddUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserRequest>, I>>(object: I): AddUserRequest {
    const message = createBaseAddUserRequest();
    message.name = object.name ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBaseAddUserResponse(): AddUserResponse {
  return { userId: "" };
}

export const AddUserResponse = {
  encode(message: AddUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddUserResponse {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: AddUserResponse): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserResponse>, I>>(base?: I): AddUserResponse {
    return AddUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserResponse>, I>>(object: I): AddUserResponse {
    const message = createBaseAddUserResponse();
    message.userId = object.userId ?? "";
    return message;
  },
};

export interface User {
  AddUser(request: AddUserRequest): Promise<AddUserResponse>;
}

export const UserServiceName = "SweetheartSuite.v2.User";
export class UserClientImpl implements User {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceName;
    this.rpc = rpc;
    this.AddUser = this.AddUser.bind(this);
  }
  AddUser(request: AddUserRequest): Promise<AddUserResponse> {
    const data = AddUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddUser", data);
    return promise.then((data) => AddUserResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
