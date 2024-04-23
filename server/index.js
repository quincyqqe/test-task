
const cors = require('cors')
const express = require('express')

const app = express()
const port = 3000

app.use(cors()) // Позволяет CORS запросы от любого источника

app.use(express.json())

// Конфигурация CORS заголовков
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})

// Generated by AI
const fakeData = [
	{
		city: 'Київ',
		latitude: 50.4501,
		longitude: 30.5234,
		address: 'вул. Леніна, 10',
		type: '1-кімнатна квартира',
		price: 1200,
	},
	{
		city: 'Київ',
		latitude: 50.4029,
		longitude: 30.4887,
		address: 'вул. Пушкіна, 15',
		type: '2-кімнатна квартира',
		price: 1800,
	},
	{
		city: 'Львів',
		latitude: 49.8397,
		longitude: 24.0297,
		address: 'вул. Степана Бандери, 20',
		type: 'студія',
		price: 900,
	},
	{
		city: 'Одеса',
		latitude: 46.4825,
		longitude: 30.7233,
		address: 'вул. Дерибасовська, 5',
		type: '3-кімнатна квартира',
		price: 1500,
	},
	{
		city: 'Дніпро',
		latitude: 48.45,
		longitude: 34.9833,
		address: 'вул. Пушкіна, 10',
		type: '1-кімнатна квартира',
		price: 1100,
	},
	{
		city: 'Харків',
		latitude: 50.0,
		longitude: 36.25,
		address: 'вул. Гагаріна, 25',
		type: '2-кімнатна квартира',
		price: 1300,
	},
	{
		city: 'Київ',
		latitude: 50.4029,
		longitude: 30.4887,
		address: 'вул. Пушкіна, 15',
		type: 'студія',
		price: 900,
	},
	{
		city: 'Одеса',
		latitude: 46.4825,
		longitude: 30.7233,
		address: 'вул. Дерибасовська, 5',
		type: '3-кімнатна квартира',
		price: 1500,
	},
	{
		city: 'Львів',
		latitude: 49.8397,
		longitude: 24.0297,
		address: 'вул. Степана Бандери, 20',
		type: '1-кімнатна квартира',
		price: 1100,
	},
	{
		city: 'Дніпро',
		latitude: 48.45,
		longitude: 34.9833,
		address: 'вул. Пушкіна, 10',
		type: '2-кімнатна квартира',
		price: 1300,
	},
	{
		city: 'Харків',
		latitude: 50.0,
		longitude: 36.25,
		address: 'вул. Гагаріна, 25',
		type: 'студія',
		price: 900,
	},
	{
		city: 'Київ',
		latitude: 50.4501,
		longitude: 30.5234,
		address: 'вул. Леніна, 10',
		type: '3-кімнатна квартира',
		price: 1600,
	},
	{
		city: 'Одеса',
		latitude: 46.4825,
		longitude: 30.7233,
		address: 'вул. Дерибасовська, 5',
		type: '1-кімнатна квартира',
		price: 1000,
	},
	{
		city: 'Дніпро',
		latitude: 48.45,
		longitude: 34.9833,
		address: 'вул. Пушкіна, 10',
		type: '2-кімнатна квартира',
		price: 1300,
	},
	{
		city: 'Харків',
		latitude: 50.0,
		longitude: 36.25,
		address: 'вул. Гагаріна, 25',
		type: 'студія',
		price: 950,
	},
	{
		city: 'Київ',
		latitude: 50.4501,
		longitude: 30.5234,
		address: 'вул. Леніна, 10',
		type: '1-кімнатна квартира',
		price: 1200,
	},
	{
		city: 'Львів',
		latitude: 49.8397,
		longitude: 24.0297,
		address: 'вул. Степана Бандери, 20',
		type: '2-кімнатна квартира',
		price: 1400,
	},
	{
		city: 'Одеса',
		latitude: 46.4825,
		longitude: 30.7233,
		address: 'вул. Дерибасовська, 5',
		type: 'студія',
		price: 1000,
	},
	{
		city: 'Дніпро',
		latitude: 48.45,
		longitude: 34.9833,
		address: 'вул. Пушкіна, 10',
		type: '1-кімнатна квартира',
		price: 1100,
	},
	{
		city: 'Харків',
		latitude: 50.0,
		longitude: 36.25,
		address: 'вул. Гагаріна, 25',
		type: '2-кімнатна квартира',
		price: 1300,
	},
]

app.get('/', (req, res) => {
	res.json(fakeData)
})

app.post('/', (req, res) => {
	const newData = req.body

	fakeData.push(newData)

	res.status(201).json({ message: 'Дані успішно додано', newData })
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
