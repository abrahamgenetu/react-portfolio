import emoji from "react-easy-emoji";

export const greetings = {
	name: "Abraham Genetu",
	title: "Hi, I'm Abraham",
	description:
		"I'm passionate Full-Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
	resumeLink:
		"https://drive.google.com/file/d/1xY5gLhXp3rwEKaGkimrkxvh_1QtikYOe/view?usp=sharing",
};

export const openSource = {
	githubUserName: "abrahamgenetu",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/abrahamgenetu21",
	instagram: "https://www.instagram.com/abrahamgenetu",
	twitter: "https://twitter.com/preonsT",
	github: "https://github.com/abrahamgenetu",
	linkedin: "https://www.linkedin.com/in/abrahamgenetu/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Addis Ababa Insittute of Technology",
		subHeader: "Bachlor of Science in Biomedical Engineering",
		duration: "September 2018 - june 2023",
		desc: "Participated in the research of machine learning on imaging systems.",
		grade: "Grade A",
		descBullets: [
			"Medical imaging system",
			"Deep learning system",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Preons Tech",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "Machine learning Developer",
		company: "IcogLabs",
		companylogo: "/img/icons/common/icog.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as machine learning intern on a rejuve App. Rejuve is a community platform for the creation of health reviews based on verified datas. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Preons",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "IcogLabs",
		companylogo: "/img/icons/common/icog.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in mindplex.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "React-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/abrahamgenetu/react-portfolio",
		link: " https://abrahamgenetu.netlify.app",
	},
	{
		name: "Malaria Detection",
		desc: "Detection of the presence of Malaria parasites in Human Blood Cells and to determine how much it is affected..",
		github: "https://github.com/abrahamgenetu/Malaria-detection-",
	},
	{
		name: "Preons (Educational Platform)",
		desc: "Get hands-on experience in technical skills with Preons education: Educational platform project",
		github: "https://github.com/abrahamgenetu/preons",
		link: "https:preons.herokuapp.com"
	},
	{
		name: "Real Estate Trading(Ecommerce)",
		desc: "Now your reach to all your favorite Simple real estate app, built with django rest framework with react , redux docker...",
		github: "https://github.com/abrahamgenetu/django-real-estate",
	},
];

export const feedbacks = [
	{
		name: "Dr. Solomon Getnet",
		feedback:
			"“I admire your effort to finish this activity. I knew it wouldn’t be easy, but I had faith in you. Appreciate you for going well beyond.”",
	},
	{
		name: "Tewodros Genetu",
		feedback:
			"“That’s a fantastic start, but you could go even well.” “You’re in the proper direction, but you aren’t there yet.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Abraham Genetu",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Abraham Genetu",
	image: "https://avatars.githubusercontent.com/u/103524169?v=4",
	url: "https://abrahamgenetu.netlify.app",
	keywords: [
		"Abraham Genetu",
		"@abrahamgenetu",
		"abrahamgenetu",
		"Portfolio",
		"AbrahamPortfolio ",
		"Abraham Genetu Portfolio",
	],
}