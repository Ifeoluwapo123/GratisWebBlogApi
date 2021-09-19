const middleware = require("../../../middlewares/commentValidate");
require("jest");

//mock response object
const moskPostRes = {
  status: (code) => ({
    json: (data) => (data ? data : null),
  }),
};

//mock next
const mockNext = () => "next";

//mock req object
const mockPostReq = {
  params: { id: "1234567890poiuytrewqasdfghjklmnbvcxz" },
  body: {
    comment: "",
    postId: "",
  },
};

afterEach(() => {
  mockPostReq.params = { id: "1234567890poiuytrewqasdfghjklmnbvcxz" };
  mockPostReq.body = {
    comment: "",
    postId: "",
  };
});

//===================================================================================================//
//======================================== Creating comment on a Post =======================================//
//===================================================================================================//
describe("testing middleware for creating comment on a blog", () => {
  it("Should failed cause fields are empty", () => {
    const response = middleware.validateCommentDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"comment" is not allowed to be empty');
    expect(response).not.toBeNull();
  });

  it("Should fail cause comment is less than 4 character length", () => {
    mockPostReq.body.comment = "123";
    mockPostReq.body.postId = "1234567890poiuytrewqasdfghjklmnbvcxz";

    const response = middleware.validateCommentDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe(
      '"comment" length must be at least 4 characters long'
    );
    expect(response).not.toBeNull();
  });

  it("Should fail cause id is not 32 character length", () => {
    mockPostReq.body.comment = "1236";
    mockPostReq.body.postId = "1234567890asdfghjbvcxz";

    const response = middleware.validateCommentDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"postId" length must be 36 characters long');
    expect(response).not.toBeNull();
  });

  it("Should pass", () => {
    mockPostReq.body.comment = "123646";
    mockPostReq.body.postId = "1234567890poiuytrewqasdfghjklmnbvcxz";

    const response = middleware.validateCommentDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response).toBeUndefined();
  });
});

//===================================================================================================//
//========================================  Update comment on a Post  =======================================//
//===================================================================================================//
describe("testing middleware for update comment", () => {
  it("Should failed cause fields are empty", () => {
    const response = middleware.validateCommentDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"postId" is not allowed to be empty');
    expect(response).not.toBeNull();
  });

  it("Should pass", () => {
    const mockPostReq = {
      params: { id: "1234567890poiuytrewqasdfghjklmnbvcxz" },
      body: {
        comment: "",
      },
    };

    mockPostReq.body.comment = "123646";
    mockPostReq.params.postId = "1234567890poiuytrewqasdfghjklmnbvcxz";

    const response = middleware.validateCommentDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response).toBeUndefined();
  });

  it("Should fail because post id is not of 32 length", () => {
    const mockPostReq = {
      params: { id: "7890poiuytrewqasdfghjklmnbvcxz" },
      body: {
        comment: "",
      },
    };

    mockPostReq.body.comment = "123646";
    mockPostReq.params.postId = "1234567890poiuytrewqasdfghjklmnbvcxz";

    const response = middleware.validateCommentDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"postId" length must be 36 characters long');
  });
});
