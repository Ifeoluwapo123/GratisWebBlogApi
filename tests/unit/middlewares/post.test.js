const middleware = require("../../../middlewares/postDataValidate");
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
    title: "",
    description: "",
  },
};

afterEach(() => {
  mockPostReq.params = { id: "1234567890poiuytrewqasdfghjklmnbvcxz" };
  mockPostReq.body = {
    title: "",
    description: "",
  };
});

//===================================================================================================//
//======================================== Creating Blog Post =======================================//
//===================================================================================================//
describe("testing middleware for posting blog", () => {
  it("Should failed cause fields are empty", () => {
    const response = middleware.validatePostDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"title" is not allowed to be empty');
    expect(response).not.toBeNull();
  });

  it("Should fail cause description is less than 20 character length", () => {
    mockPostReq.body.title = "123456";
    mockPostReq.body.description = "1234567890";

    const response = middleware.validatePostDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe(
      '"description" length must be at least 20 characters long'
    );
    expect(response).not.toBeNull();
  });

  it("Should fail cause title is less than 5 character length", () => {
    mockPostReq.body.title = "1236";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";

    const response = middleware.validatePostDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe(
      '"title" length must be at least 5 characters long'
    );
    expect(response).not.toBeNull();
  });

  it("Should pass", () => {
    mockPostReq.body.title = "123646";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";

    const response = middleware.validatePostDataCreate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response).toBeUndefined();
  });
});

//===================================================================================================//
//========================================  Update Blog Post  =======================================//
//===================================================================================================//
describe("testing middleware for update blog", () => {
  it("Should failed cause fields are empty", () => {
    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"title" is not allowed to be empty');
    expect(response).not.toBeNull();
  });

  it("Should pass", () => {
    mockPostReq.body.title = "123646";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";

    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response).toBeUndefined();
  });

  it("Should fail cause description is less than 20 character length", () => {
    mockPostReq.body.title = "123456";
    mockPostReq.body.description = "1234567890";

    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe(
      '"description" length must be at least 20 characters long'
    );
    expect(response).not.toBeNull();
  });

  it("Should fail cause title is less than 5 character length", () => {
    mockPostReq.body.title = "1236";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";

    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe(
      '"title" length must be at least 5 characters long'
    );
    expect(response).not.toBeNull();
  });

  it("Should fail cause id is not 36 character length", () => {
    mockPostReq.body.title = "1236";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";
    mockPostReq.body.id = "dddddd";

    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"id" length must be 36 characters long');
    expect(response).not.toBeNull();
  });

  it("Should fail cause id is empty", () => {
    mockPostReq.body.title = "1236";
    mockPostReq.body.description = "1234567890asdfghjklmnbvcxz";
    mockPostReq.body.id = "";

    const response = middleware.validatePostDataUpdate(
      mockPostReq,
      moskPostRes,
      mockNext
    );

    expect(response.message).toBe('"id" is not allowed to be empty');
    expect(response).not.toBeNull();
  });
});
