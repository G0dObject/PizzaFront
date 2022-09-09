import LogoSm from "../../assets/img/logo-without-text.png";
import LogoLg from "../../assets/img/logo.png";

import PizzaLogo from "../../assets/img/pizza.svg";
import SetsLogo from "../../assets/img/sets.svg";
import WokLogo from "../../assets/img/wok.svg";
import RollsLogo from "../../assets/img/rolls.svg";
import SushiLogo from "../../assets/img/sushi.svg";
import SaladLogo from "../../assets/img/salad.svg";
import SoupLogo from "../../assets/img/soup.svg";
import CorndogsLogo from "../../assets/img/corndogs.svg";
import DrinkLogo from "../../assets/img/drink.svg";
import { Link } from "react-router-dom";

function SidebarWrapper() {
	return (
		<div className="sidebarWrapper">
			<div className="sidebar">
				<Link to="/">
					<img className="logo-lg" src={LogoLg} alt="logo"></img>
				</Link>
				<Link to="/">
					<img className="logo-sm" src={LogoSm} alt="logo1"></img>
				</Link>

				<div id="stick"></div>
				<ul className="sidebar-items">
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link">
							<img className="sidebar-icon" src={PizzaLogo} alt="Pizza"></img>
							Pizza
						</Link>
					</li>

					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SetsLogo} alt="Pizza"></img>
							Sets
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={WokLogo} alt="Pizza"></img>
							Wok
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={RollsLogo} alt="Pizza"></img>
							Rolls
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SushiLogo} alt="Pizza"></img>
							Sushi
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SaladLogo} alt="Pizza"></img>
							Salad
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SoupLogo} alt="Pizza"></img>
							Soup
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img
								className="sidebar-icon"
								src={CorndogsLogo}
								alt="Pizza"
							></img>
							Corndogs
						</Link>
					</li>
					<li className="sidebar-item">
						<Link to="/about" className="sidebar-link" href="/">
							<img className="sidebar-icon" src={DrinkLogo} alt="Pizza"></img>
							Drink
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SidebarWrapper;
