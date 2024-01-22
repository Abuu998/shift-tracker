import Container from "@/components/Container";
import ShiftList from "@/components/ShiftList";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import StartNewShift from "@/components/shift/StartNewShift";

export default async function Home() {
	const session = await getServerSession(authOptions)

	return (
		<main>
			<Container className="flex flex-col gap-12">
				<StartNewShift userId={session?.user?.id} />
				<ShiftList />
			</Container>
		</main>
	);
}
