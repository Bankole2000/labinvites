// Get URL query string
// Assuming "?post=1234&action=edit"
var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"

//  URLSearchParams also provides familiar Object methods like keys(), values(), and entries():
var keys = urlParams.keys();
for(key of keys) { 
  console.log(key); 
}
// post
// action

var values = urlParams.values();
for(value of values) { 
  console.log(value); 
}
// 123
// edit


var entries = urlParams.entries();
for(pair of entries) { 
  console.log(pair[0], pair[1]); 
}
// post 123
// action edit

// function to get query string
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

//  example use
getUrlParameter('post'); // "1234"
getUrlParameter('action'); // "edit"


// Working with DateTime Input
new Date(input.value).toISOString();

Date.prototype.toDatetimeLocal =
  function toDatetimeLocal() {
    var
      date = this,
      ten = function (i) {
        return (i < 10 ? '0' : '') + i;
      },
      YYYY = date.getFullYear(),
      MM = ten(date.getMonth() + 1),
      DD = ten(date.getDate()),
      HH = ten(date.getHours()),
      II = ten(date.getMinutes()),
      SS = ten(date.getSeconds())
    ;
    return YYYY + '-' + MM + '-' + DD + 'T' +
             HH + ':' + II + ':' + SS;
  };

Date.prototype.fromDatetimeLocal = (function (BST) {
  // BST should not be present as UTC time
  return new Date(BST).toISOString().slice(0, 16) === BST ?
    // if it is, it needs to be removed
    function () {
      return new Date(
        this.getTime() +
        (this.getTimezoneOffset() * 60000)
      ).toISOString();
    } :
    // otherwise can just be equivalent of toISOString
    Date.prototype.toISOString;
}('2006-06-06T06:06'));
var dateInput = 
`<form>
    <label for="party">Enter a date and time for your party booking:</label>
    <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30">
  </form>`;