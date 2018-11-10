function getRestaurants() {
	fetch('https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=sushi&longitude=-122.419418&latitude=37.774929', {

		method: 'GET',
		headers: {
			'Authorization': 'Bearer tZLjOlNcyKVy13ln-smD3AlZyeYPlNejO9REa_MKZInl4qkWB1QEe3pzmk_FEJpig-2H6ufcMS3UX2JTob_EQj_Xsscqb0VD66nCzMBx2Fs4gklFToMwTcVBpeflW3Yx',
			// 'Content-Type': 'application/x-www-form-urlencoded'
		}
		 })
	.then(response => response.json()) 
	.then(response => {
		// console.log('tesing', response.businesses)
		for (let i = 0; i < response.businesses.length; i++) {
			console.log('each business', response.businesses[i])
			let myDiv = document.getElementById('list')
			let li = document.createElement('li')
			li.setAttribute("class", `mbsc-card`)
			let liDiv = document.createElement('div')
			// li.appendChild(liDiv)
			let imgTag = document.createElement('img');
			myDiv.appendChild(li)
			liDiv.setAttribute("draggable", false)
			li.appendChild(liDiv).innerHTML = response.businesses[i].name
			liDiv.appendChild(imgTag).setAttribute("src",response.businesses[i].image_url)
			// liDiv.appendChild(imgTag).setAttribute("class", mbsc-avatar)s

			// function img_info() {
			// 	return response.businesses[i].image_url
			//   }
			// li.appendChild(imgTag).src = img_info()
		}
	})

	


	}


let btn = document.getElementById('eventCallClick') 

btn.addEventListener('click', (e) => {
	console.log('button clicked')
	getRestaurants()
})
