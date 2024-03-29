import prisma from './db.js';
import express from 'express';

const app = express();
app.use(express.json());
const port = 2501;

app.get('/skills', async(req, res) => {
	const skills = await prisma.skill.findMany();
    res.json(skills);
});

app.post('/skills', async (req, res) => {
	const _skill = req.body;
	try {
		console.log(_skill);
		const skill = await prisma.skill.create({ data: _skill });
		res.status(201).json(skill);
	} 
	catch (e) {
		console.log(e);
		res.status(400).json({message: "an error occurred"})
	}

})


app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});