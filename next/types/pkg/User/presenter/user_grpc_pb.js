// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pkg_User_presenter_user_pb = require('../../../pkg/User/presenter/user_pb.js');

function serialize_SweetheartSuite_v2_AddUserRequest(arg) {
  if (!(arg instanceof pkg_User_presenter_user_pb.AddUserRequest)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddUserRequest(buffer_arg) {
  return pkg_User_presenter_user_pb.AddUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SweetheartSuite_v2_AddUserResponse(arg) {
  if (!(arg instanceof pkg_User_presenter_user_pb.AddUserResponse)) {
    throw new Error('Expected argument of type SweetheartSuite.v2.AddUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SweetheartSuite_v2_AddUserResponse(buffer_arg) {
  return pkg_User_presenter_user_pb.AddUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  addUser: {
    path: '/SweetheartSuite.v2.User/AddUser',
    requestStream: false,
    responseStream: false,
    requestType: pkg_User_presenter_user_pb.AddUserRequest,
    responseType: pkg_User_presenter_user_pb.AddUserResponse,
    requestSerialize: serialize_SweetheartSuite_v2_AddUserRequest,
    requestDeserialize: deserialize_SweetheartSuite_v2_AddUserRequest,
    responseSerialize: serialize_SweetheartSuite_v2_AddUserResponse,
    responseDeserialize: deserialize_SweetheartSuite_v2_AddUserResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
