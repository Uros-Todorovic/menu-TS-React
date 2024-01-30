import MenuItem from './MenuItem.tsx';
import { MenuDataType } from './data.tsx';
type MenuProps = {
	items: MenuDataType[];
};
const Menu = ({ items }: MenuProps) => {
	return (
		<div className="section-center">
			{items.map((menuItem) => {
				return <MenuItem key={menuItem.id} {...menuItem} />;
			})}
		</div>
	);
};

export default Menu;
