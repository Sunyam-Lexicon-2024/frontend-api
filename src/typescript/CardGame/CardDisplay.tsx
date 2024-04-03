import CardItem from "./CardItem"

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

	return <div className="response-data-field">{dataElements}</div>
}
