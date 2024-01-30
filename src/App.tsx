import { useState } from 'react';
import Title from './Title.tsx';
import data, { MenuDataType } from './data.tsx';
import Menu from './Menu.tsx';
import Categories from './Categories.tsx';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
	const [menuItems, setMenuItems] = useState<MenuDataType[]>(data);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category: string) => {
		if (category === 'all') {
			setMenuItems(data);
			setCategories(allCategories);
		} else {
			const filteredItems = data.filter((item) => item.category === category);
			setMenuItems(filteredItems);
		}
	};

	return (
		<main>
			<section className="menu">
				<Title text="our menu" />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
};
export default App;
