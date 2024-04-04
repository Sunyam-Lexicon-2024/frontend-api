import { Box } from "@mui/material"

export default function CardItem({ card }: CardProps) {
	return (
		<Box>
			<div>
				<p style={{ fontWeight: "bolder" }}>Card:</p>
				<p>
					{card.value.toLowerCase()} of {card.suit.toLowerCase()}
				</p>
			</div>

			<img
				src={card.image}
				alt={`${card.suit}-${card.value}`}
			/>
		</Box>
	)
}
