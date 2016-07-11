/**
 * Created by championswimmer on 11/07/16.
 */

const color = "red";
const taste = "sweet";

module.exports = function (fruitColor, fruitTaste, fruitSkinColor = fruitColor) {
    if (fruitColor == null || fruitColor == undefined) {
        this.color = color;
    } else {
        this.color = fruitColor;
    }
    this.taste = "sweet";
};