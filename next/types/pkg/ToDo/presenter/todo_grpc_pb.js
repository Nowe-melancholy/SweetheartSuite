// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pkg_ToDo_presenter_todo_pb = require('../../../pkg/ToDo/presenter/todo_pb.js');

function serialize_SweetheartSuite_v2_AddItemRequest(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.AddItemRequest)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddItemRequest(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.AddItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_AddItemResponse(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.AddItemResponse)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddItemResponse(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.AddItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_AddListRequest(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.AddListRequest)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddListRequest(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.AddListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_AddListResponse(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.AddListResponse)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddListResponse(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.AddListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_DeleteItemRequest(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.DeleteItemRequest)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.DeleteItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_DeleteItemRequest(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.DeleteItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_DeleteItemResponse(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.DeleteItemResponse)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.DeleteItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_DeleteItemResponse(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.DeleteItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_GetItemsRequest(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.GetItemsRequest)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.GetItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_GetItemsRequest(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.GetItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_GetItemsResponse(arg) {
  if (!(arg instanceof pkg_ToDo_presenter_todo_pb.GetItemsResponse)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.GetItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_GetItemsResponse(buffer_arg) {
  return pkg_ToDo_presenter_todo_pb.GetItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ToDoService = exports.ToDoService = {
  addItem: {
    path: '/SweetheartSuite.v2.ToDo/AddItem',
    requestStream: false,
    responseStream: false,
    requestType: pkg_ToDo_presenter_todo_pb.AddItemRequest,
    responseType: pkg_ToDo_presenter_todo_pb.AddItemResponse,
    requestSerialize: serialize_SweetheartSuite_v2_AddItemRequest,
    requestDeserialize: deserialize_SweetheartSuite_v2_AddItemRequest,
    responseSerialize: serialize_SweetheartSuite_v2_AddItemResponse,
    responseDeserialize: deserialize_SweetheartSuite_v2_AddItemResponse,
  },
  addList: {
    path: '/SweetheartSuite.v2.ToDo/AddList',
    requestStream: false,
    responseStream: false,
    requestType: pkg_ToDo_presenter_todo_pb.AddListRequest,
    responseType: pkg_ToDo_presenter_todo_pb.AddListResponse,
    requestSerialize: serialize_SweetheartSuite_v2_AddListRequest,
    requestDeserialize: deserialize_SweetheartSuite_v2_AddListRequest,
    responseSerialize: serialize_SweetheartSuite_v2_AddListResponse,
    responseDeserialize: deserialize_SweetheartSuite_v2_AddListResponse,
  },
  getItems: {
    path: '/SweetheartSuite.v2.ToDo/GetItems',
    requestStream: false,
    responseStream: false,
    requestType: pkg_ToDo_presenter_todo_pb.GetItemsRequest,
    responseType: pkg_ToDo_presenter_todo_pb.GetItemsResponse,
    requestSerialize: serialize_SweetheartSuite_v2_GetItemsRequest,
    requestDeserialize: deserialize_SweetheartSuite_v2_GetItemsRequest,
    responseSerialize: serialize_SweetheartSuite_v2_GetItemsResponse,
    responseDeserialize: deserialize_SweetheartSuite_v2_GetItemsResponse,
  },
  deleteItem: {
    path: '/SweetheartSuite.v2.ToDo/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: pkg_ToDo_presenter_todo_pb.DeleteItemRequest,
    responseType: pkg_ToDo_presenter_todo_pb.DeleteItemResponse,
    requestSerialize: serialize_SweetheartSuite_v2_DeleteItemRequest,
    requestDeserialize: deserialize_SweetheartSuite_v2_DeleteItemRequest,
    responseSerialize: serialize_SweetheartSuite_v2_DeleteItemResponse,
    responseDeserialize: deserialize_SweetheartSuite_v2_DeleteItemResponse,
  },
};

exports.ToDoClient = grpc.makeGenericClientConstructor(ToDoService);
