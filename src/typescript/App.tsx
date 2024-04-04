import React, { useState } from "react"
import "@/sass/app-style.scss"
import Footer from "./Footer"
import Navigation from "./Navigation"
import StarWars from "./StarWars/StarWars"
import CardGame from "./CardGame/CardGame"

function App() {
	const [pageTitle, setPageTitle] = useState("Star Wars")
	const [starWarsActive, setStarWars] = useState(true)
	const [cardGameActive, setCardGame] = useState(true)

	function toggleComponent(event: React.MouseEvent) {
		switch ((event.target as HTMLElement).textContent) {
			case "Star Wars API":
				setStarWars(true)
				setCardGame(false)
				setPageTitle("Star Wars API")
				break
			case "Card Game API":
				setStarWars(false)
				setCardGame(true)
				setPageTitle("Card Game API")
				break
		}
	}

	let content

	if (starWarsActive) {
		content = <StarWars />
	} else if (cardGameActive) {
		content = <CardGame />
	}

	return (
		<>
			<Navigation
				loadComponent={(event) => toggleComponent(event)}
			/>
			{content}
			<Footer />
		</>
	)
}

export default App
