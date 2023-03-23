const MARIO_API = "https://www.amiiboapi.com/api/amiibo/";

// Doe een fetch
// fetch(MARIO_API)
// 	.then(function (response) {
// 		console.log("Response is: ", response);

// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log("Data is: ", data);

// 		const list = data.amiibo;

// 		const row = document.querySelector(".row");
// 		// Vanaf hier kunnen we spelen met objecten
// 		for (let i = 0; i < 3; i++) {
// 			const mario = list[i];

// 			const card = createCard(mario);

// 			row.innerHTML += card;
// 		}
// 	});

fetch(MARIO_API)
	.then((response) => response.json())
	.then((data) => {
		console.log("Data is: ", data);

		const list = data.amiibo;

		const row = document.querySelector(".row");
		// Vanaf hier kunnen we spelen met objecten
		for (let i = 0; i < 3; i++) {
			const mario = list[i];

			const card = createCard(mario);

			row.innerHTML += card;
		}
	});

// functie voor het maken van een card
function createCard(item) {
	console.log("item is: ", item);
	const card = `
        <div class="card">
            <div class="img-container">
                <img src="${item.image}" alt="Avatar" />
            </div>
            <div class="container">
                <p><b>${item.name}</b></p>
                <div class="description">
                    <p>${item.gameSeries}</p>
                </div>
            </div>
		</div>
    `;

	return card;
}
