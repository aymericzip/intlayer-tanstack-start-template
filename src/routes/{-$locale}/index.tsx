import { createFileRoute } from "@tanstack/react-router";
import {
	Route as RouteIcon,
	Server,
	Shield,
	Sparkles,
	Waves,
	Zap,
} from "lucide-react";
import { useIntlayer } from "react-intlayer";

export const Route = createFileRoute("/{-$locale}/")({ component: App });

function App() {
	const {
		logoAlt,
		heroSubtitle,
		heroDescription,
		docButtonLabel,
		guideTextPrefix,
		features: featureTranslations,
	} = useIntlayer("app");

	const featureIconComponents = [
		() => <Zap className="w-12 h-12 text-cyan-400" />,
		() => <Server className="w-12 h-12 text-cyan-400" />,
		() => <RouteIcon className="w-12 h-12 text-cyan-400" />,
		() => <Shield className="w-12 h-12 text-cyan-400" />,
		() => <Waves className="w-12 h-12 text-cyan-400" />,
		() => <Sparkles className="w-12 h-12 text-cyan-400" />,
	];

	const features = featureTranslations.map((featureTranslation, index) => ({
		icon: featureIconComponents[index](),
		title: featureTranslation.title.value,
		description: featureTranslation.description.value,
	}));

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 text-center overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
				<div className="relative max-w-5xl mx-auto">
					<div className="flex items-center justify-center gap-6 mb-6">
						<img
							src="/tanstack-circle-logo.png"
							alt={logoAlt.value}
							className="w-24 h-24 md:w-32 md:h-32"
						/>
						<h1 className="text-6xl md:text-7xl font-black text-white tracking-[-0.08em]">
							<span className="text-gray-300">TANSTACK</span>{" "}
							<span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
								START
							</span>
						</h1>
					</div>
					<p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
						{heroSubtitle}
					</p>
					<p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
						{heroDescription}
					</p>
					<div className="flex flex-col items-center gap-4">
						<a
							href="https://tanstack.com/start"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
						>
							{docButtonLabel}
						</a>
						<p className="text-gray-400 text-sm mt-2">
							{guideTextPrefix}
							<code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
								/src/routes/index.tsx
							</code>
						</p>
					</div>
				</div>
			</section>

			<section className="py-16 px-6 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
						>
							<div className="mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold text-white mb-3">
								{feature.title}
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
