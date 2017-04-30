<?php



include ('database_connection.php');
if (isset($_POST['formsubmitted'])) {
    $error = array();//Declare An Array to store any error message  
    if (empty($_POST['name'])) {//if no name has been supplied 
        $error[] = 'Please Enter a name ';//add to array "error"
    } else {
        $name = $_POST['name'];//else assign it a variable
    }

    if (empty($_POST['e-mail'])) {
        $error[] = 'Please Enter your Email ';
    } else {


        if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-z])+([a-z.]+)+$/", $_POST['e-mail'])) {
           //regular expression for email validation
            $Email = $_POST['e-mail'];
        } else {
             $error[] = 'Your EMail Address is invalid  ';
        }


    }


    if (empty($_POST['mobile'])) {
        $error[] = 'Please Enter Valid Mobile Number ';
    } else {
        
if( preg_match("/^[0-9]{10}/", $_POST['mobile'])){
$mobile = $_POST['mobile'];

  }

 else {

  $error[] = 'Your Mobile No is invalid  ';
 }
}

if (empty($_POST['dept'])) {
        $error[] = 'Please Enter Your Department Name  ';
    } else {
        $dept = $_POST['dept'];
    }
if (empty($_POST['college'])) {
        $error[] = 'Please Enter Your College Name ';
    } else {
        $college = $_POST['college'];
    }
	if(!isset($_POST['events']))
	{
	$error[]= 'Please select an event';
	}
	else
	{
	$events= join(",",$_POST['events']);
	}


    if (empty($error)) //send to Database if there's no error '

    { // If everything's OK...

        // Make sure the email address is available:
        $query_verify_email = "SELECT * FROM table_name WHERE Email ='$Email'";
        $result_verify_email = mysqli_query($dbc, $query_verify_email);
        if (!$result_verify_email) {//if the Query Failed ,similar to if($result_verify_email==false)
            echo ' Database Error Occured ';
        }

        if (mysqli_num_rows($result_verify_email) == 0) { // IF no previous user is using this email .


            // Create a unique  activation code:
            $activation = md5(uniqid(rand(), true));


            $query_insert_user = "INSERT INTO table_name ( `id`,`name`, `Email`, `mobile`,`dept`,`college`,`Activation`,`events`) VALUES ('','$name', '$Email', '$mobile','$dept','$college','$activation','$events')";


            $result_insert_user = mysqli_query($dbc, $query_insert_user);

            if (mysqli_affected_rows($dbc) == 1) { //If the Insert Query was successfull.


                // Send the email:
                $message = " To activate your account, please click on this link:\n\n";
                $message .= WEBSITE_URL . '/activate.php?email=' . urlencode($Email) . "&key=$activation";
                mail($Email, 'Registration Confirmation', $message, 'From: prozilos.com');

                // Flush the buffered output.


                // Finish the page:
                echo '<div class="success">Thank you for
registering! A confirmation email
has been sent to '.$Email.' Please click on the Activation Link to Activate your registration </div>';


            } else { // If it did not run OK.
                echo '<div class="errormsgbox">You could not be registered due to a system
error. We apologize for any
inconvenience.</div>';
            }

        } else { // The email address is not available.
            echo '<div class="errormsgbox" >That email
address has already been registered.
</div>';
        }

    } else {//If the "error" array contains error msg , display them
        
        

echo '<div class="errormsgbox"> <ol>';
        foreach ($error as $key => $values) {
            
            echo '	<li>'.$values.'</li>';


       
        }
        echo '</ol></div>';

    }
  
    mysqli_close($dbc);//Close the DB Connection

} // End of the main Submit conditional.



?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registration Form</title>


    
    
    
<style type="text/css">
body {
	font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
	font-size:12px;
}
.registration_form {
	margin:0 auto;
	width:500px;
	padding:14px;
}
label {
	width: 10em;
	float: left;
	margin-right: 0.5em;
	display: block
}
.submit {
	float:right;
}
fieldset {
	background:#EBF4FB none repeat scroll 0 0;
	border:2px solid #B7DDF2;
	width: 500px;
}
legend {
	color: #fff;
	background: #80D3E2;
	border: 1px solid #781351;
	padding: 2px 6px
}
.elements {
	padding:10px;
}
p {
	border-bottom:1px solid #B7DDF2;
	color:#666666;
	font-size:11px;
	margin-bottom:20px;
	padding-bottom:10px;
}
a{
    color:#0099FF;
font-weight:bold;
}

/* Box Style */


 .success, .warning, .errormsgbox, .validation {
	border: 1px solid;
	margin: 0 auto;
	padding:10px 5px 10px 50px;
	background-repeat: no-repeat;
	background-position: 10px center;
     font-weight:bold;
     width:450px;
     
}

.success {
   
	color: #4F8A10;
	background-color: #DFF2BF;
	background-image:url('images/success.png');
}
.warning {

	color: #9F6000;
	background-color: #FEEFB3;
	background-image: url('images/warning.png');
}
.errormsgbox {
 
	color: #D8000C;
	background-color: #FFBABA;
	background-image: url('images/error.png');
	
}
.validation {
 
	color: #D63301;
	background-color: #FFCCBA;
	background-image: url('images/error.png');
}



</style>

</head>
<body>


<form action="register.php" method="post" class="registration_form">
  <fieldset>
    <legend>Registration Form </legend>
    
    <div class="elements">
      <label for="name">Name :</label>
      <input type="text" id="name" name="name" size="25" />
    </div>
    <div class="elements">
      <label for="e-mail">E-mail :</label>
      <input type="text" id="e-mail" name="e-mail" size="25" />
    </div>
    <div class="elements">
      <label for="mobile">Mobile:</label>
      <input type="text" id="mobile" name="mobile" size="25" />
    </div>
<div class="elements">
      <label for="dept">Department:</label>
      <input type="text" id="dept" name="dept" size="25" />
    </div>
<div class="elements">
      <label for="college">College:</label>
      <input type="text" id="college" name="college" size="25" />
    </div>
    <div class="submit">
     <input type="hidden" name="formsubmitted" value="TRUE" />
      <input type="submit" value="Register" />
    </div>
	<div class="elements">
	<input type="checkbox" name="events[]" value="Paper Presentation" class="rounded">Paper Presentation<br>
    <input type="checkbox" name="events[]" value="Programming Debugging">Code X<br>
    <input type="checkbox" name="events[]" value="Technical Quiz">Tech Quiz<br>
    <input type="checkbox" name="events[]" value="Googler">Googler<br>
    <input type="checkbox" name="events[]" value="Olympiad">Olympiad<br>
    <input type="checkbox" name="events[]" value="Gaming">Blitzkrieg<br>
    <input type="checkbox" name="events[]" value="Short Film">Shot a Short<br>
    <input type="checkbox" name="events[]" value="Minute To Win It">Minute To Win It<br>
    <input type="checkbox" name="events[]" value="Doodle It">Doodle It<br>
    <input type="checkbox" name="events[]" value="Gully Cricket">Gully Cricket<br>
    <input type="checkbox" name="events[]" value="Android">Android Jelly Bean (Workshop)<br>
    <input type="checkbox" name="events[]" value="python">Python Programming (workshop)
</div>
  </fieldset>
</form>
</body>
</html>
