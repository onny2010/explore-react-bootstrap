
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';


// const c = [];
// const number = c.length === 0 ? 5: 10;

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=16dc9a18c35c4bac99619121415c37bc')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">


      {news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>}
    </div>
  );
}

export default App;
