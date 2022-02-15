<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Registration Form</title>
	<link rel="stylesheet" href="styles.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script defer type="module" src="vaccine_register.js"></script>
</head>
<body>

<div class="container">
    <div id="title" class="title">
      University Vaccination Drive Registration
    </div>
    <form  id="register_form" class="form">
       <div id="error"></div>
       <div class="inputContainer">
          <label for="name">Name</label>
          <input type="text"  id='name' name= 'name' class="input" required autofocus>
       </div>  
       <div class="inputContainer">
            <label for='email'>Email Address</label>
            <input id="email" name="email" type="email" required class="input">
        </div>
        <div class="inputContainer">
            <label for='student_id'>Student Id</label>
            <input id="student_id" name="student_id" type="number" class="input" required>
        </div>
        <div class="inputContainer">
            <label for='password'>Password</label>
            <input id="password" name="password" type="password" required class="input">
        </div>   
       <div class="inputContainer">
            <label for="phone">Contact Number</label>
            <input id="phone" name="phone" type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
            placeholder="666-666-6666" class="input">
        </div> 
       <div class="inputContainer">
            <label for="vaccine_date">Date</label>
            <div class="custom_select">
            <select name="vaccine_date" id="vaccine_date" required>
                <option value="Sept 10">Sept 10</option>
                <option value="Sept 30">Sept 30</option>
            </select>
            </div>
        </div>
        <div class="inputContainer">
            <label for="vaccine_time">Select Time Slot</label>
            <div class="custom_select">
            <select name="vaccine_time" id="vaccine_time" required>
                <option value="12pm-2pm">12pm-2pm</option>
                <option value="2pm-4pm">2pm-4pm</option>
            </select>
            </div>
        </div>
        <div class="vaccine" >
            <label>Select the vaccine which you want to take:</label>
            <br>
            <input type="radio" id="pfizer" name="vaccine_name" value="Pfizer" required class="radioinput">
            <label for="pfizer">Pfizer</label><br>
            <input type="radio" id="moderna" name="vaccine_name" value="Moderna" required class="radioinput">
            <label for="moderna">Moderna</label><br>
            <input type="radio" id="jj" name="vaccine_name" value="Jhonson & Jhonson" required class="radioinput">
            <label for="jj">J & J</label>
          </div> 
          <div class="inputContainer">
            <label for="vaccine_dose">Vaccine Dose</label>
            <div class="custom_select">
            <select name="vaccine_dose" id="vaccine_dose" required>
                <option value="1">1st dose</option>
                <option value="2">2nd dose</option>
            </select>
            </div>
        </div>
      <div class="inputContainer">
          <label>Address</label>
          <textarea class="textarea" type="text" id="address"></textarea>
       </div> 
      <div class="inputContainer">
          <label>Zip Code</label>
          <input type="text" class="input" type="number" id="zipcode">
       </div> 
      <div class="inputContainer terms">
          <label class="check">
            <input type="checkbox" id="termscheck" required>
            <span class="checkmark"></span>
          </label>
          <p>I agree that I have provided correct information</p>
       </div> 
      <div class="inputContainer">
        <button id="reset" class="resetbtn">Reset</button>
        <input type="submit" value="Register" class="btn">
      </div>
    </form>
    <div id="afterRegister">
       <label id="displayMsg"></label>
       <br>
       <div id="sameZipcodeCenters">
       </div>
    </div>
</div> 
</div>	
	
</body>
</html>
    