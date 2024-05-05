/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SweetheartSuite.v2";

export const Gender = { GENDER_UNKNOWN: 0, MAN: 1, WOMAN: 2, UNRECOGNIZED: -1 } as const;

export type Gender = typeof Gender[keyof typeof Gender];

export function genderFromJSON(object: any): Gender {
  switch (object) {
    case 0:
    case "GENDER_UNKNOWN":
      return Gender.GENDER_UNKNOWN;
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
    case Gender.GENDER_UNKNOWN:
      return "GENDER_UNKNOWN";
    case Gender.MAN:
      return "MAN";
    case Gender.WOMAN:
      return "WOMAN";
    case Gender.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export const RequestStatus = {
  REQUEST_STATUS_UNKNOWN: 0,
  REQUEST_STATUS_PENDING: 1,
  REQUEST_STATUS_ACCEPTED: 2,
  REQUEST_STATUS_REJECTED: 3,
  UNRECOGNIZED: -1,
} as const;

export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];

export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "REQUEST_STATUS_UNKNOWN":
      return RequestStatus.REQUEST_STATUS_UNKNOWN;
    case 1:
    case "REQUEST_STATUS_PENDING":
      return RequestStatus.REQUEST_STATUS_PENDING;
    case 2:
    case "REQUEST_STATUS_ACCEPTED":
      return RequestStatus.REQUEST_STATUS_ACCEPTED;
    case 3:
    case "REQUEST_STATUS_REJECTED":
      return RequestStatus.REQUEST_STATUS_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}

export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.REQUEST_STATUS_UNKNOWN:
      return "REQUEST_STATUS_UNKNOWN";
    case RequestStatus.REQUEST_STATUS_PENDING:
      return "REQUEST_STATUS_PENDING";
    case RequestStatus.REQUEST_STATUS_ACCEPTED:
      return "REQUEST_STATUS_ACCEPTED";
    case RequestStatus.REQUEST_STATUS_REJECTED:
      return "REQUEST_STATUS_REJECTED";
    case RequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AddUserRequest {
  name: string;
  mailAddress: string;
  gender: Gender;
}

export interface AddUserResponse {
  userId: string;
}

export interface GetUserByMailAddressRequest {
  mailAddress: string;
}

export interface GetUserByMailAddressResponse {
  id: string;
  name: string;
  mailAddress: string;
  gender: Gender;
}

export interface GetCoupleRequest {
}

export interface GetCoupleResponse {
  coupleId: string;
}

export interface GetRequestByToUserIdRequest {
}

export interface GetRequestByToUserIdResponse {
  id: string;
  fromUserId: string;
  status: RequestStatus;
}

export interface GetRequestByFromUserIdRequest {
}

export interface GetRequestByFromUserIdResponse {
  id: string;
  toUserId: string;
  status: RequestStatus;
}

function createBaseAddUserRequest(): AddUserRequest {
  return { name: "", mailAddress: "", gender: 0 };
}

