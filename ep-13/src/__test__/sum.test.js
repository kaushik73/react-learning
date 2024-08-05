import { sum } from "../Components/sum";

test("sum function should calculate correct sum ", () => {
  const result = sum(2, 3);

  // assertion :
  expect(result).toBe(5);
});
