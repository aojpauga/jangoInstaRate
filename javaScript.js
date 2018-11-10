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
			myDiv.appendChild(li).innerHTML = response.businesses[i].alias
		}
	})


	}


let btn = document.getElementById('eventCallClick') 

btn.addEventListener('click', (e) => {
	console.log('button clicked')
	getRestaurants()
})
