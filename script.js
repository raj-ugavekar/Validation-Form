
function validate()
	{	
	var firstname=document.getElementById("fname");
	var lastname=document.getElementById("lname");

    var add=document.getElementById("cadd");

    var state_selected= "";
    var a=document.getElementById("states");
    var state_selected=a.options[a.selectedIndex].value;

    var em=document.getElementById("email");
    var em_format= /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(\.[a-z]+)?$/;

    var pass=document.getElementById("password");
    var pass_format=/([a-zA-Z]{8})([0-9]{2})([!@#$%&*\.]{1})$/

    var date=document.getElementById("dob");

    var dog_breed= "";
    var x= document.getElementsByName("breed");
    for(var i=0;i<x.length;i++)
    {
        if(x[i].checked==true)
        {
            dog_breed=x[i].value;
        }
    }

    var food_brand= "";
    var y= document.getElementsByName("food");
    for(var i=0;i<y.length;i++)
    {
        if(y[i].checked==true)
        {
            food_brand=food_brand+" "+y[i].value;
        }
    }

    // Validations

    if(firstname.value.trim()=="")
    {
        alert("Please enter your First Name");
        return false;
    }
	if(lastname.value.trim()=="")
    {
        alert("Please enter your Last Name");
        return false;
    }

    else if(add.value.trim()=="")
    {
        alert("Please enter your Address");
        return false;
    }

    else if(state_selected=="")
    {
        alert("Select your state");
        return false;
    }

    else if(em.value.trim()=="")
    {
        alert("Please enter your Email address");
        return false;
    }

    else if(em_format.test(em.value)==false)
    {
        alert("Invalid Email address");
        return false;
    }

    else if(pass.value.trim()=="")
    {
        alert("Password cannot be empty");
        return false;
    }

    else if(pass_format.test(pass.value)==false)
    {
        alert("Password must contain atleast 8 characters, 2 numbers and 1 special character");
        return false;
    }

    else if(date.value=="")
    {
        alert("Please enter your DOB");
        return false;
    }

    else if(dog_breed=="")
    {
        alert("Please select your dog's breed");
        return false;
    }

    else if(food_brand=="")
    {
        alert("Please select food brand you pefer");
        return false;
    }


    // Print

    else
    {
        alert("Form validated successfully");
        document.write("Name: "+firstname.value+"<br>");
		document.write("Name: "+lastname.value+"<br>");
        document.write("Address: "+add.value+"<br>");
        document.write("State: "+state_selected+"<br>");
        document.write("DOB: "+date.value+"<br>");
        document.write("Dog's breed : "+dog_breed+"<br>");
        document.write("Food brands prefered : "+food_brand+"<br>");
        return true;
    }
}
		
function reset()
{
    firstname.value="";
    lastname.value="";
    add.value="";
    state_selected="";
    date.value="";
    dog_breed="";
    food_brand="";
}

