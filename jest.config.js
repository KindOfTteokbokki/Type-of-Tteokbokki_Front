/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json', 'svg'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!(module-to-transform|another-module)/)'],
	transform: {
		'^.+\\.js$': 'babel-jest', // 자바스크립트 파일을 위한 변환기
		'^.+\\.jsx$': 'babel-jest', //jsx 파일을 위한 변환기
		'^.+\\.svg$': '<rootDir>/src/utils/svgTransformer.js', //svg 파일 변환기
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/setupTest.js', '<rootDir>/src/utils/customJestRender.js'], // setupTest를 이용하여 환경 설정
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json', // tsconfig.jest.json 사용 설정
			isolatedModules: false,
		},
	},
	collectCoverageFrom: ['**/*.[jt]s?(x)', '!**/*.stories.[jt]s?(x)'],
};
