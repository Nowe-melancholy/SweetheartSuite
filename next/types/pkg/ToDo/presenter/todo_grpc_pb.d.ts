// package: SweetheartSuite.v2
// file: pkg/ToDo/presenter/todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pkg_ToDo_presenter_todo_pb from "../../../pkg/ToDo/presenter/todo_pb";

interface IToDoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addItem: IToDoService_IAddItem;
    addList: IToDoService_IAddList;
    getItems: IToDoService_IGetItems;
}

interface IToDoService_IAddItem extends grpc.MethodDefinition<pkg_ToDo_presenter_todo_pb.AddItemRequest, pkg_ToDo_presenter_todo_pb.AddItemResponse> {
    path: "/SweetheartSuite.v2.ToDo/AddItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.AddItemRequest>;
    requestDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.AddItemRequest>;
    responseSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.AddItemResponse>;
    responseDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.AddItemResponse>;
}
interface IToDoService_IAddList extends grpc.MethodDefinition<pkg_ToDo_presenter_todo_pb.AddListRequest, pkg_ToDo_presenter_todo_pb.AddListResponse> {
    path: "/SweetheartSuite.v2.ToDo/AddList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.AddListRequest>;
    requestDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.AddListRequest>;
    responseSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.AddListResponse>;
    responseDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.AddListResponse>;
}
interface IToDoService_IGetItems extends grpc.MethodDefinition<pkg_ToDo_presenter_todo_pb.GetItemsRequest, pkg_ToDo_presenter_todo_pb.GetItemsResponse> {
    path: "/SweetheartSuite.v2.ToDo/GetItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.GetItemsRequest>;
    requestDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.GetItemsRequest>;
    responseSerialize: grpc.serialize<pkg_ToDo_presenter_todo_pb.GetItemsResponse>;
    responseDeserialize: grpc.deserialize<pkg_ToDo_presenter_todo_pb.GetItemsResponse>;
}

export const ToDoService: IToDoService;

export interface IToDoServer {
    addItem: grpc.handleUnaryCall<pkg_ToDo_presenter_todo_pb.AddItemRequest, pkg_ToDo_presenter_todo_pb.AddItemResponse>;
    addList: grpc.handleUnaryCall<pkg_ToDo_presenter_todo_pb.AddListRequest, pkg_ToDo_presenter_todo_pb.AddListResponse>;
    getItems: grpc.handleUnaryCall<pkg_ToDo_presenter_todo_pb.GetItemsRequest, pkg_ToDo_presenter_todo_pb.GetItemsResponse>;
}

export interface IToDoClient {
    addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
    getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
    getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
}

export class ToDoClient extends grpc.Client implements IToDoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    public addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    public addItem(request: pkg_ToDo_presenter_todo_pb.AddItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddItemResponse) => void): grpc.ClientUnaryCall;
    public addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    public addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    public addList(request: pkg_ToDo_presenter_todo_pb.AddListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.AddListResponse) => void): grpc.ClientUnaryCall;
    public getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
    public getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
    public getItems(request: pkg_ToDo_presenter_todo_pb.GetItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_ToDo_presenter_todo_pb.GetItemsResponse) => void): grpc.ClientUnaryCall;
}
