<?php
session_start();

  if (isset($_POST["action"])) 
  {
    require_once('connect.php');

    if($_POST["action"] == "getEvents") 
    { 
      $page = $_POST["page"];
      $limit = 6;
      $sqlCount = "SELECT * FROM events";
      $resultCount = $db->query($sqlCount);
      $total = $resultCount->num_rows;
      $no_of_pages = $total > 0 ? ceil( $total / $limit ) : 0 ;
      $start_from = ($page-1) * $limit;
      $events_arr = array();
      $events_arr["page"] = array (
        'curr_page' => $page,
        'no_of_pages' => $no_of_pages,
        'total' => $total
      );
      $sql = "SELECT * FROM events JOIN event_type ON events.event_type_id = event_type.event_type_id  ORDER BY events.date_posted DESC LIMIT $start_from , $limit";
      $result = $db->query($sql);
      if($result->num_rows > 0){
        
        $events_arr['data'] = array();
        
        while($row = $result->fetch_array()) {
          extract($row);
          $event_item = array(
            'event_id' => $event_id,
            'event_type_id' => $event_type_id,
            'type_name' => $type_name,
            'title' => $title, 
            'venue' => $venue, 
            'is_single_day' => $is_single_day,
            'from_date' => $from_date, 
            'to_date' => $to_date,
            'features' => $features,
            'image_url' => $image_url,
            'date_posted' => $date_posted 
            );
          array_push($events_arr['data'], $event_item);
        }
        $events_arr['message'] = 'success';
        echo json_encode($events_arr);
      } else {
        // No Events
        $events_arr['message'] = 'failed';
        echo json_encode($events_arr);
        
      }
    }

    if($_POST["action"] == "getSingleEvent")
    {
      $sql = "SELECT * FROM events JOIN event_type ON events.event_type_id = event_type.event_type_id  WHERE events.event_id = '{$_POST['eventId']}'  LIMIT 1";
      $result = $db->query($sql);
      if($result->num_rows === 1) {
        while($row = $result->fetch_array()) {
          extract($row);
          $singleEvent = array(
            'event_id' => $event_id,
            'event_type_id' => $event_type_id,
            'type_name' => $type_name,
            'title' => $title, 
            'venue' => $venue, 
            'is_single_day' => $is_single_day,
            'from_date' => $from_date, 
            'to_date' => $to_date,
            'features' => $features,
            'image_url' => $image_url,
            'date_posted' => $date_posted,
            'message' => 'success', 
          );
          
        }
        echo json_encode($singleEvent);
      }else {
        $singleEvent['message'] = 'failed';
        echo json_encode($singleEvent);
      }
    }

    if($_POST["action"] == "getEventType") 
    {
      $sql = "SELECT * FROM event_type ORDER BY event_type_id";
      $result = $db->query($sql);
      if($result->num_rows > 0)
      {
        $event_type_arr = array();
        $event_type_arr['data'] = array();
        while ($row = $result->fetch_array()) {
          extract($row);
          $event_type_item = array(
            'event_type_id' => $event_type_id,
            'type_name' => $type_name,
            );
          array_push($event_type_arr['data'], $event_type_item);
        }
        $event_type_arr['message'] = 'success';
        echo json_encode($event_type_arr);
      } else {
        $event_type_arr['message'] = 'failed';
        echo json_encode($event_type_arr);
      }

    }

    if($_POST["action"] == "addEventType")
    {
      $sql = "INSERT INTO event_type (type_name, date_added) VALUES ('{$_POST['typeName']}',NOW())";
      $result = $db->query($sql);
      $result ? $data['message'] = 'success' : $data['message'] = 'failed';
      echo json_encode($data);
    }

    if($_POST["action"] == "addEvent")
    {

      $_POST['isSingleDay'] == "true" ? $_POST['isSingleDay'] = 0 : $_POST['isSingleDay'] = 1;
      $_POST['endDate'] == "undefined" ? $_POST['endDate'] = "0000-00-00 00:00:00" : $_POST['endDate'] = $_POST['endDate'];
      $features = mysqli_real_escape_string($db, $_POST['features']);
      // $sql = "INSERT INTO events (event_type_id, title, venue, from_date, features, image_url, date_posted) VALUES ('{$_POST['typeId']}','{$_POST['title']}','{$_POST['venue']}','{$_POST['startDate']}','{$_POST['features']}','{$_POST['imageURL']}', NOW())";
      $sql = "INSERT INTO events (event_type_id, title, venue, is_single_day, from_date, to_date, features, image_url, date_posted) VALUES ('{$_POST['typeId']}','{$_POST['title']}','{$_POST['venue']}','{$_POST['isSingleDay']}','{$_POST['startDate']}','{$_POST['endDate']}','$features','{$_POST['imageURL']}', NOW())";
      $result = $db->query($sql);
      $result ? $data['message'] = 'success' : $data['message'] = var_dump($result);
      echo json_encode($data);
    }

    if($_POST["action"] == "getEventList")
    {
      $sql = "SELECT event_id, title FROM events ORDER BY date_posted DESC";
      $result = $db->query($sql);
      if($result->num_rows > 0 )
      {
        $events_arr = array();
        $events_arr['data'] = array();
        
        while($row = $result->fetch_array()) {
          extract($row);
          $event_item = array(
            'event_id' => $event_id,
            'title' => $title, 
            );
          array_push($events_arr['data'], $event_item);
        }
        $events_arr['message'] = 'success';
        echo json_encode($events_arr);
      } else {
        // No Events
        $events_arr['message'] = 'failed';
        echo json_encode($events_arr);
        
      }
    }

    if($_POST["action"] == "deleteEvent")
    {
      $sql = "DELETE FROM events WHERE event_id = '{$_POST['eventId']}'";
      $result = $db->query($sql);
      if($result){
        $data["message"] = "success";
      } else {
        $data["message"] = "failed";
      }
      echo json_encode($data);
    }
  }

?>