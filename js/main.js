const MARIO_API = "https://www.amiiboapi.com/api/amiibo/";

fetch(MARIO_API)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);

		const row = document.querySelector(".row");
		const list = data.amiibo;

		for (let i = 0; i < 3; i++) {
			const o = list[i];
			row.innerHTML += createCard(o);
		}
	});

function createCard(item) {
	const card = `
        <div class="card">
            <div class="img-container">
                <img src="${item.image}" alt="Avatar" />
            </div>
            <div class="container">
                <p><b>${item.name}</b></p>
                <div class="description">
                    <p>${item.amiiboSeries}</p>
                </div>
            </div>
		</div>
    `;

	return card;
}
