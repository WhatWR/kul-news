import fetchNews from '../../utils/fetchNews'
import NewsList from '../NewsList'

type Props = {
  searchParams?: { term: string }
}

const Searchpage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews('general', searchParams?.term, true)
  return (
    <div>
      <h1 className="headerTitle">Search Results for:{searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default Searchpage
