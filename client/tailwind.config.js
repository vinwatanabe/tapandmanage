/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		colors: {
			darkBlue: '#072A5D',
			darkBlueSelect: '#0A3574',
			lightBlue: '#1396EE',
			background: '#F1F5F9',
			white: '#FFFFFF',
			lightGrey: '#EEEEEE',
			mediumGrey: '#B3B4B5',
			darkGrey: '#707070',
			detailGrey: '#7C90A2',
			borderGrey: '#D8D8D8',
			lightGreen: '#E8F4ED',
			darkGreen: '#389C92',
		},
		extend: {
			fontSize: {
				'text-base': ['16px', '19px'],
				'title-lg': ['26px', '32px'],
				'text-sm': ['14px', '17px'],
				'text-xs': ['12px', '14px'],
			},
		},
	},
	plugins: [],
};
