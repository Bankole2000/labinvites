// Get URL query string
// Assuming "?post=1234&action=edit"
var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has("post")); // true
console.log(urlParams.get("action")); // "edit"
console.log(urlParams.getAll("action")); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append("active", "1")); // "?post=1234&action=edit&active=1"

//  URLSearchParams also provides familiar Object methods like keys(), values(), and entries():
var keys = urlParams.keys();
for (key of keys) {
  console.log(key);
}
// post
// action

var values = urlParams.values();
for (value of values) {
  console.log(value);
}
// 123
// edit

var entries = urlParams.entries();
for (pair of entries) {
  console.log(pair[0], pair[1]);
}
// post 123
// action edit

// function to get query string
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//  example use
getUrlParameter("post"); // "1234"
getUrlParameter("action"); // "edit"

// Working with DateTime Input
new Date(input.value).toISOString();

// get ms format from
today = new Date();
ms = Date.parse(today); // Returns ms format
Date.prototype.toDatetimeLocal = function toDatetimeLocal() {
  var date = this,
    ten = function (i) {
      return (i < 10 ? "0" : "") + i;
    },
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  return YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + II + ":" + SS;
};

Date.prototype.fromDatetimeLocal = (function (BST) {
  // BST should not be present as UTC time
  return new Date(BST).toISOString().slice(0, 16) === BST
    ? // if it is, it needs to be removed
      function () {
        return new Date(
          this.getTime() + this.getTimezoneOffset() * 60000
        ).toISOString();
      }
    : // otherwise can just be equivalent of toISOString
      Date.prototype.toISOString;
})("2006-06-06T06:06");
var dateInput = `<form>
    <label for="party">Enter a date and time for your party booking:</label>
    <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30">
  </form>`;

// Check if an Image URL is valid or not
var checkImage = function (url) {
  console.log("1");
  var s = document.createElement("IMG");
  s.src = url;
  s.onerror = function () {
    console.log("file with " + url + " invalid");
    alert("file with " + url + " invalid");
  };
  s.onload = function () {
    console.log("file with " + url + " valid");
    alert("file with " + url + " valid");
  };
};
// Example
checkImage("url");

// Check if an image exists with jquery
function IsValidImageUrl(url) {
  $("<img>", {
    src: url,
    error: function () {
      alert(url + ": " + false);
    },
    load: function () {
      alert(url + ": " + true);
    }
  });
}

IsValidImageUrl("https://www.google.com/logos/2012/hertz-2011-hp.gif");
IsValidImageUrl("http://google.com");

// Another Example
$("#image_id").error(function () {
  alert("Image does not exist !!");
});

// Chaining multiple promises and fetch calls example
var url = "https://api.spacexdata.com/v2/launches/latest";

var result = fetch(url, {
  method: "get"
})
  .then(function (response) {
    return response.json(); // pass the data as promise to next then block
  })
  .then(function (data) {
    var rocketId = data.rocket.rocket_id;

    console.log(rocketId, "\n");

    return fetch("https://api.spacexdata.com/v2/rockets/" + rocketId); // make a 2nd request and return a promise
  })
  .then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });

// I'm using the result variable to show that you can continue to extend the chain from the returned promise
result.then(function (r) {
  console.log(r); // 2nd request result
});

// TOggle Full Screen in Javascript
screenfull.toggle();

// Handling Cookies In Javascript
// function to set cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function to get cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function to check cookie
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

// Handling Image Upload with JS
//  Gotten from this URL https://attacomsian.com/blog/uploading-files-using-fetch-api
<input type="file" id="avatar"></input>; // Html element
// select file input
const input = document.getElementById("avatar");

// add event listener
input.addEventListener("change", () => {
  uploadFile(input.files[0]);
});
// Function to upload file
const uploadFile = (file) => {
  // check file type
  if (
    !["image/jpeg", "image/gif", "image/png", "image/svg+xml"].includes(
      file.type
    )
  ) {
    console.log("Only images are allowed.");
    return;
  }

  // check file size (< 2MB)
  if (file.size > 2 * 1024 * 1024) {
    console.log("File must be less than 2MB.");
    return;
  }
  // add file to FormData object
  const fd = new FormData();
  fd.append("avatar", file);

  // send `POST` request
  fetch("/upload-avatar", {
    method: "POST",
    body: fd
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};

// Function to Generating UUIDs for items / transactions / products / users
function generateUUID() {
  // Public Domain/MIT
  var d3 = Date.now(); // Use this as d
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

const partition = (f) => (arr) =>
  arr.reduce(
    (res, x) => {
      switch (f(x)) {
        case false: {
          res[0].push(x);
          return res;
        }
        default: {
          res[1].push(x);
          return res;
        }
      }
    },
    [[], []]
  );
Array.prototype.reduce;

const isEven = (n) => n % 2 === 0;
const partEvens = partition(isEven);
partEvens([1, 2, 3, 4]);

function partition(f) {
  return function (arr) {
    return arr.reduce(
      function (res, x) {
        switch (f(x)) {
          case false: {
            res[0].push(x);
            return res;
          }
          default: {
            res[1].push(x);
            return res;
          }
        }
      },
      [[], []]
    );
  };
}

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var partEvens = partition(isEven);
