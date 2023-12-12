<?php
	$firstName = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	echo "ez";
	// // Database connection
	$conn = new mysqli('localhost','root','@Saad1234','nextgears');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into users(username, password, email) values(?, ?, ?)");
		$stmt->bind_param("sss", $firstName, $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
