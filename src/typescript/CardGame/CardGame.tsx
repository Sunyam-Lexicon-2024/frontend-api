import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
} from "@mui/material"
import CardDisplay from "./CardDisplay"
import React, { useState } from "react"
import { theme } from "../theme"

const linkColor = theme.palette.link.light
const apiRoot = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"

export default function CardGame() {
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
		<Container
			sx={{
				display: "flex",
				flexFlow: {
					xs: "column",
					sm: "row",
				},
				m: 0,
				p: 1,
			}}>
			<Box>
				<Card sx={{ m: 1, p: 1, maxWidth: 500 }}>
					<CardContent>
						Pick a random card from the
						<a
							style={{ textDecoration: "none", color: linkColor }}
							href="https://deckofcardsapi.com/api/">
							{" "}
							deckofcards
						</a>{" "}
						API.
					</CardContent>
					<form onSubmit={(event) => get(event)}>
						<FormControl
							sx={{
								display: "flex",
								justifyContent: "center",
							}}>
							<Button type="submit">Pick card</Button>
						</FormControl>
					</form>
				</Card>
			</Box>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<CardDisplay cardDataList={cardData} />
			</Box>
		</Container>
	)
}
