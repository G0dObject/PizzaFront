import PizzaLogo from '../../assets/img/pizza.svg';
import DrinkLogo from '../../assets/img/drink.svg';
import Logo from '../../assets/img/logo.svg';
function SidebarWrapper() {
	return (
		<div className="sidebarWrapper">
			<div className="sidebar">
				<img className="logo" src={Logo} alt="logo"></img>
				<div id="stick"></div>
				<ul className="sidebar">
					<li className="sidebar-item">
						<img className="sidebar-icon" src={PizzaLogo} alt="fdfd"></img>
						<a href="/">Pizza</a>
					</li>
					<li className="sidebar-item">
						<img className="sidebar-icon" src={DrinkLogo} alt="fdfd"></img>
						<a href="/">Pizza</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SidebarWrapper;
