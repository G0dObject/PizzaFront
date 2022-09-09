import ClockLogo from "../../assets/img/clock.svg";
import LogoSm from "../../assets/img/logo-without-text.png";

function HeaderContact() {
	return (
		<div className="header-contact">
			<img className="logo-sm" src={LogoSm} alt="logo"></img>
			<div className="header-phone">
				<p className="header-phone-title">Наш телефон</p>
				<ul className="header-phone-numbers">
					<li>+996 705 188 955</li>
					<li>+996 555 188 955</li>
				</ul>
			</div>

			<div className="header-phone-hours-wrapper">
				<div className="header-phone-hours">
					<img src={ClockLogo} alt="Clock"></img>
					<p>работаем с 10:00 до 00:00</p>
				</div>
			</div>
		</div>
	);
}

export default HeaderContact;
