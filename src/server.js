import prisma from './db.js';
import express from 'express';

const app = express();
app.use(express.json());
const port = 2501;

app.get('/', async(req, res) => {
	const skills = await prisma.skill.findMany();
    res.json(skills);
});

app.get('/skills', (req, res) => {
	res.json([
		{
			"idCode": "testangular111",
			"name": "testAngular",
			"url": "https://onespace.pages.dev/techItems?id=36",
			"description": "together with React and Vue.js one of the three most popular JavaScript frameworks"
		},
	]);
});

app.post('/skills', async(req, res) => {
	const {idCode, name, url, description} = req.body;
	const skill = await prisma.skill.create({
		data: {
			idCode,
			name,
			url,
			description
		}
	});
	res.json(skill);
});

app.post('/skills', async (req, res) => {
	const _skill = req.body;
	try {
		const skill = await prisma.skill.create({ data: _skill });
		res.status(201).json(skill);
	} 
	catch (e) {
		res.status(400).json({message: "an error occurred"})
	}
})

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});