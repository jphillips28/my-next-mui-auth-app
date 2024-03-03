"use client";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography
} from "@mui/material";
import { useState } from "react";

const pages = [
	{ name: "Home", route: "/" },
	{ name: "Blog", route: "/blog" },
	{ name: "About", route: "/about" },
];
const userSettings = ["Profile", "Logout"];

export default function Nav() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{ justifyContent: "space-between" }}
				>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="start"
					>
						<IconButton
							size="large"
							color="inherit"
							aria-label="nav-menu"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
						>
							{pages.map((page, index) => (
								<MenuItem
									key={index}
									onClick={handleCloseNavMenu}
								>
									<Link
										key={index}
										href={page.route}
										color="inherit"
										underline="none"
									>
										{page.name}
									</Link>
								</MenuItem>
							))}
						</Menu>
						<Link
							href="/"
							display={{ xs: "none", sm: "inherit" }}
						>
							<LogoDevIcon
								fontSize="large"
								sx={{
									width: 50,
									height: 50,
									color: "primary.contrastText",
								}} />
						</Link>
					</Box>
					<Link
						href="/"
						display={{ xs: "inherit", sm: "none" }}
					>
						<LogoDevIcon
							fontSize="large"
							sx={{
								width: 50,
								height: 50,
								color: "primary.contrastText",
							}} />
					</Link>
					<Stack
						display={{ xs: "none", sm: "flex" }}
						direction="row"
						spacing={10}
					>
						{pages.map((page, index) => (
							<Link
								key={index}
								href={page.route}
								underline="none"
							>
								<Typography
									variant="h6"
									fontWeight={700}
									color="primary.contrastText"
								>
									{page.name}
								</Typography>
							</Link>
						))}
					</Stack>
					<Box>
						<IconButton onClick={handleOpenUserMenu}>
							<Avatar
								src="TODO with NextAuth implementation"
								alt="Jacob Phillips"
							/>
						</IconButton>
						<Menu
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{userSettings.map((setting, index) => (
								<MenuItem
									key={index}
									onClick={handleCloseUserMenu}
								>
									{setting}
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
