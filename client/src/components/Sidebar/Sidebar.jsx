import { useState } from 'react'
import './Sidebar.scss'

const Sidebar = ({ loadMarkersFromServer }) => {
	const [formData, setFormData] = useState({
		city: '',
		latitude: '',
		longitude: '',
		address: '',
		type: '',
		price: '',
	})

	const [showForm, setShowForm] = useState(false)

	const handleClick = () => {
		setShowForm(true)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch('https://test-task-server-six.vercel.app/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			loadMarkersFromServer()
		} catch (error) {
			console.error('Помилка відправки даних на сервер:', error.message)
		}
	}

	return (
		<aside className='sidebar'>
			<div className='sidebar-title'>
				<button onClick={handleClick}>Додати оголошення</button>
			</div>
			{showForm && (
				<form className='announcement-form' onSubmit={handleSubmit}>
					<label htmlFor='city'>Місто:</label>
					<input
						type='text'
						id='city'
						name='city'
						value={formData.city}
						onChange={handleInputChange}
					/>
					<label htmlFor='latitude'>Широта:</label>
					<input
						type='text'
						id='latitude'
						name='latitude'
						placeholder='Наприклад: 50.45'
						value={formData.latitude}
						onChange={handleInputChange}
					/>
					<label htmlFor='longitude'>Довгота:</label>
					<input
						type='text'
						id='longitude'
						placeholder='Наприклад: 30.52'
						name='longitude'
						value={formData.longitude}
						onChange={handleInputChange}
					/>
					<label htmlFor='address'>Адреса:</label>
					<input
						type='text'
						id='address'
						name='address'
						value={formData.address}
						onChange={handleInputChange}
					/>
					<label htmlFor='type'>Тип:</label>
					<input
						type='text'
						id='type'
						name='type'
						value={formData.type}
						onChange={handleInputChange}
					/>
					<label htmlFor='price'>Ціна:</label>
					<input
						type='text'
						id='price'
						name='price'
						value={formData.price}
						onChange={handleInputChange}
					/>

					<button type='submit'>Зберегти</button>
				</form>
			)}
		</aside>
	)
}

export default Sidebar
