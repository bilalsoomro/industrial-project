<?php
class Reading {
 
    // database connection and table name
    private $conn;
    private $table_name = "Readings";
 
    // object properties
    public $id;
    public $timestamp;
    public $type_id;
    public $type_name;
    public $value;
    public $unit;
 
    // constructor with $db as database connection
    public function __construct($db) {
        $this->conn = $db;
    }

    // read Readings
    function read() {
 
        // select all query
        $query = "SELECT
                id, timestamp, type_id, type_name, value, unit
            FROM
                " . $this->table_name;
 
        // prepare query statement
        $stmt = $this->conn->prepare($query);
 
        // execute query
        $stmt->execute();
 
        return $stmt;
    }
}