export default function CharacterItem({
	description,
	properties,
}: StarWarsCharacter) {
	const dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	} as Intl.DateTimeFormatOptions

	let character = {
		description: description,
		properties: {
			name: properties["name"],
			birth_year: properties["birth_year"],
			created: new Date(properties["created"]).toLocaleDateString(
				"en-US",
				dateOptions
			),
			edited: new Date(properties["edited"]).toLocaleDateString(
				"en-US",
				dateOptions
			),
			eye_color: properties["eye_color"],
			gender: properties["gender"],
			hair_color: properties["hair_color"],
			height: properties["height"] + " cm",
			homeworld: properties["homeworld"],
			mass: properties["mass"] + " kg",
			skin_color: properties["skin_color"],
			url: properties["url"],
		},
	} as StarWarsCharacter

	let mappedProperties = Object.entries(character.properties).map(
		(prop, index) => {
			let key = prop[0]
			let value
			if (key.match("^url$|^homeworld$|")) {
				value = <a href={prop[1]}>{prop[1]}</a>
			} else {
				value = prop[1]
			}

			return (
				<div
					className="api-item-attribute"
					key={`${key}-${index}`}>
					<p className="api-item-key">{key.replace("_", " ")}</p>
					<p className="api-item-value">{value}</p>
				</div>
			)
		}
	)

	return (
		<div className="api-item">
			<p className="api-item-description-header">Character Description</p>
			<p className="api-item-description">{description}</p>
			{mappedProperties}
		</div>
	)
}
