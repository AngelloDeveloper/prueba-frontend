import {useEffect, useState} from 'react';
import api from '../../../api/apiConfig';
import Article from './Article';

const Articles = () => {

	const [articles, setArticles] = useState({});
	useEffect(() => {
		handleGetArticle()
			.then((result) => {
				const objArticles = result.data;
				setArticles(objArticles);
			})
	},[]);

	const handleGetArticle = async () => {
		const articles = await api.get('articles');
		return articles;
	}
	
	return (
		<>
			{ 
				articles.length != undefined 
					? 	articles.map((item) => {
							return (
								<div key={item.id} className="col-12 col-sm-6 col-md-6 col-lg-4">
									<Article title={item.title} category={item.category} image={item.image} />
								</div>
							)
						}) 
					: ''
				
			}
		</>
	)
}

export default Articles