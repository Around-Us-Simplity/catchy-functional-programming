import calcCartTotal from "./week1";

test("wee1 test", () => {
  const logSpy = jest.spyOn(console, "log");

  calcCartTotal();

  expect(logSpy).toHaveBeenCalledWith("hide");
  expect(logSpy).toHaveBeenCalledWith("show");
  expect(logSpy).toHaveBeenCalledWith("hide");
  expect(logSpy).toHaveBeenCalledWith(0.05);
});
