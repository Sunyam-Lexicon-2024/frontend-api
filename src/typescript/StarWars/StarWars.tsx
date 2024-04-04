import React, { useState } from "react"
import {
	Button,
	Card,
	CardContent,
	FormControl,
	Grid,
	Input,
} from "@mui/material"
import { theme } from "../theme"
import CharacterDisplay from "./CharacterDisplay"

export default function StarWars() {
	const [characterData, setCharacterData] = useState([] as StarWarsCharacter[])
	const linkColor = theme.palette.link.light
	const apiRoot = "https://www.swapi.tech/api/people?name="

	async function get(event: React.FormEvent) {
		event.preventDefault()
		let form = event.target as HTMLFormElement
		let searchQuery = new FormData(form).values().next().value

		if (searchQuery == "") return

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
					<CardContent>
						Search the
						<a
							style={{ textDecoration: "none", color: linkColor }}
							href="https://www.swapi.tech/api/people">
							{" "}
							swapi.tech
						</a>{" "}
						API for a given Star Wars character.
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
