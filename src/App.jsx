import decoration from './assets/vision.png';

import MarvelService from './api/apiMarvel';
import AppHeader from './components/appHeader/AppHeader';
import CharInfo from './components/charInfo/CharInfo';
import CharList from './components/charList/CharList';
import RandomChar from './components/randomChar/RandomChar';

const App = () => {
	const marvelServices = new MarvelService();
	marvelServices.getCharacter(1011258).then((res) => console.log(res));
	return (
		<div className="app">
			<AppHeader />
			<main>
				<RandomChar />
				<div className="char__content">
					<CharList />
					<CharInfo />
				</div>
				<img className="bg-decoration" src={decoration} alt="vision" />
			</main>
		</div>
	);
};

export default App;
