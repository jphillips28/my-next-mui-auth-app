import { Box, Container, Typography } from "@mui/material";

export default function Blog() {
	return (
		<main>
			<Container>
				<Box
					minHeight={"calc(100vh - 250px)"}
					px={2}
					pt={2}
					pb={10}
				>
					<Typography
						variant="h1"
						textAlign="center"
					>
						Hello Future Blogs!
					</Typography>
				</Box>
			</Container>
		</main>
	);
}
