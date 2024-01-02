import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html,
	body {
		font-family: ${({ theme: { fonts } }) => fonts.primaryFont};
		background: ${({ theme }) => theme.colors.primaryGreen};
		font-size: ${(props) => props.theme.fontSizes.regularParagraph}px;
	}

	input,
    textarea {
		font-size: ${(props) => props.theme.fontSizes.regularParagraph}px;
		font-family: ${({ theme: { fonts } }) => fonts.primaryFont};

		&::placeholder {
			opacity: 30%;
			color: ${({ theme }) => theme.colors.primaryGreen};
			font-family: ${({ theme }) => theme.fonts.primaryFont};
			font-size: ${({ theme }) => theme.fontSizes.smallParagraph}px;
			font-weight: ${({ theme }) => theme.fontWeights.normal};
			line-height: ${({ theme }) => theme.lineHeight.smallParagraph};
			letter-spacing: ${({ theme }) => theme.letterSpacing.smallParagraph}px;
		}
	}

	label {
		color: ${({ theme }) => theme.colors.cream};
		font-size: ${({ theme }) => theme.fontSizes.largeParagraph}px;
		font-weight: ${({ theme }) => theme.fontWeights.medium};
		letter-spacing: ${({ theme }) => theme.letterSpacing.largeParagraph}px;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0.5em 0;
		color: ${({ theme }) => theme.colors.lime};
		font-weight: ${({ theme: { fontWeights } }) => fontWeights.extraBold};
		font-family: ${({ theme }) => theme.fonts.accentFont};
		line-height: ${({ theme: { lineHeight } }) => lineHeight.heading};
	}

	h1 {
		font-size: ${({ theme }) => theme.headingSizes.h1}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h1}px;
	}

	h2 {
		font-size: ${({ theme }) => theme.headingSizes.h2}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h2}px;
	}

	h3 {
		font-size: ${({ theme }) => theme.headingSizes.h3}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h3}px;
	}

	h4 {
		font-size: ${({ theme }) => theme.headingSizes.h4}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h4}px;
	}

	h5 {
		font-size: ${({ theme }) => theme.headingSizes.h5}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h5}px;
	}

	h6 {
		font-size: ${({ theme }) => theme.headingSizes.h6}px;
		letter-spacing: ${({ theme }) => theme.letterSpacing.h6}px;
	}
`;

export default GlobalStyle;
