import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [qoutes1, setQoutes1] = useState();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((respones) => {
        setQoutes1(respones.data);
        console.log(setQoutes1);
      })
      .catch((error) => {
        console.error();
      });
  }, []);
  if (!qoutes1) return null;
  const { id,quotes, quote, author } = qoutes1;
  return (
    <div >
      
      <div className="qoute-box">
      <h2> Quotes</h2>
        {quotes.map((items) => {
          return (
            <div className="qoute-box1"key={items.id}>
              {" "}
              
              <p className="quote">{items.quote}</p>
              <span className="author">{items.author}</span>
            </div>
          )
        })};
      </div>
    </div>
  );
};

export default Blog;
