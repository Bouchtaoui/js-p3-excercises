const MARIO_API = "https://www.amiiboapi.com/api/amiibo/";

// Doe een fetch

// functie voor het maken van een card
function createCard(item) {
	const card = `
        <div class="card">
            <div class="img-container">
                <img src="" alt="Avatar" />
            </div>
            <div class="container">
                <p><b></b></p>
                <div class="description">
                    <p></p>
                </div>
            </div>
		</div>
    `;

	return card;
}
