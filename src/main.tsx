import React from "react"
import ReactDOM from "react-dom/client"
import App from "./typescript/App.tsx"
import CssBaseline from "@mui/material/CssBaseline"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CssBaseline />
			<App />
	</React.StrictMode>
)
