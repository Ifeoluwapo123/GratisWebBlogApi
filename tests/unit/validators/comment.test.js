const commentValidate = require("../../../validators/commentPost.validator");
require("jest");

describe("Testing comment posted", () => {
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

    const { error } = commentValidate.validate(test);

    expect(error).toBeUndefined();
  });

  const commentError = `
    Should fail because title is less than 4 characters
  `;

  it(commentError, () => {
    const test = {
      postId: "1q2w3e4r5t6y7u8333333333i9o0peee",
      comment: "kdl",
    };

    const { error } = commentValidate.validate(test);

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

    const { error } = commentValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"comment" is not allowed to be empty'
    );
  });

  const uuidError = "Should fail because uuid is not 36 characters";

  it(uuidError, () => {
    const test = {
      postId: "jjggr34222222223444gd",
      comment: "1q2w3e4r5t6y",
    };

    const { error } = commentValidate.validate(test);

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

    const { error } = commentValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"postId" is not allowed to be empty'
    );
  });
});
