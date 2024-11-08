import { describe, expect, test } from "vitest";

// TODO: fix the tests without touching the assertions.
// the assertions are the instructions starting with `expect`.

describe("array", () => {
  test("defines an array of numbers: 123, 44, 3.14", () => {
    // change array
    const array = [];

    expect(array.length).toBe(3);
    expect(array.at(0)).toBe(123);
    expect(array.at(1)).toBe(44);
    expect(array.at(2)).toBe(3.14);
  });

  test(`defines an array of objects: { title:  "carbonara", duration: 30}, { title: "lasagna", duration: 60 }`, () => {
    // change array
    const array = [];

    expect(array.length).toBe(2);
    expect(array.at(0)).toEqual({ title: "carbonara", duration: 30 });
    expect(array.at(1)).toEqual({ title: "lasagna", duration: 60 });
  });

  test("access the second element of the array", () => {
    const array = [1, 2, 3];
    // change element;
    const element = 0;

    expect(element).toBe(2);
    expect(array).toEqual([1, 2, 3]);
  });

  test("add 3 at the end of the array", () => {
    const array = [1, 2];
    // add an intruction here to add 3 at the end of array
    // see the [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

    expect(array).toEqual([1, 2, 3]);
  });

  test("remove the last element of the array and store it in the lastElement variable", () => {
    const array = [1, 2, 3];
    // remove the last from array with an array instance method and store it in lastElement
    // see [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
    const lastElement = 0;

    expect(array).toEqual([1, 2]);
    expect(lastElement).toBe(3);
  });

  test("add 0 at the beginning of the array", () => {
    const array = [1, 2];
    // add an intruction here to add 0 at the beginning of array
    // see the [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

    expect(array).toEqual([0, 1, 2]);
  });

  test("remove the first element of the array and store it in the firstElement variable", () => {
    const array = [1, 2, 3];
    // remove the first element from array with an array instance method and store it in firstElement, see [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
    const firstElement = 0;

    expect(array).toEqual([2, 3]);
    expect(firstElement).toBe(1);
  });

  test(`uppercase all elements: transform the array ["un", "dos", "tres"] into ["UN", "DOS", "TRES"]`, () => {
    // Note: initial and transfomed have the same number of element
    const initial = ["un", "dos", "tres"];
    // call a method on initial, see [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
    // uppercase a string s: (s) => s.toUpperCase()
    const transformed = initial;

    expect(transformed).toEqual(["UN", "DOS", "TRES"]);
  });

  test(`keep even numbers: transform the array [1, 2, 3, 4] into [2, 4]`, () => {
    // Note: initial and transfomed have a different number of element
    const initial = [1, 2, 3, 4];
    // call a method on initial, see [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
    // is a number n even?: (n) => n % 2 === 0;
    const transformed = initial;

    expect(transformed).toEqual([2, 4]);
  });

  test("find the first element that has a duration of 60", () => {
    const array = [
      { title: "carbonara", duration: 30 },
      { title: "lasagna", duration: 60 },
    ];
    // call a method on initial, see [list of all instance method on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
    const element = array[0];

    expect(element).toEqual({ title: "lasagna", duration: 60 });
  });
});
