// package: SweetheartSuite.v2
// file: pkg/User/presenter/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pkg_User_presenter_user_pb from "../../../pkg/User/presenter/user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addUser: IUserService_IAddUser;
}

interface IUserService_IAddUser extends grpc.MethodDefinition<pkg_User_presenter_user_pb.AddUserRequest, pkg_User_presenter_user_pb.AddUserResponse> {
    path: "/SweetheartSuite.v2.User/AddUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pkg_User_presenter_user_pb.AddUserRequest>;
    requestDeserialize: grpc.deserialize<pkg_User_presenter_user_pb.AddUserRequest>;
    responseSerialize: grpc.serialize<pkg_User_presenter_user_pb.AddUserResponse>;
    responseDeserialize: grpc.deserialize<pkg_User_presenter_user_pb.AddUserResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    addUser: grpc.handleUnaryCall<pkg_User_presenter_user_pb.AddUserRequest, pkg_User_presenter_user_pb.AddUserResponse>;
}

export interface IUserClient {
    addUser(request: pkg_User_presenter_user_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: pkg_User_presenter_user_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: pkg_User_presenter_user_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addUser(request: pkg_User_presenter_user_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: pkg_User_presenter_user_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: pkg_User_presenter_user_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pkg_User_presenter_user_pb.AddUserResponse) => void): grpc.ClientUnaryCall;
}
