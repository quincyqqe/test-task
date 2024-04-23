import './RentSearchForm.scss'

const RentSearchForm = () => {
	return (
		<form className='rent-search-form'>
			<input type='text' placeholder='Я хочу арендувати' />
			<input type='text' placeholder='Спосіб оренди' />
			<input type='text' placeholder='Період аренди' />
			<input type='text' placeholder='Де шукати?' />
			<button type='submit'>Шукати</button>
		</form>
	)
}

export default RentSearchForm
