import "../../styles/Shop.css";

const products = [
  {
    id: 1,
    name: "Barra proteíca",
    price: "$2.000",
    image: "/src/assets/imgs/tienda5.avif",
  },
  {
    id: 2,
    name: "Agua hidratante",
    price: "$1.800",
    image: "/src/assets/imgs/tienda6.avif",
  },
  {
    id: 3,
    name: "Galletas de proteína",
    price: "$1.800",
    image: "/src/assets/imgs/tienda1.avif",
  },
  {
    id: 4,
    name: "Creatina",
    price: "$1.800",
    image: "/src/assets/imgs/tienda2.avif",
  },
  {
    id: 5,
    name: "Barra proteíca",
    price: "$2.000",
    image: "/src/assets/imgs/tienda3.avif",
  },
  {
    id: 6,
    name: "Agua hidratante",
    price: "$1.800",
    image: "/src/assets/imgs/tienda4.avif",
  },
];

const ShopPage = () => {
  return (
    <section className="shop-section">
      <h4 className="shop-subtitle">Tienda</h4>
      <p className="shop-description">
        Disponible de manera presencial, consulta disponibilidad.
      </p>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="shop-card">
            <img src={product.image} alt={product.name} />
            <div className="shop-card-overlay">
              <h3 className="shop-card-name">{product.name}</h3>
              <p className="shop-card-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopPage;