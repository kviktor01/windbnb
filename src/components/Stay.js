export default function Stay({ stay }) {
	return (
		<div>
			<img src={stay.photo} alt="" />
			<div className="datas">
				<div className="data2">
					<span>
						{stay.superHost ? <span class="host">Super host</span> : ""}
						<div className="type-and-bed">
							<span className="type">{stay.type}</span>
							{stay.beds ? <span>{stay.beds} bed</span> : ""}
						</div>
					</span>
					<span><i className="fa-solid fa-star"></i> {stay.rating}</span>
				</div>
				<div>{stay.title}</div>
			</div>
		</div>
	);
}
