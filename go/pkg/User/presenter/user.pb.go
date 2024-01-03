// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: pkg/User/presenter/user.proto

package presenter

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Gender int32

const (
	Gender_UNDEFINED Gender = 0
	Gender_MAN       Gender = 1
	Gender_WOMAN     Gender = 2
)

// Enum value maps for Gender.
var (
	Gender_name = map[int32]string{
		0: "UNDEFINED",
		1: "MAN",
		2: "WOMAN",
	}
	Gender_value = map[string]int32{
		"UNDEFINED": 0,
		"MAN":       1,
		"WOMAN":     2,
	}
)

func (x Gender) Enum() *Gender {
	p := new(Gender)
	*p = x
	return p
}

func (x Gender) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Gender) Descriptor() protoreflect.EnumDescriptor {
	return file_pkg_User_presenter_user_proto_enumTypes[0].Descriptor()
}

func (Gender) Type() protoreflect.EnumType {
	return &file_pkg_User_presenter_user_proto_enumTypes[0]
}

func (x Gender) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Gender.Descriptor instead.
func (Gender) EnumDescriptor() ([]byte, []int) {
	return file_pkg_User_presenter_user_proto_rawDescGZIP(), []int{0}
}

type AddUserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	MailAddress string `protobuf:"bytes,2,opt,name=mailAddress,proto3" json:"mailAddress,omitempty"`
	Gender      Gender `protobuf:"varint,3,opt,name=gender,proto3,enum=SweetheartSuite.v2.Gender" json:"gender,omitempty"`
}

func (x *AddUserRequest) Reset() {
	*x = AddUserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_User_presenter_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddUserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddUserRequest) ProtoMessage() {}

func (x *AddUserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_User_presenter_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddUserRequest.ProtoReflect.Descriptor instead.
func (*AddUserRequest) Descriptor() ([]byte, []int) {
	return file_pkg_User_presenter_user_proto_rawDescGZIP(), []int{0}
}

func (x *AddUserRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AddUserRequest) GetMailAddress() string {
	if x != nil {
		return x.MailAddress
	}
	return ""
}

func (x *AddUserRequest) GetGender() Gender {
	if x != nil {
		return x.Gender
	}
	return Gender_UNDEFINED
}

type AddUserResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (x *AddUserResponse) Reset() {
	*x = AddUserResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_User_presenter_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddUserResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddUserResponse) ProtoMessage() {}

func (x *AddUserResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_User_presenter_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddUserResponse.ProtoReflect.Descriptor instead.
func (*AddUserResponse) Descriptor() ([]byte, []int) {
	return file_pkg_User_presenter_user_proto_rawDescGZIP(), []int{1}
}

func (x *AddUserResponse) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type GetUserByMailAddressRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MailAddress string `protobuf:"bytes,1,opt,name=mailAddress,proto3" json:"mailAddress,omitempty"`
}

func (x *GetUserByMailAddressRequest) Reset() {
	*x = GetUserByMailAddressRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_User_presenter_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetUserByMailAddressRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserByMailAddressRequest) ProtoMessage() {}

func (x *GetUserByMailAddressRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_User_presenter_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserByMailAddressRequest.ProtoReflect.Descriptor instead.
func (*GetUserByMailAddressRequest) Descriptor() ([]byte, []int) {
	return file_pkg_User_presenter_user_proto_rawDescGZIP(), []int{2}
}

func (x *GetUserByMailAddressRequest) GetMailAddress() string {
	if x != nil {
		return x.MailAddress
	}
	return ""
}

type GetUserByMailAddressResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	MailAddress string `protobuf:"bytes,3,opt,name=mailAddress,proto3" json:"mailAddress,omitempty"`
	Gender      Gender `protobuf:"varint,4,opt,name=gender,proto3,enum=SweetheartSuite.v2.Gender" json:"gender,omitempty"`
}

func (x *GetUserByMailAddressResponse) Reset() {
	*x = GetUserByMailAddressResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_User_presenter_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetUserByMailAddressResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserByMailAddressResponse) ProtoMessage() {}

func (x *GetUserByMailAddressResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_User_presenter_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserByMailAddressResponse.ProtoReflect.Descriptor instead.
func (*GetUserByMailAddressResponse) Descriptor() ([]byte, []int) {
	return file_pkg_User_presenter_user_proto_rawDescGZIP(), []int{3}
}

func (x *GetUserByMailAddressResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetUserByMailAddressResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetUserByMailAddressResponse) GetMailAddress() string {
	if x != nil {
		return x.MailAddress
	}
	return ""
}

func (x *GetUserByMailAddressResponse) GetGender() Gender {
	if x != nil {
		return x.Gender
	}
	return Gender_UNDEFINED
}

var File_pkg_User_presenter_user_proto protoreflect.FileDescriptor

var file_pkg_User_presenter_user_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x70, 0x6b, 0x67, 0x2f, 0x55, 0x73, 0x65, 0x72, 0x2f, 0x70, 0x72, 0x65, 0x73, 0x65,
	0x6e, 0x74, 0x65, 0x72, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x12, 0x53, 0x77, 0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65,
	0x2e, 0x76, 0x32, 0x22, 0x7a, 0x0a, 0x0e, 0x41, 0x64, 0x64, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x6d, 0x61, 0x69,
	0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x32, 0x0a, 0x06, 0x67,
	0x65, 0x6e, 0x64, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x53, 0x77,
	0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32,
	0x2e, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x52, 0x06, 0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x22,
	0x29, 0x0a, 0x0f, 0x41, 0x64, 0x64, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x3f, 0x0a, 0x1b, 0x47, 0x65,
	0x74, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x4d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x20, 0x0a, 0x0b, 0x6d, 0x61, 0x69,
	0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x98, 0x01, 0x0a, 0x1c,
	0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x4d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x12, 0x32, 0x0a, 0x06, 0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x53, 0x77, 0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53,
	0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x52, 0x06,
	0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x2a, 0x2b, 0x0a, 0x06, 0x47, 0x65, 0x6e, 0x64, 0x65, 0x72,
	0x12, 0x0d, 0x0a, 0x09, 0x55, 0x4e, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x07, 0x0a, 0x03, 0x4d, 0x41, 0x4e, 0x10, 0x01, 0x12, 0x09, 0x0a, 0x05, 0x57, 0x4f, 0x4d, 0x41,
	0x4e, 0x10, 0x02, 0x32, 0xd9, 0x01, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x54, 0x0a, 0x07,
	0x41, 0x64, 0x64, 0x55, 0x73, 0x65, 0x72, 0x12, 0x22, 0x2e, 0x53, 0x77, 0x65, 0x65, 0x74, 0x68,
	0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32, 0x2e, 0x41, 0x64, 0x64,
	0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x53, 0x77,
	0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32,
	0x2e, 0x41, 0x64, 0x64, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x7b, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x4d,
	0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x2f, 0x2e, 0x53, 0x77, 0x65,
	0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32, 0x2e,
	0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x4d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x53, 0x77,
	0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69, 0x74, 0x65, 0x2e, 0x76, 0x32,
	0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x4d, 0x61, 0x69, 0x6c, 0x41, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42,
	0x27, 0x5a, 0x25, 0x53, 0x77, 0x65, 0x65, 0x74, 0x68, 0x65, 0x61, 0x72, 0x74, 0x53, 0x75, 0x69,
	0x74, 0x65, 0x2f, 0x76, 0x32, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x55, 0x73, 0x65, 0x72, 0x2f, 0x70,
	0x72, 0x65, 0x73, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_User_presenter_user_proto_rawDescOnce sync.Once
	file_pkg_User_presenter_user_proto_rawDescData = file_pkg_User_presenter_user_proto_rawDesc
)

func file_pkg_User_presenter_user_proto_rawDescGZIP() []byte {
	file_pkg_User_presenter_user_proto_rawDescOnce.Do(func() {
		file_pkg_User_presenter_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_User_presenter_user_proto_rawDescData)
	})
	return file_pkg_User_presenter_user_proto_rawDescData
}

var file_pkg_User_presenter_user_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_pkg_User_presenter_user_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_pkg_User_presenter_user_proto_goTypes = []interface{}{
	(Gender)(0),                          // 0: SweetheartSuite.v2.Gender
	(*AddUserRequest)(nil),               // 1: SweetheartSuite.v2.AddUserRequest
	(*AddUserResponse)(nil),              // 2: SweetheartSuite.v2.AddUserResponse
	(*GetUserByMailAddressRequest)(nil),  // 3: SweetheartSuite.v2.GetUserByMailAddressRequest
	(*GetUserByMailAddressResponse)(nil), // 4: SweetheartSuite.v2.GetUserByMailAddressResponse
}
var file_pkg_User_presenter_user_proto_depIdxs = []int32{
	0, // 0: SweetheartSuite.v2.AddUserRequest.gender:type_name -> SweetheartSuite.v2.Gender
	0, // 1: SweetheartSuite.v2.GetUserByMailAddressResponse.gender:type_name -> SweetheartSuite.v2.Gender
	1, // 2: SweetheartSuite.v2.User.AddUser:input_type -> SweetheartSuite.v2.AddUserRequest
	3, // 3: SweetheartSuite.v2.User.GetUserByMailAddress:input_type -> SweetheartSuite.v2.GetUserByMailAddressRequest
	2, // 4: SweetheartSuite.v2.User.AddUser:output_type -> SweetheartSuite.v2.AddUserResponse
	4, // 5: SweetheartSuite.v2.User.GetUserByMailAddress:output_type -> SweetheartSuite.v2.GetUserByMailAddressResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_pkg_User_presenter_user_proto_init() }
func file_pkg_User_presenter_user_proto_init() {
	if File_pkg_User_presenter_user_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_User_presenter_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddUserRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_User_presenter_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddUserResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_User_presenter_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetUserByMailAddressRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_User_presenter_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetUserByMailAddressResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_User_presenter_user_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pkg_User_presenter_user_proto_goTypes,
		DependencyIndexes: file_pkg_User_presenter_user_proto_depIdxs,
		EnumInfos:         file_pkg_User_presenter_user_proto_enumTypes,
		MessageInfos:      file_pkg_User_presenter_user_proto_msgTypes,
	}.Build()
	File_pkg_User_presenter_user_proto = out.File
	file_pkg_User_presenter_user_proto_rawDesc = nil
	file_pkg_User_presenter_user_proto_goTypes = nil
	file_pkg_User_presenter_user_proto_depIdxs = nil
}
