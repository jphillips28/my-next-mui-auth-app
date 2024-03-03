import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	Link,
	Typography
} from "@mui/material";

export default function Footer() {
	return (
		<Box
			component="footer"
			position="absolute"
			bottom={0}
			width="100%"
			bgcolor="primary.dark"
			pt={2}
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
							sx={{ filter: "brightness(90%)" }}
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
							sx={{ filter: "brightness(90%)" }}
						>
							123 Main Street
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: "brightness(90%)" }}
						>
							Austin, TX 78731
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: "brightness(90%)" }}
						>
							Email: info@example.com
						</Typography>
						<Typography
							variant="body2"
							color="primary.contrastText"
							sx={{ filter: "brightness(90%)" }}
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
						<Box
							color="primary.contrastText"
							sx={{ filter: "brightness(90%)" }}
						>
							<Link href="#" color="inherit">
								<Facebook />
							</Link>
							<Link
								href="#"
								color="inherit"
								sx={{ pl: 1, pr: 1 }}
							>
								<Instagram />
							</Link>
							<Link href="#" color="inherit">
								<Twitter />
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
					sx={{ filter: "brightness(90%)" }}
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
