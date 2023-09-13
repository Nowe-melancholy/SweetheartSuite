/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SweetheartSuite.v2";

export interface AddItemRequest {
  coupleId: string;
  title: string;
  description: string;
}

export interface AddItemResponse {
  itemId: string;
}

export interface AddListRequest {
  coupleId: string;
}

export interface AddListResponse {
  listId: string;
}

function createBaseAddItemRequest(): AddItemRequest {
  return { coupleId: "", title: "", description: "" };
}

export const AddItemRequest = {
  encode(message: AddItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coupleId !== "") {
      writer.uint32(10).string(message.coupleId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coupleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddItemRequest {
    return {
      coupleId: isSet(object.coupleId) ? String(object.coupleId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: AddItemRequest): unknown {
    const obj: any = {};
    if (message.coupleId !== "") {
      obj.coupleId = message.coupleId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddItemRequest>, I>>(base?: I): AddItemRequest {
    return AddItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddItemRequest>, I>>(object: I): AddItemRequest {
    const message = createBaseAddItemRequest();
    message.coupleId = object.coupleId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseAddItemResponse(): AddItemResponse {
  return { itemId: "" };
}

export const AddItemResponse = {
  encode(message: AddItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddItemResponse {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "" };
  },

  toJSON(message: AddItemResponse): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddItemResponse>, I>>(base?: I): AddItemResponse {
    return AddItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddItemResponse>, I>>(object: I): AddItemResponse {
    const message = createBaseAddItemResponse();
    message.itemId = object.itemId ?? "";
    return message;
  },
};

function createBaseAddListRequest(): AddListRequest {
  return { coupleId: "" };
}

export const AddListRequest = {
  encode(message: AddListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coupleId !== "") {
      writer.uint32(10).string(message.coupleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddListRequest();
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

  fromJSON(object: any): AddListRequest {
    return { coupleId: isSet(object.coupleId) ? String(object.coupleId) : "" };
  },

  toJSON(message: AddListRequest): unknown {
    const obj: any = {};
    if (message.coupleId !== "") {
      obj.coupleId = message.coupleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddListRequest>, I>>(base?: I): AddListRequest {
    return AddListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddListRequest>, I>>(object: I): AddListRequest {
    const message = createBaseAddListRequest();
    message.coupleId = object.coupleId ?? "";
    return message;
  },
};

function createBaseAddListResponse(): AddListResponse {
  return { listId: "" };
}

export const AddListResponse = {
  encode(message: AddListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listId !== "") {
      writer.uint32(10).string(message.listId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddListResponse {
    return { listId: isSet(object.listId) ? String(object.listId) : "" };
  },

  toJSON(message: AddListResponse): unknown {
    const obj: any = {};
    if (message.listId !== "") {
      obj.listId = message.listId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddListResponse>, I>>(base?: I): AddListResponse {
    return AddListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddListResponse>, I>>(object: I): AddListResponse {
    const message = createBaseAddListResponse();
    message.listId = object.listId ?? "";
    return message;
  },
};

export type ToDoService = typeof ToDoService;
export const ToDoService = {
  addItem: {
    path: "/SweetheartSuite.v2.ToDo/AddItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddItemRequest) => Buffer.from(AddItemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddItemRequest.decode(value),
    responseSerialize: (value: AddItemResponse) => Buffer.from(AddItemResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddItemResponse.decode(value),
  },
  addList: {
    path: "/SweetheartSuite.v2.ToDo/AddList",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddListRequest) => Buffer.from(AddListRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddListRequest.decode(value),
    responseSerialize: (value: AddListResponse) => Buffer.from(AddListResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddListResponse.decode(value),
  },
} as const;

export interface ToDoServer extends UntypedServiceImplementation {
  addItem: handleUnaryCall<AddItemRequest, AddItemResponse>;
  addList: handleUnaryCall<AddListRequest, AddListResponse>;
}

export interface ToDoClient extends Client {
  addItem(
    request: AddItemRequest,
    callback: (error: ServiceError | null, response: AddItemResponse) => void,
  ): ClientUnaryCall;
  addItem(
    request: AddItemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddItemResponse) => void,
  ): ClientUnaryCall;
  addItem(
    request: AddItemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddItemResponse) => void,
  ): ClientUnaryCall;
  addList(
    request: AddListRequest,
    callback: (error: ServiceError | null, response: AddListResponse) => void,
  ): ClientUnaryCall;
  addList(
    request: AddListRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AddListResponse) => void,
  ): ClientUnaryCall;
  addList(
    request: AddListRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AddListResponse) => void,
  ): ClientUnaryCall;
}

export const ToDoClient = makeGenericClientConstructor(ToDoService, "SweetheartSuite.v2.ToDo") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ToDoClient;
  service: typeof ToDoService;
};

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
