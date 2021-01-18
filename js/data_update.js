function startLiveUpdate(){
	const textHeadCount = document.getElementById('headCount');
	const textExceed = document.getElementById('exceed');
	const textLimit = document.getElementById('limit');
	
	fetch('https://ancient-lab-fced.egcapstone.workers.dev/?http://blynk-cloud.com/YeaI5w0Tqlrr4wfL3YdAZ_GcUqCYs9le/get/V1').then(function(response){
			return response.json();
			}).then(function(data){
				textLimit.textContent = data;
			}).catch(function(error){
				console.log(error);
			})
	
	setInterval(function(){
		fetch('https://ancient-lab-fced.egcapstone.workers.dev/?http://blynk-cloud.com/YeaI5w0Tqlrr4wfL3YdAZ_GcUqCYs9le/get/V0').then(function(response){
			return response.json();
			}).then(function(data){
				textHeadCount.textContent = data;
				if (data > textLimit){
					textExceed.textContent = "Please come at another time! We are sorry!";
				}
				else {
					textExceed.textContent = "Welcome!";
				}
			}).catch(function(error){
				console.log(error);
			})
		}, 3000);
	}	
