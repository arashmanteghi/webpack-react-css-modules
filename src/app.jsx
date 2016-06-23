import React from 'react';
import ReactDOM from 'react-dom';

import './sass/global_scope.scss';  // import global css
import styles from './sass/local_scope.scss'; //import local css


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actor: 'CSS Modules ',
		}
	}
	render() {
		return (
			<section className={styles.wrapper}>
				<h1 className={styles.hero}>
					<a href="https://github.com/css-modules/css-modules">
						<span
							className={styles.actor}
							contentEditable="true"
							autofocus="true"
							dangerouslySetInnerHTML={{__html: `${this.state.actor}` }}
						></span>
					</a>
					 + <a href="https://facebook.github.io/react/">React!</a>
				</h1>
				<h3 className={styles.lead}>Webpack–React–Babel–SCSS–PostCSS.</h3>
				<span className={styles.basedOn}>Based on
					<a href="https://twitter.com/sia_mac" target="_blanl"> Siamak Mokhtari</a>'s
					<a href="https://github.com/siamak/webpack-react-babel-boilerplate" target="_blank"> boilerplate</a>
				</span>
			</section>
		);
	}
}
export default App;

ReactDOM.render(
	<App />,
	document.querySelector('#app')
);
