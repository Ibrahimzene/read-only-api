import fs from 'fs';

export const readJsonFile = (pathAndFileName) => {
	try {
		const data = fs.readFileSync(pathAndFileName, 'utf8');
		console.log(data);
	} 
	catch (e) {
		console.error(`Error loading JSON`);
		return null;
	}
}