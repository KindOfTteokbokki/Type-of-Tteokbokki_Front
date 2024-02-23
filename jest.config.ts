export {};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setupTest.js'], // setupTest를 이용하여 환경 설정
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json', // tsconfig.jest.json 사용 설정
		},
	},
};
