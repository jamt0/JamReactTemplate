module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}.tsx',
				templateFile: 'plop_templates/Component.tsx.hbs',
			},
		],
	});
	plop.setGenerator('ui', {
		description: 'Create a UI',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your UI name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/UI/{{pascalCase name}}/index.tsx',
				templateFile: 'plop_templates/Component.tsx.hbs',
			},
		],
	});
	plop.setGenerator('page', {
		description: 'Create a page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your page name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/index.tsx',
				templateFile: 'plop_templates/Page.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/view.tsx',
				templateFile: 'plop_templates/PageView.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/hooks/index.ts',
				templateFile: 'plop_templates/PageHooks.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}/useStyles.ts',
				templateFile: 'plop_templates/PageStyles.ts.hbs',
			},
		],
	});
};
