import Navbar from "./Navbar"
import Search from "./Search"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<Search />
			{children}
		</>
	)
}
