import CharacterItem from "./CharacterItem"

type DataListProps = {
	characterDataList: StarWarsCharacter[]
}

export default function CharacterDisplay({ characterDataList }: DataListProps) {
	const dataElements = characterDataList.map(
		(char: StarWarsCharacter, charIndex) => {
			return (
				<CharacterItem
					key={charIndex}
					description={char.description}
					properties={char.properties}
				/>
			)
		}
	)

	return <div className="response-data-field">{dataElements}</div>
}
