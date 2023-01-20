import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
//import searchBar from './SearchBar'

const NewsList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            //Need to figure out how I can incorporate a user's search into this get request to NewsAPI
            const response = await axios.get('https://newsapi.org/v2/everything?q=How%20to%20exit%20a%20startup&apiKey=0ceab93a339d489bbfcea8833e423d40')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem 
                        title = {article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList