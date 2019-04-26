
let postApplicationForm = document.getElementById("postAppForm");
postApplicationForm.addEventListener("submit", function(event){
 event.preventDefault();
    let AppName = postApplicationForm.name.value;
    let date = new Date(postApplicationForm.RequiredDate.value);
    let AppNumber = postApplicationForm.phonenumber.value;

   if (AppName == ''|| date == '' || AppNumber =='' ) {
        alert("Please kindly fill the Renting form, ACCORDINGLY !!");
    }

    let projectList = document.getElementById("varcancy_list");    
    let fullProjectDetails = ["Applicant name: "+AppName, 
								" \nRequired date : " + date, 
								" \nPhone Number : " + AppNumber];
    localStorage.setItem("1", fullProjectDetails); 

    let pro = document.createElement("a");
    pro.setAttribute("class", "name");
    pro.setAttribute("href" , "ApplicationDetail.html");
    
    
    var vacapost = document.createTextNode(AppName);
    projectList.appendChild(pro);
    pro.appendChild(vacapost);
    postApplicationForm.reset();
	
	alert('Submition Successful');
}
);


