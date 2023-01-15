import { categories } from '../constants'
import fetchNews from '../utils/fetchNews'
import NewsList from './NewsList'
import response from '../response.json'
import sortNewsByImage from '../utils/sortNewsByImage'


type Props = {}

const Homepage = async (props: Props) => {
  const newsMock = sortNewsByImage(response)
  const news: NewsResponse = newsMock || (await fetchNews(categories.join(',')))

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage
