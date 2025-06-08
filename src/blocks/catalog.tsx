import "./catalog.css";

const products = [
  {
    id: 1,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/dd/08/78/dd0878c4d8a70a18caa2ab91567c6c8c.jpg",
  },
  {
    id: 2,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/eb/a2/91/eba2911ce52724a306481f418a713f3b.jpg",
  },
  {
    id: 3,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
  // Добавьте остальные товары...
  {
    id: 4,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
  {
    id: 5,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
  {
    id: 6,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
  {
    id: 7,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
  {
    id: 8,
    name: "Lace-Up Jacket",
    price: "1200$",
    image:
      "https://i.pinimg.com/736x/f4/2f/be/f42fbe92e055dc1772404b3751d6400a.jpg",
  },
];

export default function Catalog() {
  return (
    <div className="container">
      <div className="catalog">
        <div className="catalog__title">
          <span className="catalog__span">
            <h1 className="catalog__h1">zivy</h1>
            <p>new collection</p>
          </span>
          <p className="shop">shop</p>
        </div>
        <div className="catalog__cards">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card__img">
                <img src={product.image} alt={product.name} width="100%" />
              </div>
              <div className="card__info">
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <div
                  className="card__buy"
                  onClick={() => console.log("Товар добавлен")}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
