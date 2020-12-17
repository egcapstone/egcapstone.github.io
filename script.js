function startLiveUpdate(){
		const textHeadCount = document.getElementById('headCount');
		const textExceed = document.getElementById('exceed');
		
		setInterval(function(){
			fetch('http://blynk-cloud.com/YeaI5w0Tqlrr4wfL3YdAZ_GcUqCYs9le/get/V0').then(function(response){
				return response.json();
				}).then(function(data){
					textHeadCount.textContent = data;
					if (data > 30){
						textExceed.textContent = "The number of people have exceeded!";
					}
				}).catch(function(error){
					console.log(error);
				})
			}, 2000);
		}
