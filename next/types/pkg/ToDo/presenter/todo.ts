/* eslint-disable */
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

export interface ToDo {
  AddItem(request: AddItemRequest): Promise<AddItemResponse>;
  AddList(request: AddListRequest): Promise<AddListResponse>;
}

export const ToDoServiceName = "SweetheartSuite.v2.ToDo";
export class ToDoClientImpl implements ToDo {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ToDoServiceName;
    this.rpc = rpc;
    this.AddItem = this.AddItem.bind(this);
    this.AddList = this.AddList.bind(this);
  }
  AddItem(request: AddItemRequest): Promise<AddItemResponse> {
    const data = AddItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddItem", data);
    return promise.then((data) => AddItemResponse.decode(_m0.Reader.create(data)));
  }

  AddList(request: AddListRequest): Promise<AddListResponse> {
    const data = AddListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddList", data);
    return promise.then((data) => AddListResponse.decode(_m0.Reader.create(data)));
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