export const AddUserRequest = {
  encode(message: AddUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.mailAddress !== "") {
      writer.uint32(18).string(message.mailAddress);
    }
    if (message.gender !== 0) {
      writer.uint32(24).int32(message.gender);
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
          if (tag !== 18) {
            break;
          }

          message.mailAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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
      mailAddress: isSet(object.mailAddress) ? String(object.mailAddress) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: AddUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.mailAddress !== "") {
      obj.mailAddress = message.mailAddress;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create(base?: DeepPartial<AddUserRequest>): AddUserRequest {
    return AddUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddUserRequest>): AddUserRequest {
    const message = createBaseAddUserRequest();
    message.name = object.name ?? "";
    message.mailAddress = object.mailAddress ?? "";
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

  create(base?: DeepPartial<AddUserResponse>): AddUserResponse {
    return AddUserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddUserResponse>): AddUserResponse {
    const message = createBaseAddUserResponse();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetUserByMailAddressRequest(): GetUserByMailAddressRequest {
  return { mailAddress: "" };
}

export const GetUserByMailAddressRequest = {
  encode(message: GetUserByMailAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mailAddress !== "") {
      writer.uint32(10).string(message.mailAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByMailAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByMailAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mailAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserByMailAddressRequest {
    return { mailAddress: isSet(object.mailAddress) ? String(object.mailAddress) : "" };
  },

  toJSON(message: GetUserByMailAddressRequest): unknown {
    const obj: any = {};
    if (message.mailAddress !== "") {
      obj.mailAddress = message.mailAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserByMailAddressRequest>): GetUserByMailAddressRequest {
    return GetUserByMailAddressRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserByMailAddressRequest>): GetUserByMailAddressRequest {
    const message = createBaseGetUserByMailAddressRequest();
    message.mailAddress = object.mailAddress ?? "";
    return message;
  },
};

function createBaseGetUserByMailAddressResponse(): GetUserByMailAddressResponse {
  return { id: "", name: "", mailAddress: "", gender: 0 };
}

export const GetUserByMailAddressResponse = {
  encode(message: GetUserByMailAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.mailAddress !== "") {
      writer.uint32(26).string(message.mailAddress);
    }
    if (message.gender !== 0) {
      writer.uint32(32).int32(message.gender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByMailAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByMailAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mailAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): GetUserByMailAddressResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      mailAddress: isSet(object.mailAddress) ? String(object.mailAddress) : "",
      gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
    };
  },

  toJSON(message: GetUserByMailAddressResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.mailAddress !== "") {
      obj.mailAddress = message.mailAddress;
    }
    if (message.gender !== 0) {
      obj.gender = genderToJSON(message.gender);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserByMailAddressResponse>): GetUserByMailAddressResponse {
    return GetUserByMailAddressResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserByMailAddressResponse>): GetUserByMailAddressResponse {
    const message = createBaseGetUserByMailAddressResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.mailAddress = object.mailAddress ?? "";
    message.gender = object.gender ?? 0;
    return message;
  },
};

function createBaseGetCoupleRequest(): GetCoupleRequest {
  return {};
}

export const GetCoupleRequest = {
  encode(_: GetCoupleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCoupleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCoupleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetCoupleRequest {
    return {};
  },

  toJSON(_: GetCoupleRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetCoupleRequest>): GetCoupleRequest {
    return GetCoupleRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<GetCoupleRequest>): GetCoupleRequest {
    const message = createBaseGetCoupleRequest();
    return message;
  },
};

function createBaseGetCoupleResponse(): GetCoupleResponse {
  return { coupleId: "" };
}

export const GetCoupleResponse = {
  encode(message: GetCoupleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coupleId !== "") {
      writer.uint32(10).string(message.coupleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCoupleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCoupleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coupleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCoupleResponse {
    return { coupleId: isSet(object.coupleId) ? String(object.coupleId) : "" };
  },

  toJSON(message: GetCoupleResponse): unknown {
    const obj: any = {};
    if (message.coupleId !== "") {
      obj.coupleId = message.coupleId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetCoupleResponse>): GetCoupleResponse {
    return GetCoupleResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetCoupleResponse>): GetCoupleResponse {
    const message = createBaseGetCoupleResponse();
    message.coupleId = object.coupleId ?? "";
    return message;
  },
};

function createBaseGetRequestByToUserIdRequest(): GetRequestByToUserIdRequest {
  return {};
}

export const GetRequestByToUserIdRequest = {
  encode(_: GetRequestByToUserIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequestByToUserIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequestByToUserIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetRequestByToUserIdRequest {
    return {};
  },

  toJSON(_: GetRequestByToUserIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetRequestByToUserIdRequest>): GetRequestByToUserIdRequest {
    return GetRequestByToUserIdRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<GetRequestByToUserIdRequest>): GetRequestByToUserIdRequest {
    const message = createBaseGetRequestByToUserIdRequest();
    return message;
  },
};

function createBaseGetRequestByToUserIdResponse(): GetRequestByToUserIdResponse {
  return { id: "", fromUserId: "", status: 0 };
}

export const GetRequestByToUserIdResponse = {
  encode(message: GetRequestByToUserIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.fromUserId !== "") {
      writer.uint32(18).string(message.fromUserId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequestByToUserIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequestByToUserIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromUserId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequestByToUserIdResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      fromUserId: isSet(object.fromUserId) ? String(object.fromUserId) : "",
      status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: GetRequestByToUserIdResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.fromUserId !== "") {
      obj.fromUserId = message.fromUserId;
    }
    if (message.status !== 0) {
      obj.status = requestStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<GetRequestByToUserIdResponse>): GetRequestByToUserIdResponse {
    return GetRequestByToUserIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetRequestByToUserIdResponse>): GetRequestByToUserIdResponse {
    const message = createBaseGetRequestByToUserIdResponse();
    message.id = object.id ?? "";
    message.fromUserId = object.fromUserId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseGetRequestByFromUserIdRequest(): GetRequestByFromUserIdRequest {
  return {};
}

export const GetRequestByFromUserIdRequest = {
  encode(_: GetRequestByFromUserIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequestByFromUserIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequestByFromUserIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetRequestByFromUserIdRequest {
    return {};
  },

  toJSON(_: GetRequestByFromUserIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetRequestByFromUserIdRequest>): GetRequestByFromUserIdRequest {
    return GetRequestByFromUserIdRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<GetRequestByFromUserIdRequest>): GetRequestByFromUserIdRequest {
    const message = createBaseGetRequestByFromUserIdRequest();
    return message;
  },
};

function createBaseGetRequestByFromUserIdResponse(): GetRequestByFromUserIdResponse {
  return { id: "", toUserId: "", status: 0 };
}

export const GetRequestByFromUserIdResponse = {
  encode(message: GetRequestByFromUserIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.toUserId !== "") {
      writer.uint32(18).string(message.toUserId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequestByFromUserIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequestByFromUserIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toUserId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequestByFromUserIdResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      toUserId: isSet(object.toUserId) ? String(object.toUserId) : "",
      status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: GetRequestByFromUserIdResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.toUserId !== "") {
      obj.toUserId = message.toUserId;
    }
    if (message.status !== 0) {
      obj.status = requestStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<GetRequestByFromUserIdResponse>): GetRequestByFromUserIdResponse {
    return GetRequestByFromUserIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetRequestByFromUserIdResponse>): GetRequestByFromUserIdResponse {
    const message = createBaseGetRequestByFromUserIdResponse();
    message.id = object.id ?? "";
    message.toUserId = object.toUserId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

export type UserDefinition = typeof UserDefinition;
export const UserDefinition = {
  name: "User",
  fullName: "SweetheartSuite.v2.User",
  methods: {
    addUser: {
      name: "AddUser",
      requestType: AddUserRequest,
      requestStream: false,
      responseType: AddUserResponse,
      responseStream: false,
      options: {},
    },
    getUserByMailAddress: {
      name: "GetUserByMailAddress",
      requestType: GetUserByMailAddressRequest,
      requestStream: false,
      responseType: GetUserByMailAddressResponse,
      responseStream: false,
      options: {},
    },
    getCouple: {
      name: "GetCouple",
      requestType: GetCoupleRequest,
      requestStream: false,
      responseType: GetCoupleResponse,
      responseStream: false,
      options: {},
    },
    getRequestByToUserId: {
      name: "GetRequestByToUserId",
      requestType: GetRequestByToUserIdRequest,
      requestStream: false,
      responseType: GetRequestByToUserIdResponse,
      responseStream: false,
      options: {},
    },
    getRequestByFromUserId: {
      name: "GetRequestByFromUserId",
      requestType: GetRequestByFromUserIdRequest,
      requestStream: false,
      responseType: GetRequestByFromUserIdResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
