<?php

require "connect.php";

$data = json_decode(file_get_contents('php://input') , true);
$monhoc = $data['MonHoc'];
$hocphi = $data['HocPhi'];



$query = "INSERT INTO khoahoc VALUES(null , '$monhoc' , '$hocphi' )";

if(mysqli_query($connect , $query)){
	
	echo "success";
}else{
	
	echo "error";
}

?>
