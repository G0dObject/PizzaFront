import Alert from 'react-bootstrap/Alert';
import ClockLogo from '../../assets/img/clock.svg';
function HeaderContact() {
	return (
		<div className="header-contact">
			<p className="header-phone-title">Наш телефон</p>
			<ul className="header-phone-numbers">
				<li>+996 705 188 955</li>
				<li>+996 555 188 955</li>
			</ul>
			<div className="header-phone-hours" style={{ display: 'flex' }}>
				<img src={ClockLogo}></img>
				<p>работаем с 10:00 до 00:00</p>
			</div>
		</div>
	);
}

export default HeaderContact;
