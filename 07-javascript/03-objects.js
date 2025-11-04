let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  if (key in result) delete result[key];
  else key = "Item does not exist!";
  // return the value from result that is associated with key
  return key;
};

const lookupItem = (key) => {
  if (key in result) key = result[key];
  else key = "Item does not exist!";
  // return the value from result that is associated with key
  return key;
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas

  // get array length
  array = Object.keys(result);
  array_length = array.length;

  // setup new string
  string = "";

  //for every item (except for last, add to the new string w/ a comma)
  for (let i = 0; i < array_length - 1; ++i) {
    string = string.concat(array[i] + ", ");
  }

  // for the last item, do not add a comma
  string = string.concat(array[array_length - 1]);

  return string;
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
