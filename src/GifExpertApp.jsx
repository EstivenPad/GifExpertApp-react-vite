import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		// console.log( newCategory )
		// categories.push('DBZ')  "EVITAR USAR push() porque muta el objeto o arreglo. React trata de no mutar el estado"
		// setCategories( cat => ['Dragon Ball Z', ...cat]);

		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>Gif Expert App</h1>

			<AddCategory
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{
				categories.map(category => (
					<GifGrid
						key={category}
						category={category}
					/>
				))
			}

		</>
	)
}
