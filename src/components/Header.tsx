import styled from "styled-components";
import appleIcon from "../assets/applekorea.png";
import googleIcon from "../assets/googleplay.png";

const Wrapper = styled.div`
	height: 100vh;
	position: relative;

	h1 {
		font-size: 6rem;
		font-weight: 700;
	}

	background-image: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0.6587009803921569) 50%,
		rgba(255, 255, 255, 0) 100%
	);
`;

const Background = styled.div`
	width: 100%;
	overflow: hidden;
	position: absolute;
	inset: 0;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Container = styled.div`
	padding-top: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ButtonWrapper = styled.div`
	margin-top: 5rem;
	display: flex;
	column-gap: 0.5rem;
`;

const Button = styled.a`
	padding: 2rem 3rem;
	font-size: 1.6rem;
	font-weight: 500;

	cursor: pointer;

	color: white;
	background-color: #000c1ecc;
	border-radius: 1rem;

	display: flex;

	img {
		width: 2rem;
		height: 2rem;
		object-fit: cover;
		margin-right: 0.5rem;
	}

	&:hover {
		background-color: rgb(78, 89, 104);
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<Background>
				<img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
			</Background>
			<Container>
				<h1>
					금융의 모든 것 <br></br>토스에서 쉽고 간편하게
				</h1>
				<ButtonWrapper>
					<Button href="/">
						<img src={appleIcon} />
						App Store
					</Button>
					<Button href="/">
						<img src={googleIcon} />
						Google Play
					</Button>
				</ButtonWrapper>
			</Container>
		</Wrapper>
	);
};

export default Header;
