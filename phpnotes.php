<?php

// Compression of uploaded images example 1

if(isset($_POST['upload'])){

  // Getting file name
  $filename = $_FILES['imagefile']['name'];
 
  // Valid extension
  $valid_ext = array('png','jpeg','jpg');

  // Location
  $location = "images/".$filename;

  // file extension
  $file_extension = pathinfo($location, PATHINFO_EXTENSION);
  $file_extension = strtolower($file_extension);

  // Check extension
  if(in_array($file_extension,$valid_ext)){

    // Compress Image
    compressImage($_FILES['imagefile']['tmp_name'],$location,60);

  }else{
    echo "Invalid file type.";
  }
}

// Compress image
function compressImage($source, $destination, $quality) {

  $info = getimagesize($source);

  if ($info['mime'] == 'image/jpeg') 
    $image = imagecreatefromjpeg($source);

  elseif ($info['mime'] == 'image/gif') 
    $image = imagecreatefromgif($source);

  elseif ($info['mime'] == 'image/png') 
    $image = imagecreatefrompng($source);

  imagejpeg($image, $destination, $quality);

}

// How to get Server Request Method
$_SERVER['REQUEST_METHOD'];
// Example 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // The request is using the POST method
}
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'POST') {
    // Method is POST
} elseif ($method == 'GET') {
    // Method is GET
} elseif ($method == 'PUT') {
    // Method is PUT
} elseif ($method == 'DELETE') {
    // Method is DELETE
} else {
    // Method unknown
}

// Another Idea is to have a hidden input field with the "_METHOD" Value
echo "
<!-- DELETE method -->
<form action='' method='POST'>
    <input type='hidden' name'_METHOD' value='DELETE'>
</form>

<!-- PUT method -->
<form action='' method='POST'>
    <input type='hidden' name'_METHOD' value='PUT'>
</form>";

// Another Idea is to use a Switch Statement 
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
case 'GET':
  //Here Handle GET Request 
  break;
case 'POST':
  //Here Handle POST Request 
  break;
case 'DELETE':
  //Here Handle DELETE Request 
  break;
case 'PUT':
  //Here Handle PUT Request 
  break;
}
// Handling Put Requests
if($_SERVER['REQUEST_METHOD'] == 'GET') {
  echo "this is a get request\n";
  echo $_GET['fruit']." is the fruit\n";
  echo "I want ".$_GET['quantity']." of them\n\n";
} elseif($_SERVER['REQUEST_METHOD'] == 'PUT') {
  echo "this is a put request\n";
  parse_str(file_get_contents("php://input"),$post_vars);
  echo $post_vars['fruit']." is the fruit\n";
  echo "I want ".$post_vars['quantity']." of them\n\n";
}

// Parse URL in PHP
<?php 
  
// Declare a variable and initialize it with URL 
$url = 'http://geeksforgeeks.org/php/#basics'; 
  
// Use parse_url() function to parse the URL 
var_dump(parse_url($url)); 
var_dump(parse_url($url, PHP_URL_SCHEME)); 
  // returns 
  array(4) {
    ["scheme"]=>
    string(4) "http"
    ["host"]=>
    string(17) "geeksforgeeks.org"
    ["path"]=>
    string(5) "/php/"
    ["fragment"]=>
    string(6) "basics"
  }
  string(4) "http"
?> 

?>