import "@/sass/navigation-style.scss"

type NavProps = {
	pageTitle: string
	loadComponent: (e: any) => void
}

const Navigation = ({ loadComponent, pageTitle }: NavProps) => {
	return (
		<div id="nav-wrapper">
			<header>
				<h1>{pageTitle}</h1>
			</header>
			<nav>
				<button onClick={loadComponent}>Star Wars API</button>
				<button onClick={loadComponent}>Card Game API</button>
			</nav>
		</div>
	)
}

export default Navigation
