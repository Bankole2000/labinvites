<?php 
session_start();

  if(isset($_POST["action"]))
  {
    require_once('connect.php');
    if($_POST["action"] == "newLogin")
    {
      $sql = "SELECT * FROM admin WHERE email = '{$_POST['email']}' AND pass = '{$_POST['pass']}' LIMIT 1";
      $sql2 = "UPDATE admin SET last_login = NOW() WHERE email = '{$_POST['email']}'";
      $result = $db->query($sql);
      if($result->num_rows === 1) {
        $db->query($sql2);
        while($row = $result->fetch_array()){
          $data["firstname"] = $row["firstname"];
          $data["lastname"] = $row["lastname"];
          $data["email"] = $row["email"];
          $data["pass"] = $row["pass"];
          $data["role"] = $row["role"];
          $data["id"] = $row["user_id"];
          $data["message"] = "success";   
          $data["gravatar"] =  md5( strtolower( trim( $row["email"] ) ) );       
        }
        echo(json_encode($data));
      } elseif ($result->num_rows === 0) {
        $data["message"] = "failed";
        echo(json_encode($data));
      }
    }
  }


?>