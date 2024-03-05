import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	Link,
	Typography
} from "@mui/material";

const secondayTextBrightness = 0.80;

export default function Footer() {
	return (
		<Box
			component="footer"
			bottom="0"
			pt={2}
			bgcolor="primary.dark"
		>
			<Container maxWidth="xl">
				<Grid
					container
					textAlign="center"
					spacing={3}
				>
					<Grid item xs={12} sm={4} textAlign={{ xs: "inherit", sm: "left" }}>
						<Typography
							variant="h6"
							fontWeight={700}
							color="primary.contrastText"
							gutterBottom
						>
							About Us
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: `brightness(${secondayTextBrightness})` }}
						>
							We are XYZ company, dedicated to providing the best service to our
							customers.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h6"
							fontWeight={700}
							color="primary.contrastText"
							gutterBottom
						>
							Contact Us
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: `brightness(${secondayTextBrightness})` }}
						>
							123 Main Street
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: `brightness(${secondayTextBrightness})` }}
						>
							Austin, TX 78731
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: `brightness(${secondayTextBrightness})` }}
						>
							Email: info@example.com
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: `brightness(${secondayTextBrightness})` }}
						>
							Phone: +1 (234) 567-8901
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4} textAlign={{ xs: "inherit", sm: "right" }}>
						<Typography
							variant="h6"
							fontWeight={700}
							color="primary.contrastText"
							gutterBottom
						>
							Follow Us
						</Typography>
						<Box>
							<Link href="#">
								<Facebook
									sx={{
										color: "primary.contrastText",
										filter: `brightness(${secondayTextBrightness})`,
									}}
								/>
							</Link>
							<Link href="#" px={1}>
								<Instagram
									sx={{
										color: "primary.contrastText",
										filter: `brightness(${secondayTextBrightness})`,
									}}
								/>
							</Link>
							<Link href="#">
								<Twitter
									sx={{
										color: "primary.contrastText",
										filter: `brightness(${secondayTextBrightness})`,
									}} />
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box pt={3} pb={1}>
				<Typography
					variant="body2"
					align="center"
					color="primary.contrastText"
					sx={{ filter: `brightness(${secondayTextBrightness})` }}
				>
					{"Copyright © "}
					<Link href="#" color="inherit">
						Your Website
					</Link>{" "}
					{new Date().getFullYear()}
					{"."}
				</Typography>
			</Box>
		</Box>
	);
}
