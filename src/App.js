import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  // const[currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [postsPerPage] = useState("20");

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);

  const setNextPage = (number) => setCurrentPage(number);
  
  const setNextPageOnClick = () => {
    if(currentPage < (posts / postsPerPage)){
      return setCurrentPage(currentPage + 1)
    }
  }
  const setPreviousPageOnClick = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <h2 className="text-primary">My Blog</h2>
      <Posts posts={currentPosts} />
      <div className="page">
      <Pagination
        totalPost={posts}
        postPerPage={postsPerPage}
        setNextPage={setNextPage}
        nextPage = {setNextPageOnClick}
        previousPage = {setPreviousPageOnClick}
      />
      </div>
    </div>
  );
}

export default App;
