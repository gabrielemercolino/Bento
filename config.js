// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: "Gabriele",
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: "Buongiorno,",
	greetingAfternoon: "Buon pomeriggio,",
	greetingEvening: "Buona sera,",
	greetingNight: "Non sarebbe meglio andare a dormire?",

	// Layout
	bentoLayout: "bento", // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: "bd623cc73adf4822f8f297512ad415d4", // Write here your API Key
	weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: "C", // 'F', 'C'
	language: "it", // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: "37.775",
	defaultLongitude: "-122.419",

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: "18:30",
	hourDarkThemeInactive: "07:00",

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: "1",
			name: "Github",
			icon: "github",
			link: "https://github.com/",
		},
		{
			id: "2",
			name: "Mail",
			icon: "mail",
			link: "https://mail.google.com/mail/u/0/?ogbl#inbox",
		},
		{
			id: "3",
			name: "Todoist",
			icon: "trello",
			link: "https://todoist.com",
		},
		{
			id: "4",
			name: "Calendar",
			icon: "calendar",
			link: "https://calendar.google.com/calendar/r",
		},
		{
			id: "5",
			name: "Reddit",
			icon: "glasses",
			link: "https://reddit.com",
		},
		{
			id: "6",
			name: "Youtube",
			icon: "youtube",
			link: "https://www.youtube.com/",
		},
	],

	secondButtonsContainer: [
		{
			id: "1",
			name: "Music",
			icon: "headphones",
			link: "https://open.spotify.com",
		},
		{
			id: "2",
			name: "twitter",
			icon: "twitter",
			link: "https://twitter.com/",
		},
		{
			id: "3",
			name: "bot",
			icon: "bot",
			link: "https://discord.com/app",
		},
		{
			id: "4",
			name: "Amazon",
			icon: "shopping-bag",
			link: "https://amazon.com/",
		},
		{
			id: "5",
			name: "Hashnode",
			icon: "pen-tool",
			link: "https://hashnode.com/",
		},
		{
			id: "6",
			name: "Figma",
			icon: "figma",
			link: "https://figma.com/",
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: "coffee",
			id: "1",
			links: [
				{
					name: "Reddit",
					link: "https://www.reddit.com",
				},
				{
					name: "X",
					link: "https://x.com",
				},
				{
					name: "Telegram",
					link: "https://web.telegram.org/a/",
				},
				{
					name: "Whatsapp",
					link: "https://web.whatsapp.com/",
				},
			],
		},
		{
			icon: "github",
			id: "2",
			links: [
				{
					name: "Repos",
					link: "https://github.com/gabrielemercolino",
				},
				{
					name: "Corso",
					link: "https://github.com/gabrielemercolino/cardano-introduzione-web-dev",
				},
				{
					name: "Vercel",
					link: "https://vercel.com/gabrielemercolino",
				},
				{
					name: "Idk lol",
					link: "https://vercel.lol/",
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: "music",
			id: "1",
			links: [
				{
					name: "Inspirational",
					link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				},
				{
					name: "Classic",
					link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				},
				{
					name: "Oldies",
					link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				},
				{
					name: "Rock",
					link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
				},
			],
		},
		{
			icon: "coffee",
			id: "2",
			links: [
				{
					name: "Linkedin",
					link: "https://www.linkedin.com",
				},
				{
					name: "Dribbble",
					link: "https://www.dribbble.com",
				},
				{
					name: "Trello",
					link: "https://www.trello.com",
				},
				{
					name: "Slack",
					link: "https://www.slack.com",
				},
			],
		},
	],
};
