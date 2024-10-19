import { Button } from "@/components/ui/button";

function HomePage() {
	return (
		<div>
			<h1 className="text-3xl">Homepage</h1>
			<Button variant="outline" size="lg" className="capitalize m-8">
				Click me
			</Button>
		</div>
	);
}

export default HomePage;
