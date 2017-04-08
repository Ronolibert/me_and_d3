/**
*@description create a scale with a domain and range to determine where data falls on scale. Provide values from our domain and mapping to our range
*@function domain and range
*@param {Array}  - 2 or more elements, if given non-number they will be coerced * into numbers (i.e. colors will be turned into respective rgb value)
*@function clamp
*@param {Boolean} - To restrict the output value from exceeding the range (i.e. * extra credit or negative values)
*/
const linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1])
    .clamp(true);


/**
*@return {Number} - Everything is proportionally mapped from input domain to our * output range
*/
console.log(linearScale(0));
console.log(linearScale(50)); // 0.5
console.log(linearScale(100)); // 1

/**
 * @description Provide values from our range and mapping it to our domain
 */
console.log(linearScale.invert(0.5));