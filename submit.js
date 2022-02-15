"use strict";

var username = document.getElementById("farmerName");
var email = document.getElementById("email");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var zipcode = document.getElementById("pincode");

const registerForm = document.getElementById("registerationform");
const reset = document.getElementById('reset'); 
const errorElement = document.getElementById('error');
const afterRegister = document.getElementById('afterRegister');
const title = document.getElementById('title');
const displayMsg = document.getElementById('displayMsg');

let userLocation;






// Get the modal
var modal = document.getElementById("displayDetailsId");
// Get the button that opens the modal
var btn = document.getElementById("submitbtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
submitbtn.onclick = function() {
//Begin API 
const apiEndPoint = "https://api.postalpincode.in/pincode/";
const submitCode = document.getElementById("submitbtn");


submitCode.addEventListener("click", getDetails);
async function getDetails() {
  try {
    if(username.value ==''|| email.value =='' || address.value =='' || phone.value =='' || zipcode.value == ''){
        let formValidation = document.getElementById("formValidation");
        formValidation.textContent = "*Please fill out the form.";
        //modal.style.display = "block";
      }
      else{
        const getPincode = document.getElementById("pincode");
        console.log(getPincode)
        const endPointValue = apiEndPoint + getPincode.value;
        const response = await fetch(endPointValue);
    
        if (!response.ok) {
            throw Error(response.statusText);
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = "Harvesters are not available for selected reason.";
        }
        const jsonData = await response.json();
        console.log(jsonData);
    
        console.log(jsonData[0].PostOffice[0].Name)
        console.log(jsonData[0].PostOffice[0].DeliveryStatus)
        console.log(jsonData[0].PostOffice[0].Circle)
        console.log(jsonData[0].PostOffice[0].District)
        console.log(jsonData[0].PostOffice[0].Country)
        
        getpostName(jsonData);
        getpostDeliveryStatus(jsonData);
        getpostCircle(jsonData);
        getpostDistrict(jsonData);
        getpostCountry(jsonData);

        let postDetails = document.getElementById("postDetails");
        postDetails.textContent = "Harvester Details for given information";
        //Display Popup
        modal.style.display = "block";
    
        localStorage.setItem(localStorage.length, "M")
        sessionStorage.setItem("Satya", "M")
      }

  } 
  
  catch (err) {
    console.log(err);
    //alert("");  
  }
}
  
  const getpostName = (jsonData) => {
    let postName = document.getElementById("postName");
    postName.textContent = `Name of the location: ${jsonData[0].PostOffice[0].Name}`;
  };
  const getpostDeliveryStatus = (jsonData) => {
    let postDeliveryStatus = document.getElementById("postDeliveryStatus");
    postDeliveryStatus.textContent = `Machine Status: ${jsonData[0].PostOffice[0].DeliveryStatus}`;
  };
  const getpostDistrict = (jsonData) => {
    const postDistrict = document.getElementById("postDistrict");
    postDistrict.textContent = `District: ${jsonData[0].PostOffice[0].District}`;
  };
  const getpostCircle = (jsonData) => {
    const postCircle = document.getElementById("postCircle");
    postCircle.textContent = `State: ${jsonData[0].PostOffice[0].Circle}`;
  };
  const getpostCountry = (jsonData) => {
    const postCountry = document.getElementById("postCountry");
    postCountry.textContent = `Country: ${jsonData[0].PostOffice[0].Country}`;
  };
//End API 



}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";


  localStorage.clear();
  sessionStorage.clear();
  username.value= '';
  email.value =  '';
  address.value =  '';
  phone.value =  '';
  zipcode.value =  '';
  let formValidation = document.getElementById("formValidation");
  formValidation.textContent = "";
}





registerForm.addEventListener('submit', (e)=> {
    let errorMsgs = []
    e.preventDefault();


    if (errorMsgs.length > 0) {
        // e.preventDefault()
        errorElement.innerText= errorMsgs.join(', ')
    } 
    else if (typeof(Storage) !== "undefined") {
            const userDetail = {
                username: username.value,
                email: email.value,
                studentId: studentId.value,
                phone: phone.value,
                address: address.value,
                zipcode: zipcode.value,
    }

}

})



// For reset btn functionality
//Arrow Function
reset.addEventListener("click", () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
        username.value= '';
        email.value =  '';
        address.value =  '';
        phone.value =  '';
        zipcode.value =  '';
        let formValidation = document.getElementById("formValidation");
        formValidation.textContent = "";
    }
})












