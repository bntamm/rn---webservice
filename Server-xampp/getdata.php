<?php


require "connect.php";

$query = "SELECT * FROM khoahoc";

$data = mysqli_query($connect , $query);




class KhoaHoc{
	function KhoaHoc($id , $monhoc , $hocphi ){
		$this -> ID 		= $id;
		$this -> MonHoc 		= $monhoc;
		$this -> HocPhi 	= $hocphi;
		
	}
}


$mangMonHoc = array();


while($row = mysqli_fetch_assoc($data)){
array_push($mangMonHoc, new KhoaHoc($row['id'], $row['monhoc'], $row['hocphi']));
}



echo json_encode($mangMonHoc);
?>