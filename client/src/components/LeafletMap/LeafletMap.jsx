import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import Sidebar from '../Sidebar/Sidebar'
import MarkerInfo from '../MarkerInfo/MarkerInfo'

import 'leaflet/dist/leaflet.css'
import './LeafletMap.scss'

const LeafletMap = () => {
	const [markers, setMarkers] = useState([])
	const [selectedMarker, setSelectedMarker] = useState(null)

	const greenIcon = new L.Icon({
		iconUrl: '/marker.png',

		iconSize: [38, 45],
		iconAnchor: [16, 32],
	})

	useEffect(() => {
		loadMarkersFromServer()
	}, [])

	const loadMarkersFromServer = () => {
		fetch('http://localhost:3000/')
			.then(response => response.json())
			.then(data => {
				setMarkers(data)
			})
			.catch(error => console.error('Помилка отримання даних:', error))
	}

	const handleMarkerClick = marker => {
		setSelectedMarker(marker)
	}

	return (
		<div className='map-page'>
			<Sidebar loadMarkersFromServer={loadMarkersFromServer} />
			<div className='map-container'>
				<MapContainer center={[50.4501, 30.5234]} zoom={13}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{markers &&
						markers.map(
							(marker, index) =>
								marker.latitude &&
								marker.longitude && (
									<Marker
										key={index}
										position={[marker.latitude, marker.longitude]}
										eventHandlers={{ click: () => handleMarkerClick(marker) }}
										icon={greenIcon}
									></Marker>
								)
						)}
				</MapContainer>
			</div>
			<div className='marker-info-container'>
				{selectedMarker && (
					<MarkerInfo
						address={selectedMarker.address}
						type={selectedMarker.type}
						price={selectedMarker.price}
					/>
				)}
			</div>
		</div>
	)
}

export default LeafletMap
