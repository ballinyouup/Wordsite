import Navbar from "./Navbar";
import Search from "./Search";

interface ILayout {
	children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
	return (
		<>
			<Navbar />
			<Search />
			{children}
		</>
	);
};

export default Layout;
