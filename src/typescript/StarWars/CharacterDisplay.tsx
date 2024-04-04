import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { Box } from "@mui/material"
import { theme } from "../theme"

const dataHeaderColor = theme.palette.secondary.main

type DataListProps = {
	characterDataList: StarWarsCharacter[]
}

export default function CharacterDisplay({ characterDataList }: DataListProps) {
	const dataElements = characterDataList.map(
		(char: StarWarsCharacter, charIndex) => {
			let p = char.properties
			return {
				id: charIndex,
				name: p.name,
				birth_year: p.birth_year,
				created: p.created,
				edited: p.created,
				eye_color: p.eye_color,
				gender: p.gender,
				hair_color: p.hair_color,
				height: p.height,
				homeworld: p.homeworld,
				mass: p.mass,
				skin_color: p.skin_color,
				url: p.url,
			}
		}
	)

	const rows: GridRowsProp = dataElements
	const columns: GridColDef[] = [
		{
			field: "id",
			headerClassName: "data-table-header",
			headerName: "ID",
			width: 25,
		},
		{
			field: "name",
			headerClassName: "data-table-header",
			headerName: "Name",
			width: 150,
		},
		{
			field: "birth_year",
			headerClassName: "data-table-header",
			headerName: "Birth Year",
			width: 100,
		},
		{
			field: "gender",
			headerClassName: "data-table-header",
			headerName: "Gender",
			width: 100,
		},
		{
			field: "height",
			headerClassName: "data-table-header",
			headerName: "Height (Cm)",
			width: 100,
		},
		{
			field: "mass",
			headerClassName: "data-table-header",
			headerName: "Mass (Kg)",
			width: 100,
		},
		{
			field: "eye_color",
			headerClassName: "data-table-header",
			headerName: "Eye Color",
			width: 100,
		},
		{
			field: "hair_color",
			headerClassName: "data-table-header",
			headerName: "Hair Color",
			width: 100,
		},
		{
			field: "skin_color",
			headerClassName: "data-table-header",
			headerName: "Skin Color",
			width: 100,
		},
		{
			field: "homeworld",
			headerClassName: "data-table-header",
			headerName: "Homeworld",
			width: 154,
		},
		{
			field: "url",
			headerClassName: "data-table-header",
			headerName: "URL",
			width: 150,
		},
		{
			field: "created",
			headerClassName: "data-table-header",
			headerName: "Created",
			width: 125,
		},
		{
			field: "edited",
			headerClassName: "data-table-header",
			headerName: "Edited",
			width: 125,
		},
	]

	return (
		<Box
			sx={{
				height: 300,
				width: "100%",
				p: 4,
				"& .data-table-header": { backgroundColor: dataHeaderColor },
			}}>
			<DataGrid
				rows={rows}
				columns={columns}
			/>
		</Box>
	)
}
