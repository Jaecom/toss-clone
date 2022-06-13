import styled from "styled-components";
import sprite from "../assets/sprite.svg";
import { device } from "../device";

const Nav = styled.nav`
	width: 100%;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
`;

const Container = styled.div`
	width: 92%;
	max-width: 110rem;
	height: 6rem;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	ul {
		display: none;
		column-gap: 1rem;
		font-size: 1.5rem;

		@media ${device.tablet} {
			display: flex;
		}
	}

	li {
		font-size: 1.4rem;
		font-weight: 500;
		padding: 1rem 1rem;
		cursor: pointer;
		border-radius: 1rem;
		transition: background-color 0.3s ease;
	}

	li:hover {
		background-color: #ebebeb;
	}
`;

const Logo = styled.div`
	display: flex;
	cursor: pointer;
	svg {
		width: 7rem;
		fill: rgb(0, 100, 255);
	}
`;

const Hamburger = styled.div`
	@media ${device.tablet} {
		display: none;
	}
	svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: rgb(176, 184, 193);
	}
`;

const LanguageBar = styled.div`
	font-weight: 300;
	display: flex;
	align-items: center;
	margin-left: 5rem;

	li a {
		font-weight: 400;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Container>
				<Logo>
					<a href="/">
						<svg>
							<use href={sprite + "#toss-logo"} />
						</svg>
					</a>
				</Logo>
				<ul>
					<li>
						<a href="/">회사소개</a>
					</li>
					<li>
						<a href="/">고객센터</a>
					</li>
					<li>
						<a href="/">자주 묻는 질문</a>
					</li>
					<li>
						<a href="/">토스인증서</a>
					</li>
					<li>
						<a href="/">채용</a>
					</li>

					<LanguageBar>
						<li>
							<a href="/">KOR</a>
						</li>
						<span>|</span>
						<li>
							<a href="/en">ENG</a>
						</li>
					</LanguageBar>
				</ul>

				<Hamburger>
					<svg>
						<use href={sprite + "#icon-menu"} />
					</svg>
				</Hamburger>
			</Container>
		</Nav>
	);
};

export default Navbar;
