import { useState } from "react";
import cn from "classnames";
export default function Search({
	city,
	setSearch,
	cities,
	setCity,
	setStays,
	childrens,
	adults,
	setAdults,
	setChildrens,
}) {
	const [cityIsActive, setCityIsActive] = useState(true);
	const [guestsIsActive, setGuestsIsActive] = useState(false);
	const [localCity, setLocalCity] = useState(city);
	const [localChildrens, setLocalChildrens] = useState(childrens);
	const [localAdults, setLocalAdults] = useState(adults);
	let setAdultsCount = (add) => {
		if (add < 0) {
			if (localAdults > 0) {
				setLocalAdults(localAdults + add);
			}
		} else {
			setLocalAdults(localAdults + add);
		}
	};
	let setChildrensCount = (add) => {
		if (add < 0) {
			if (localChildrens > 0) {
				setLocalChildrens(localChildrens + add);
			}
		} else {
			setLocalChildrens(localChildrens + add);
		}
	};
	return (
		<div className="search">
			<div className="form2">
				<div className="input-container">
					<span>
						<span
							style={{ display: "block" }}
							className={cn({ active: cityIsActive })}
							onClick={() => {
								setCityIsActive(true);
								setGuestsIsActive(false);
							}}
						>
							<span style={{ display: "block" }}>Location</span>
							<span>{localCity},Finland</span>
						</span>
					</span>
					<span>
						<span
							style={{ display: "block" }}
							className={cn({ active: guestsIsActive })}
							onClick={() => {
								setCityIsActive(false);
								setGuestsIsActive(true);
							}}
						>
							<span style={{ display: "block", marginBottom: "5px" }}>
								Guests
							</span>
							<span style={{ color: "#BDBDBD" }}>
								{localChildrens + localAdults}
							</span>
						</span>
					</span>
					<span className="search-button-container"
						onClick={() => {
							setCity(localCity);
							setAdults(localAdults);
							setChildrens(localChildrens);
							setStays(city, localChildrens + localAdults);
							setSearch(false);
						}}
					>
						<span className="search-button"><i className="fa-solid fa-magnifying-glass"></i> Search</span>
					</span>
				</div>
				<div id="searching-elements-container">
					<div className={cn({ cities: cityIsActive })}>
						{cityIsActive
							? cities.map((city) => {
									return (
										<>
											<span
												onClick={() => {
													setLocalCity(city);
												}}
											>
												<i class="fa-solid fa-location-dot"></i> {city + " ,Finnland"}
											</span>
											<br />
										</>
									);
							  })
							: ""}
					</div>
					<div className={cn({ guests: guestsIsActive })}>
						{!cityIsActive ? (
							<>
								<span className="adults">Adults</span>
								<small className="adults-description">Ages 13 or above</small>
								<button
									onClick={() => {
										setAdultsCount(-1);
									}}
								>
									-
								</button>
								{localAdults}{" "}
								<button
									onClick={() => {
										setAdultsCount(1);
									}}
								>
									+
								</button>
								<span className="childrens">Children</span>
								<small className="childrens-description">Ages 2-12</small>
								<button
									onClick={() => {
										setChildrensCount(-1);
									}}
								>
									-
								</button>
								{localChildrens}{" "}
								<button
									onClick={() => {
										setChildrensCount(1);
									}}
								>
									+
								</button>
							</>
						) : (
							""
						)}
					</div>
					
				</div>
			</div>
			<div
				onClick={() => {
					setSearch(false);
				}}
				className="gray"
			></div>
		</div>
	);
}
