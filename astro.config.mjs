// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://voxxtrade.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'VoxTrade Docs',
			description: 'Voice-to-Voice AI Commerce Protocol on Stellar',
			logo: {
				alt: 'VoxTrade Logo',
				src: './src/assets/logo.svg',
			},
			social: [
				{ icon: 'github', label: 'GitHub Organization', href: 'https://github.com/voxxtrade' },
			],
			editLink: {
				baseUrl: 'https://github.com/voxxtrade/docs/edit/main/',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction & Vision', slug: 'getting-started/introduction' },
						{ label: 'Quickstart Guide', slug: 'getting-started/quickstart' },
						{ label: 'Why Stellar & Soroban?', slug: 'getting-started/why-stellar' },
					],
				},
				{
					label: 'Core Protocol Concepts',
					items: [
						{ label: 'The Three Calling Modes', slug: 'concepts/calling-modes' },
						{ label: 'Acoustic Rate Negotiation', slug: 'concepts/acoustic-negotiation' },
						{ label: 'HTTP 402 & HTLC Escrow', slug: 'concepts/http-402-escrow' },
						{ label: 'AI Synthesis & Transcripts', slug: 'concepts/ai-synthesis' },
					],
				},
				{
					label: 'Smart Contracts (Soroban)',
					items: [
						{ label: 'Contract Architecture', slug: 'contracts/architecture' },
						{ label: 'Agent Treasury Contract', slug: 'contracts/agent-treasury' },
						{ label: 'X402 Escrow Contract', slug: 'contracts/x402-escrow' },
						{ label: 'Security & Auth Hierarchy', slug: 'contracts/security-and-auth' },
					],
				},
				{
					label: 'SDK & Client Integration',
					items: [
						{ label: 'TypeScript SDK Guide', slug: 'sdk/typescript-sdk' },
						{ label: 'Web Testbench & Audio Telemetry', slug: 'sdk/web-testbench' },
						{ label: 'Python Agent Runtime', slug: 'sdk/python-agent' },
					],
				},
				{
					label: 'Reference & Ecosystem',
					items: [
						{ label: 'Live Testnet Deployments', slug: 'reference/deployments' },
						{ label: 'Error Code Glossary', slug: 'reference/error-glossary' },
						{ label: 'Open Source & Contributing', slug: 'reference/contributing' },
					],
				},
			],
		}),
	],
});
