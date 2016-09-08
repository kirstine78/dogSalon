// JavaScript Document

function submitMessage()
{
	//variables
	var str = "";
	
	var name;
	var email;
	var message;
	
	name = document.getElementById("name_input").value;
	name = name.trim();
	
	if (name.length < 2)
	{
		//error msg
		str += "Please enter valid name (at least 2 characters)";		
	}
	else
	{
		email = document.getElementById("email_input").value;
		email = email.trim();
		
		if (email.length == 0)
		{
			//error msg
			str += "Please enter an e-mail";	
		}
		else
		{
			//email ok
			message = document.getElementById("message_input").value;
			message = message.trim();
			
			if (message.length == 0)
			{
				//error msg
				str += "Please enter a message";
			}
			else
			{
				str += "Your message was sent";
			}
		}
	}
	alert(str);	
}
