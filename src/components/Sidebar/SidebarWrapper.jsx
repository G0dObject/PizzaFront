import Logo from '../../assets/img/logo.svg';
import PizzaLogo from '../../assets/img/pizza.svg';
import SetsLogo from '../../assets/img/sets.svg';
import WokLogo from '../../assets/img/wok.svg';
import RollsLogo from '../../assets/img/rolls.svg';
import SushiLogo from '../../assets/img/sushi.svg';
import SaladLogo from '../../assets/img/salad.svg';
import SoupLogo from '../../assets/img/soup.svg';
import CorndogsLogo from '../../assets/img/corndogs.svg';
import DrinkLogo from '../../assets/img/drink.svg';


function SidebarWrapper() {
	return (
		<div className="sidebarWrapper">
			<div className="sidebar">
				<img className="logo" src={Logo} alt="logo"></img>
				<div id="stick"></div>
				<ul className="sidebar">
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={PizzaLogo} alt="Pizza"></img>
							Pizza
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SetsLogo} alt="Pizza"></img>
							Sets
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={WokLogo} alt="Pizza"></img>
							Wok
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={RollsLogo} alt="Pizza"></img>
							Rolls
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SushiLogo} alt="Pizza"></img>
							Sushi
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SaladLogo} alt="Pizza"></img>
							Salad
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={SoupLogo} alt="Pizza"></img>
							Soup
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={CorndogsLogo} alt="Pizza"></img>
							Corndogs
						</a>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="/">
							<img className="sidebar-icon" src={DrinkLogo} alt="Pizza"></img>
							Drink
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SidebarWrapper;
