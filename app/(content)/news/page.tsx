import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [news, setNews] = useState([]);

  const news = await getAllNews();

  // const response = await fetch("http://localhost:8080/news");
  // const news = await response.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news!");
  // }

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/news");

  //     if (!response.ok) {
  //       setError("Failed to fetch news!");
  //       setIsLoading(false);
  //     }

  //     const news = await response.json();
  //     setIsLoading(false);
  //     setNews(news);
  //   };

  //   fetchNews();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading..</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // let newsContent;

  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
