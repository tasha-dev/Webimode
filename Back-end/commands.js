#! node

import fs from 'fs';

// ? options
// ?  --ex=js => file extension
// ? --func=name => function name in created file

const allowedDuties = ['make', 'migration'];

const configs = {
	file_extension: 'ts',
	controller: {
		base_path: 'app/http/controllers/',
		example_path: 'app/http/controllers/example.ts',
	},
	model: {
		base_path: 'app/models/mongo',
		example_path: 'app/models/example.ts',
	},
	middleware: {
		base_path: 'app/http/middleware/',
		example_path: 'app/http/middleware/example.ts',
	},
};

const params = parseCommand();

switch (params.type) {
	case 'make':
		createDir(params.dir, params.target);
		createFile(params.dir, params.file_name, params.target);
		break;
	case 'migration':
		console.log('e');
		break;
	default:
		throw new Error(`bad type exception ${params.type}`);
}

function parseCommand() {
	const _duty = process.argv[2].toLocaleLowerCase().split(':'); // make:something
	// validation
	if (!_duty[0] || !allowedDuties.includes(_duty[0])) throw new Error(`unknown duty : ${_duty[0]}`);
	if (!_duty[1] || !configs[_duty[1]]) throw new Error(`unknown command : ${_duty[1]}`);

	const full_path = process.argv[3];
	const full_path_array = full_path.split('/');
	const file_name = full_path_array.pop();
	const dir = full_path_array.join('/');

	return {
		current_path: process.argv[1],
		type: _duty[0], // make, delete, ...
		target: _duty[1], // controller, middleware, model, ...
		dir,
		file_name,
	};
}

function createDir(dir, type) {
	if (!fs.existsSync(configs[type].base_path + dir)) {
		fs.mkdirSync(configs[type].base_path + dir, { recursive: true });
	}
}

function createFile(dir, filename, type) {
	// read file
	var rawFile = fs.readFileSync(configs[type].example_path, 'utf-8');
	// get method name
	var funcName = process.env.npm_config_func || filename;
	// Uppercase first letter
	funcName = funcName[0].toUpperCase() + funcName.slice(1);
	// replace it
	var result = rawFile.replace(/Example/g, funcName);
	// extension
	const extension = process.env.npm_config_ex || configs.file_extension;
	// copy file
	fs.writeFileSync(`${configs[type].base_path}${dir}/${filename}.${extension}`, result);
}
