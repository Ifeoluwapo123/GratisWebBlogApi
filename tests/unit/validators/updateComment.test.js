const updateValidate = require("../../../validators/commentUpdate.validator");
require("jest");

describe("Testing comment data updates", () => {
  const generalCondition = `
        Should pass if comment input is of, 
        minimum length of 4, and post id input is of length 36
        and it is required(must be provided)
    `;

  it(generalCondition, () => {
    const test = {
      postId: "1q2w3e4r5t6y7u8i9o0rrssssrrrrrpeee77",
      comment: "kdlcldd123",
    };

    const { error } = updateValidate.validate(test);

    expect(error).toBeUndefined();
  });

  it("Should fail if fields are empty", () => {
    const test = {
      postId: "",
      comment: "",
    };

    const { error } = updateValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"postId" is not allowed to be empty'
    );
  });

  const uuidError = "Should fail because uuid is not 36 characters";

  it(uuidError, () => {
    const test = {
      postId: "jjjjjjjjjjjjgggd",
      comment: "yyyyyyyyyyyyyyy",
    };

    const { error } = updateValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"postId" length must be 36 characters long'
    );
  });

  const uuidError2 = "Should fail because uuid data is empty";

  it(uuidError2, () => {
    const test = {
      postId: "",
      comment: "kdlci",
    };

    const { error } = updateValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"postId" is not allowed to be empty'
    );
  });

  const commentError = `
    Should fail because title is less than 4 characters
  `;

  it(commentError, () => {
    const test = {
      postId: "1q2w3e4r5t6y7u8i9o0rrssssrrrrrpeee77",
      comment: "kdl",
    };

    const { error } = updateValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"comment" length must be at least 4 characters long'
    );
  });

  const commentError2 = "Should fail because comment data is empty";

  it(commentError2, () => {
    const test = {
      postId: "1q2w3e4r5t6y7u8i9o0rrssssrrrrrpeee77",
      comment: "",
    };

    const { error } = updateValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"comment" is not allowed to be empty'
    );
  });
});
