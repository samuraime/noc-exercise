/**
 * 二维向量
 */
export default class Vector {
  /**
   * @param {Vector} v0
   * @param {Vector} v1
   */
  static add(v0, v1) {
    return new Vector(v0.x + v1.x, v0.y + v1.y);
  }

  /**
   * @param {Vector} v0
   * @param {Vector} v1
   */
  static sub(v0, v1) {
    return new Vector(v0.x - v1.x, v0.y - v1.y);
  }

  /**
   * 点乘
   * @param {Vector} v0
   * @param {Vector} v1
   */
  static dot(v0, v1) {
    return v0.x * v1.x + v0.y * v1.y;
  }

  /**
   * 单位化向量
   * @param {Vector} v
   */
  normalize(v = new Vector()) {
    const mag = v.mag();
    if (mag !== 0 && mag !== 1) {
      v.x /= mag;
      v.y /= mag;
    }
    return v;
  }

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * @param {Vector} v
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /**
   * @param {Vector} v
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /**
   * 点乘
   * @param {Vector} v
   */
  dot(v) {
    return this.x * v.x
  }

  /**
   * 乘标量
   * @param {Number} v
   */
  mult(v) {
    this.x *= v;
    this.y *= v;
    return this;
  }

  /**
   * 单位化向量
   */
  normalize() {
    const mag = this.mag();
    if (mag !== 0 && mag !== 1) {
      this.x /= mag;
      this.y /= mag;
    }
    return this;
  }

  /**
   * @return {Number} 向量的方向(弧度)
   */
  heading() {
    const angle = Math.atan2(-this.y, this.x);
    return -angle;
  }

  /**
   * @param {Number} max 向量最大长度
   */
  limit(max) {
    const mag = this.mag();
    if (mag > max) {
      this.x *= max / mag;
      this.y *= max / mag;
    }
    return this;
  }

  /**
   * @return {Number} 向量长度
   */
  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  get length() {
    return this.mag();
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }
};
