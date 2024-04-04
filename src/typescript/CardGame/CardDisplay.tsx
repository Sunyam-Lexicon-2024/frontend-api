import CardItem from "./CardItem"
import { Box } from "@mui/material"

type DataListProps = {
	cardDataList: Card[]
}

export default function CardDisplay({ cardDataList }: DataListProps) {
	console.log(cardDataList)
	const dataElements = cardDataList.map((card: Card, cardIndex) => {
		return (
			<CardItem
				key={cardIndex}
				card={card}
			/>
		)
	})

	return (
		<Box
			sx={{
				display: {
					md: "flex",
				},
				justifyContent: {
					xs: "unset",
					md: "center",
				},
				alignItems: {
					xs: "unset",
					md: "center",
				},
				height: {
					xs: "unset",
					md: "80vh",
				},
			}}>
			{dataElements}
		</Box>
	)
}
