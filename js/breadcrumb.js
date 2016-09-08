// JavaScript Document

function doBreadcrumb(location)
{
	var str = "";
	
	str += "<strong>You are here</strong>: ";
	
	if (location == "home")
	{
		str += " Home";
	}
	else if (location == "about")
	{
		str += " <a href='../index.html'>Home</a> &#x27a4 About";
	}
	else if (location == "services")
	{
		str += " <a href='../index.html'>Home</a> &#x27a4 Services";
	}
	else if (location == "products")
	{
		str += " <a href='../index.html'>Home</a> &#x27a4 Products";
	}
	else if (location == "training")
	{
		str += " <a href='../index.html'>Home</a> &#x27a4 Training";
	}
	else  //(location == "contact")
	{
		str += " <a href='../index.html'>Home</a> &#x27a4 Contact";
	}
	
	document.getElementById("breadcrumb_trail").innerHTML = str;	
}