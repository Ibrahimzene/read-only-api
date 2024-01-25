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
		{
			"idCode": "testangular222",
			"name": "testAngular",
			"url": "https://onespace.pages.dev/techItems?id=36",
			"description": "together with React and Vue.js one of the three most popular JavaScript frameworks"
		}
	]);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});