export default function CardItem({ card }: CardProps) {
	return (
		<div className="api-item flex-row">
			<div>
				<p className="api-item-description-header">Card Description</p>
				<p className="api-item-description">
					{card.value.toLowerCase()} of {card.suit.toLowerCase()}
				</p>
			</div>

			<img
				className="api-item-image"
				src={card.image}
				alt={`${card.suit}-${card.value}`}
			/>
		</div>
	)
}
