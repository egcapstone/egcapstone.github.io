function startLiveUpdate(){
	const textHeadCount = document.getElementById('headCount');
	const textExceed = document.getElementById('exceed');
	
	setInterval(function(){
		fetch('https://thingproxy.freeboard.io/fetch/http://188.166.206.43:8080/YeaI5w0Tqlrr4wfL3YdAZ_GcUqCYs9le/get/V0').then(function(response){
			return response.json();
			}).then(function(data){
				textHeadCount.textContent = data;
				if (data > 30){
					textExceed.textContent = "The number of people have exceeded!";
				}
				else {
					textExceed.textContent = "Within Limit!";
				}
			}).catch(function(error){
				console.log(error);
			})
		}, 5000);
	}	
