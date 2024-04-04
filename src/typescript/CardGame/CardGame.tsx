import React, { useState } from "react"
import CardDisplay from "./CardDisplay"

export default function CardGame() {
	const apiRoot = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
	const [cardData, setCardData] = useState([] as Card[])

	async function get(event: React.FormEvent) {
		event.preventDefault()

		let response = await fetch(apiRoot)
			.catch((err) => console.error(err))
			.then((response) => response)
		if (response) {
			let json = await response.json()
			let cards = json.cards
			setCardData(cards)
		}
	}

	return (
		<div className="api-container">
			<span className="info-field">
				Pick a random card from the{" "}
				<a href="https://deckofcardsapi.com/api/">deckofcards</a> API.
			</span>
			<div className="api-form-container">
				<form onSubmit={(event) => get(event)}>
					<button type="submit">Draw a card</button>
				</form>
				<CardDisplay cardDataList={cardData} />
			</div>
		</div>
	)
}
