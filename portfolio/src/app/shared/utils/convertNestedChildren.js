const getNestedChildren = (arr, parent) => {
    let nested = [];
    
    for (let i in arr) {
      if (arr[i].ParentId == parent) {
        let children = getNestedChildren(arr, arr[i].id);
        if (children.length) {
          arr[i].children = children;
        }
        nested.push(arr[i]);
      }
    }
    return nested;
  };
  
  module.exports = function convertNestedChildren(arr, parent) {
    
    let arrAux = arr.map((item) => {
      if (!item.ParentId) {
        item.ParentId = 0;
      }
      return item;
    });
    return getNestedChildren(arrAux, parent)
  };