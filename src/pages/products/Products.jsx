import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Products = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // All ///////////////

  useEffect(() => {
    fetchPosts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(posts.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      axios
        .delete(
          `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/` + id
        )
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="Products">
      <div className="container">
        <div className="big">
          <div className="table">
            {posts.length > 0 && (
              <div className="head">
                <h2>Все товары (5)</h2>
                <input type="email" class="search" placeholder="search..." />
              </div>
            )}
            <div className="line"></div>
            {posts.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>
                      <img src="../table-icon.png" alt="icon" />
                    </th>
                    <th>имя</th>
                    <th className="first">Артикул</th>
                    <th>Бренд</th>
                    <th>Цена</th>
                    <th>Цена со скидкой</th>
                  </tr>
                </thead>

                {records.map((post, index) => (
                  <tbody key={index}>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          name="chekbox"
                          id="chekbox"
                          className="form-check-input checkbox "
                        />
                      </th>

                      <td> {post.name}</td>

                      <td>{post.code}</td>
                      <td>{post.brand}</td>
                      <td>{post.price} $</td>
                      <td>{post.priceSale}$</td>
                      <td>
                        <button className="edit">
                          <img src="edit.png" alt="icon" />
                        </button>
                        <button
                          className="delete"
                          onClick={(e) => handleDelete(post.id)}
                        >
                          <img src="delete.png" alt="icon" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>

          <div className="footer1">
            <div className="pagination">
              {posts.length > 1 && (
                <button className="paginations" onClick={prePage}>
                  <img src="../page-left.png" alt="icon" />
                </button>
              )}
              {numbers.map((n, i) => (
                <button
                  className={`pagination-btn ${
                    currentPage === n ? "active" : ""
                  }`}
                  key={i}
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </button>
              ))}
              {posts.length > 1 && (
                <button className="paginations" onClick={nextPage}>
                  <img src="../page-right.png" alt="icon" />
                </button>
              )}
            </div>
          </div>

          {posts.length < 1 && (
            <div className="free">
              <h2>Вы пока не создали ни одного товара</h2>
              <img src="./free.png" alt="img" />
              <NavLink to={"/add"}>
                <button className="add">Создать первый товар</button>
              </NavLink>
            </div>
          )}
        </div>
        {posts.length > 0 && (
          <footer>
            <NavLink to={"/add"}>
              <button className="new">+ Новый товар</button>
            </NavLink>
            <p>© Anymarket 2022</p>
          </footer>
        )}
        {posts.length < 1 && (
          <footer className="free-footer">
            <p>© Anymarket 2022</p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Products;
