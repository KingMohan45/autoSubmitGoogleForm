/*
	Hope this works...
*/
if(document.getElementsByClassName('appsMaterialWizButtonPaperbuttonLabel')[0].childNodes[0].textContent=="Submit")
{
	var node = document.createElement("div");
	node.setAttribute("id", "counterDiv");
	node.setAttribute("align", "center");
	node.innerHTML="<p id='counter' style='color:white;margin:5px;font-size:20px;'></p>";
	document.body.appendChild(node);
	node.style.cssText="position:fixed;top:0px;left:0px;width:100%;";
	let timeInput=prompt("HH:MM in 24hr format Ex: 13:30~1:30 PM")
	var a=timeInput.split(":")
	var now = new Date();
	var remainingTime=new Date(now.getFullYear(), now.getMonth(), now.getDate(), a[0], a[1], 0, 0) - now-3000
	if(remainingTime<0)
	{
		alert("Please refresh the page and enter Upcoming time");
	}
	else
	{
		if(remainingTime<60000)
		{
			node.style.backgroundColor="rgb(248, 0, 0)";
		}
		else if(remainingTime<300000)
		{
			node.style.backgroundColor="rgb(216, 184, 14)";
			setTimeout(()=>{
				node.style.backgroundColor="rgb(248, 0, 0)";
			},remainingTime-60000)
		}
		else
		{	
			node.style.backgroundColor="rgb(21, 146, 17)"
			setTimeout(()=>{
				node.style.backgroundColor="rgb(248, 0, 0)";
			},remainingTime-60000)
			setTimeout(()=>{
				node.style.backgroundColor="rgb(216, 184, 14)";
			},remainingTime-300000)
		}
		function updateTime()
		{
			remainingTime-=1000;
			document.getElementById('counter').textContent=Math.floor(remainingTime/60000)+":"+Math.floor((remainingTime/1000)%60)
		}
		let interval=setInterval(updateTime,1000);
		setTimeout(()=>{
			clearInterval(interval);
			document.getElementsByClassName('appsMaterialWizButtonPaperbuttonLabel')[0].click();
		},remainingTime)
	}
}
else
{
	alert("Sunmit button isn't identified :(");
}
