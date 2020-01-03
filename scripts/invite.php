<?php 
session_start();

  if (isset($_POST["action"])) 
  {
    require_once('connect.php');

    if($_POST["action"] == "sendSingleInvite") 
    {

    }
    
    if ($_POST["action"] == "sendMultipleInvite")
    {

    }

    if ($_POST["action"] == "getInvites")
    {
      
    }
  }
?>