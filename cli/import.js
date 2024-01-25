import * as tools from './tools.js';

const _skills = tools.readJsonFile('cli/data/skills.json');

for (const _skill of _skills) {
	try {
	const skill = await addSkill(_skill);
	}
	catch (e) {
		console.log(``);
	}
}
