<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/reading.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$reading = new Reading($db);
 
// query readings
$stmt = $reading -> read();
$num = $stmt -> rowCount();
 
// check if more than 0 record found
if($num > 0){
 
    // products array
    $readings_arr = array();
    $readings_arr["records"] = array();
 
    // retrieve our table contents
    while ($row = $stmt -> fetch(PDO::FETCH_ASSOC)) {

        // extract row
        extract($row);
 
        $reading_item = array(
            "id" => $id,
            "timestamp" => $timestamp,
            "type_id" => $type_id,
            "type_name" => $type_name,
            "value" => $value,
            "unit" => $unit
        );
 
        array_push($readings_arr["records"], $reading_item);
    }
 
    echo json_encode($readings_arr);
}
 
else {
    echo json_encode(
        array("message" => "No readings found.")
    );
}
?>