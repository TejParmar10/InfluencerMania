import React from "react";
import Footer from "./index.js";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';

export function FooterContainer() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
				}}
			></Box>
			<Footer>
				<Footer.Wrapper>
					<Footer.Row>
						<Footer.Column>
							<Footer.Title>About</Footer.Title>
							<Footer.Link>
								<Link to="/ourpeople">Our People</Link>
							</Footer.Link>
							<Footer.Link>
								<Link to="/ourwork">Our Work</Link>
							</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>WHAT WE DO</Footer.Title>
							<Footer.Link>
								<Link to="/strategy">Strategy</Link>
							</Footer.Link>
							<Footer.Link>
								<Link to="/Insights">Insights</Link>
							</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>Contact </Footer.Title>
							<Footer.Link>Contact:111-222-33-4</Footer.Link>
							<Footer.Link>Mail:ifluencermania@gmail.com</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>Social</Footer.Title>
							<Footer.Link>Instagram</Footer.Link>
							<Footer.Link>Facebook</Footer.Link>
						</Footer.Column>
					</Footer.Row>
				</Footer.Wrapper>
			</Footer>
		
		</>
	);
}

// ReactDOM.render(<App />, document.getElementById("root"));
// export default footer;
