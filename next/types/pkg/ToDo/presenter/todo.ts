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

export interface GetItemsRequest {
  coupleId: string;
}

export interface GetItemsResponse {
  items: Item[];
}

export interface Item {
  itemId: string;
  title: string;
  description: string;
  isDone: boolean;
  doneDate: string;
}

export interface DeleteItemRequest {
  itemId: string;
}

export interface DeleteItemResponse {
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

  create(base?: DeepPartial<AddItemRequest>): AddItemRequest {
    return AddItemRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddItemRequest>): AddItemRequest {
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

  create(base?: DeepPartial<AddItemResponse>): AddItemResponse {
    return AddItemResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddItemResponse>): AddItemResponse {
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

  create(base?: DeepPartial<AddListRequest>): AddListRequest {
    return AddListRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddListRequest>): AddListRequest {
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

  create(base?: DeepPartial<AddListResponse>): AddListResponse {
    return AddListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddListResponse>): AddListResponse {
    const message = createBaseAddListResponse();
    message.listId = object.listId ?? "";
    return message;
  },
};

function createBaseGetItemsRequest(): GetItemsRequest {
  return { coupleId: "" };
}

export const GetItemsRequest = {
  encode(message: GetItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coupleId !== "") {
      writer.uint32(10).string(message.coupleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetItemsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetItemsRequest();
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

  fromJSON(object: any): GetItemsRequest {
    return { coupleId: isSet(object.coupleId) ? String(object.coupleId) : "" };
  },

  toJSON(message: GetItemsRequest): unknown {
    const obj: any = {};
    if (message.coupleId !== "") {
      obj.coupleId = message.coupleId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetItemsRequest>): GetItemsRequest {
    return GetItemsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetItemsRequest>): GetItemsRequest {
    const message = createBaseGetItemsRequest();
    message.coupleId = object.coupleId ?? "";
    return message;
  },
};

function createBaseGetItemsResponse(): GetItemsResponse {
  return { items: [] };
}

export const GetItemsResponse = {
  encode(message: GetItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetItemsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetItemsResponse {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [] };
  },

  toJSON(message: GetItemsResponse): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => Item.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetItemsResponse>): GetItemsResponse {
    return GetItemsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetItemsResponse>): GetItemsResponse {
    const message = createBaseGetItemsResponse();
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    return message;
  },
};

function createBaseItem(): Item {
  return { itemId: "", title: "", description: "", isDone: false, doneDate: "" };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.isDone === true) {
      writer.uint32(32).bool(message.isDone);
    }
    if (message.doneDate !== "") {
      writer.uint32(42).string(message.doneDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.itemId = reader.string();
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isDone = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.doneDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      isDone: isSet(object.isDone) ? Boolean(object.isDone) : false,
      doneDate: isSet(object.doneDate) ? String(object.doneDate) : "",
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.isDone === true) {
      obj.isDone = message.isDone;
    }
    if (message.doneDate !== "") {
      obj.doneDate = message.doneDate;
    }
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.itemId = object.itemId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.isDone = object.isDone ?? false;
    message.doneDate = object.doneDate ?? "";
    return message;
  },
};

function createBaseDeleteItemRequest(): DeleteItemRequest {
  return { itemId: "" };
}

export const DeleteItemRequest = {
  encode(message: DeleteItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteItemRequest();
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

  fromJSON(object: any): DeleteItemRequest {
    return { itemId: isSet(object.itemId) ? String(object.itemId) : "" };
  },

  toJSON(message: DeleteItemRequest): unknown {
    const obj: any = {};
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteItemRequest>): DeleteItemRequest {
    return DeleteItemRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteItemRequest>): DeleteItemRequest {
    const message = createBaseDeleteItemRequest();
    message.itemId = object.itemId ?? "";
    return message;
  },
};

function createBaseDeleteItemResponse(): DeleteItemResponse {
  return {};
}

export const DeleteItemResponse = {
  encode(_: DeleteItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteItemResponse();
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

  fromJSON(_: any): DeleteItemResponse {
    return {};
  },

  toJSON(_: DeleteItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DeleteItemResponse>): DeleteItemResponse {
    return DeleteItemResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<DeleteItemResponse>): DeleteItemResponse {
    const message = createBaseDeleteItemResponse();
    return message;
  },
};

export type ToDoDefinition = typeof ToDoDefinition;
export const ToDoDefinition = {
  name: "ToDo",
  fullName: "SweetheartSuite.v2.ToDo",
  methods: {
    addItem: {
      name: "AddItem",
      requestType: AddItemRequest,
      requestStream: false,
      responseType: AddItemResponse,
      responseStream: false,
      options: {},
    },
    addList: {
      name: "AddList",
      requestType: AddListRequest,
      requestStream: false,
      responseType: AddListResponse,
      responseStream: false,
      options: {},
    },
    getItems: {
      name: "GetItems",
      requestType: GetItemsRequest,
      requestStream: false,
      responseType: GetItemsResponse,
      responseStream: false,
      options: {},
    },
    deleteItem: {
      name: "DeleteItem",
      requestType: DeleteItemRequest,
      requestStream: false,
      responseType: DeleteItemResponse,
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
