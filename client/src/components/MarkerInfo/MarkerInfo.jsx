const MarkerInfo = ({ address, type, price }) => {
	return (
		<div className='marker-info'>
			{/* Не получается через пропсы картинку выводить, скорее всего проблема связана с CORS */}
			<img
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIuD--fj5IMul474NostG1DpMim5teaWsBaHB5fW1Cw&s'
				alt='dsaaad'
			/>
			<h3>{type}</h3>
			<p>
				<strong>Адреса:</strong> {address}
			</p>
			<p>
				<strong>Ціна:</strong> {price} грн
			</p>
		</div>
	)
}

export default MarkerInfo
