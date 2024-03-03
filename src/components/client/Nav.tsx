"use client";
import { LogoDev, Menu as MenuIcon } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pages = [
	{ name: "Home", route: "/" },
	{ name: "Blog", route: "/blog" },
];

export default function Nav() {
	const pathName = usePathname();
	const { data: session, status } = useSession();
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
							<LogoDev
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
						<LogoDev
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
					{session && session.user ? (
						<Box>
							<IconButton onClick={handleOpenUserMenu}>
								<Avatar
									src={session.user?.image ?? ""}
									alt={session.user?.name ?? ""}
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
								<MenuItem
									onClick={handleCloseUserMenu}
								>
									<Link
										href="#"
										color="inherit"
										underline="none"
									>
										Profile
									</Link>
								</MenuItem>
								<MenuItem
									onClick={handleCloseUserMenu}
								>
									<Link
										color="inherit"
										underline="none"
										onClick={() => signOut()}
									>
										Logout
									</Link>
								</MenuItem>
							</Menu>
						</Box>
					)
						:
						(
							<Box>
								<Button
									color="inherit"
									sx={{ fontWeight: 700 }}
									onClick={() => signIn()}
								>
									Login
								</Button>
							</Box>
						)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
