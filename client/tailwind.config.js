/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				satoshi: ["satoshi", "sans-serif"]
			},
			colors: {
				'teal': {
					'50': '#f0fdfa',
					'100': '#ccfbf1',
					'200': '#99f6e4',
					'300': '#5eead4',
					'400': '#2dd4bf',
					'500': '#14b8a6',
					'600': '#0d9488',
					'700': '#0f766e',
					'800': '#115e59',
					'900': '#134e4a',
					'950': '#042f2e',
				},
				'yellow': {
					'50': '#fefce8',
					'100': '#fef9c3',
					'200': '#fef08a',
					'300': '#fde047',
					'400': '#facc15',
					'500': '#eab308',
					'600': '#ca8a04',
					'700': '#a16207',
					'800': '#854d0e',
					'900': '#713f12',
					'950': '#422006',
				},
				'dull-lavender': {
					'50': '#f4f3ff',
					'100': '#ebe9fe',
					'200': '#d8d5ff',
					'300': '#bcb3ff',
					'400': '#ac9dfd',
					'500': '#7a58fa',
					'600': '#6936f1',
					'700': '#5a24dd',
					'800': '#4b1eb9',
					'900': '#3f1a98',
					'950': '#240e67',
				},
				'azure-radiance': {
					'50': '#eef6ff',
					'100': '#dae9ff',
					'200': '#bddaff',
					'300': '#8fc3ff',
					'400': '#5aa2ff',
					'500': '#357efd',
					'600': '#1e5df2',
					'700': '#1648df',
					'800': '#193bb4',
					'900': '#1a368e',
					'950': '#152356',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				coal: '#0c0908',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		},
		// fontFamily: {
		// 	noto: 'Notosans'
		// }
	},
	plugins: [require("tailwindcss-animate")],
}
