/**
 * Converts an array into a hashmap
 * @param {Array<Object>} arr array of objects to make hashmap
 * @param {string} key key of object whose value will be used for hashing
 * @returns an object having order of array items and a hashmap object
 */
export function toHashMap(arr, key) {
  // const order = [];

  // const map = arr.reduce((result, item) => {
  //   result[item[key]] = item;
  //   order.push(item[key]);
  //   return result;
  // }, {});

  const order=[];
  const map={};

  arr.forEach(item=>{
    const id=item.id;
    map[id]=item;
    order.push(id);
  })

  return { order, map };
}

/**
 * Convets a hashmap into an array
 * @param {Object} hashMap hashmap to be converted into an array
 * @param {string[]} order array of keys to retrieve items in correct order
 * @returns an array of items
 */
export function arrayFromHashMap(hashMap, order) {
  return order.map((key) => hashMap[key]);
}
