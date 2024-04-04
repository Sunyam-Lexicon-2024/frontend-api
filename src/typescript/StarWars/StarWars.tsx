import React, { useState } from "react"
import {
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	Grid,
	Input,
} from "@mui/material"
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
		<Grid
			direction={"column"}
			sx={{
				p: 1,
				justifyContent: "center",
			}}
			container>
			<Grid
				item
				xs={4}>
				<Card sx={{ m: 1, p: 1, maxWidth: 500 }}>
					<CardContent className="info-field">
						Search the{" "}
						<a href="https://www.swapi.tech/api/people">swapi.tech</a> API for a
						given Star Wars character.
					</CardContent>
					<form onSubmit={(event) => get(event)}>
						<FormControl
							sx={{
								display: "flex",
								justifyContent: "center",
							}}>
							<Input
								sx={{ p: 1, m: 1 }}
								type="text"
								name="Star Wars Character"
								placeholder="Enter character name"
							/>
							<Button type="submit">Search</Button>
						</FormControl>
					</form>
				</Card>
			</Grid>
			<CharacterDisplay characterDataList={characterData} />
		</Grid>
	)
}
