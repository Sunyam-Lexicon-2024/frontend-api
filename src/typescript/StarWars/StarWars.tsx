import "@/sass/page-style.scss"
import React, { useState } from "react"
import CharacterDisplay from "./CharacterDisplay"

export default function StarWars() {
	const apiRoot = "https://www.swapi.tech/api/people?name="
	const [characterData, setCharacterData] = useState([] as StarWarsCharacter[])

	async function get(event: React.FormEvent) {
		event.preventDefault()
		let form = event.target as HTMLFormElement
		let searchQuery = new FormData(form).values().next().value

		let response = await fetch(apiRoot + searchQuery)
			.catch((err) => console.error(err))
			.then((response) => response)
		if (response) {
			let characters = (await response
				.json()
				.then((json) => json.result)) as StarWarsCharacter[]
			setCharacterData(characters)
		}
	}

	return (
		<div className="api-container">
			<span className="info-field">
				Search the <a href="https://www.swapi.tech/api/people">swapi.tech</a>{" "}
				API for a given Star Wars character.
			</span>
			<div className="api-form-container">
				<form onSubmit={(event) => get(event)}>
					<input
						type="text"
						name="Star Wars Character"
						placeholder="enter character name"
					/>
					<button type="submit">Search</button>
				</form>
				<CharacterDisplay
					characterDataList={characterData}
				/>
			</div>
		</div>
	)
}
