const pageData = require("../../../utilities/helperMethods");
require("jest");

describe("testing pagination methods", () => {
  it("get page limit and offset", () => {
    const res = pageData.getPagination(0, 2);
    const res2 = pageData.getPagination(1, 2);

    expect(res).not.toBeNull();
    expect(res2).not.toBeNull();
  });
});

describe("testing pagination methods", () => {
  it("get page limit and offset", () => {
    let temp = 1;
    const page = 1;
    if (page >= 2 && page % 2 != 0) temp++;

    const size = 2;
    const res2 = pageData.getPagination(page, size);
    const data = { count: 6, rows: ["1", "2", "3", "4", "5", "6"] };
    const mock = [];

    const index = (temp == 0) | (temp == 1) ? 0 : temp;

    for (let i = index; i < index + size; i++) mock.push(data.rows[i]);

    const res = pageData.getPagingData(data, page, res2.limit);

    expect(res.currentPage).toBe(1);
    expect(res.totalItems).toBe(6);
    expect(res.totalPages).toBe(3);
    expect(mock.toString()).toBe(["1", "2"].toString());
  });

  it("get page limit and offset", () => {
    let temp = 2;
    const page = 2;

    if (page >= 2 && page % 2 != 0) temp++;

    const size = 2;
    const res2 = pageData.getPagination(page, size);
    const data = { count: 6, rows: ["1", "2", "3", "4", "5", "6"] };

    const mock = [];
    const index = (temp == 0) | (temp == 1) ? 0 : temp;

    for (let i = index; i < index + size; i++) mock.push(data.rows[i]);

    const res = pageData.getPagingData(data, page, res2.limit);

    expect(res.currentPage).toBe(2);
    expect(res.totalItems).toBe(6);
    expect(res.totalPages).toBe(3);
    expect(mock.toString()).toBe(["3", "4"].toString());
  });

  it("get page limit and offset", () => {
    let temp = 3;
    const page = 3;
    if (page >= 2 && page % 2 != 0) temp++;

    const size = 2;
    const res2 = pageData.getPagination(page, size);
    const data = { count: 6, rows: ["1", "2", "3", "4", "5", "6"] };

    const mock = [];
    const index = (temp == 0) | (temp == 1) ? 0 : temp;

    for (let i = index; i < index + size; i++) mock.push(data.rows[i]);

    const res = pageData.getPagingData(data, page, res2.limit);

    expect(res.currentPage).toBe(3);
    expect(res.totalItems).toBe(6);
    expect(res.totalPages).toBe(3);
    expect(mock.toString()).toBe(["5", "6"].toString());
  });
});
