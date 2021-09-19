const blogValidate = require("../../../validators/updatePost.validator");
require("jest");

describe("Testing data posted while updating a blog for validation", () => {
  const generalCondition = `
        Should pass if title input is of, 
        minimum length of 5, and description input is of minimum length of 30 
        and it is required(must be provided) and id must be of length 36
    `;

  it(generalCondition, () => {
    const test = {
      id: "1234567890poiuytrewqasdfghjklmnbvcxz",
      title: "kdlcldd123",
      description: "1q2w3e4r5t6y7u8i9o0peee",
    };

    const { error } = blogValidate.validate(test);

    expect(error).toBeUndefined();
  });

  it("Should fail because fields are empty", () => {
    const test = {
      id: "",
      title: "",
      description: "",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe('"id" is not allowed to be empty');
  });

  const titleError = `
    Should fail because title is less than 5 characters
  `;

  it(titleError, () => {
    const test = {
      id: "1234567890poiuytrewqasdfghjklmnbvcxz",
      title: "kdlc",
      description: "1q2w3e4r5t6y7u8i9o0peee",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"title" length must be at least 5 characters long'
    );
  });

  const titleError2 = "Should fail because title data is empty";

  it(titleError2, () => {
    const test = {
      id: "1234567890poiuytrewqasdfghjklmnbvcxz",
      title: "",
      description: "1q2w3e4r5t6y7u8i9o0peee",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe('"title" is not allowed to be empty');
  });

  const descriptionError = `Should fail because description is less than 20 characters`;

  it(descriptionError, () => {
    const test = {
      id: "1234567890poiuytrewqasdfghjklmnbvcxz",
      title: "kdlci",
      description: "1q2w3e4r5t6y",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"description" length must be at least 20 characters long'
    );
  });

  const descriptionError2 = "Should fail because description data is empty";

  it(descriptionError2, () => {
    const test = {
      id: "1234567890poiuytrewqasdfghjklmnbvcxz",
      title: "kdlci",
      description: "",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"description" is not allowed to be empty'
    );
  });

  const uuidError = "Should fail because uuid is not 36 characters";

  it(uuidError, () => {
    const test = {
      id: "jjjjjjjjjjjjgggd",
      title: "kdlci",
      description: "1q2w3e4r5t6y",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe(
      '"id" length must be 36 characters long'
    );
  });

  const uuidError2 = "Should fail because uuid data is empty";

  it(uuidError2, () => {
    const test = {
      id: "",
      title: "kdlci",
      description: "",
    };

    const { error } = blogValidate.validate(test);

    expect(error).not.toBeUndefined();
    expect(error.details[0].message).toBe('"id" is not allowed to be empty');
  });
});
