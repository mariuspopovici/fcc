/**
 * An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.
 * Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.
 * Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.
 */

const isRectangleOverlap = (rect1, rect2) => {
  const [r1_x1, r1_y1, r1_x2, r1_y2] = rect1;
  const [r2_x1, r2_y1, r2_x2, r2_y2] = rect2;

  const int_x1 = Math.max(r1_x1, r2_x1);
  const int_x2 = Math.min(r1_x2, r2_x2);
  const int_y1 = Math.max(r1_y1, r2_y1);
  const int_y2 = Math.min(r1_y2, r2_y2);

  return int_x1 < int_x2 && int_y1 < int_y2;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));

export { isRectangleOverlap };
