import "../../styles/Shop.css";

const products = [
  {
    id: 1,
    name: "Barra proteíca",
    price: "$2.000",
    image: "/src/assets/imgs/photo-1554886729-fe8d4499a108.avif",
  },
  {
    id: 2,
    name: "Agua hidratante",
    price: "$1.800",
    image: "/src/assets/imgs/photo-1722925541142-5db2668ca492.avif",
  },
  {
    id: 3,
    name: "Galletas de proteína",
    price: "$1.800",
    image: "/src/assets/imgs/photo-1621057621391-7ed446a24b41.avif",
  },
  {
    id: 4,
    name: "Creatina",
    price: "$1.800",
    image: "/src/assets/imgs/premium_photo-1661284821625-9400498df354.avif",
  },
  {
    id: 5,
    name: "Barra proteíca",
    price: "$2.000",
    image: "/src/assets/imgs/photo-1554886729-fe8d4499a108.avif",
  },
  {
    id: 6,
    name: "Agua hidratante",
    price: "$1.800",
    image: "/src/assets/imgs/photo-1722925541142-5db2668ca492.avif",
  },
];

const ShopPage = () => {
  return (
    <section className="shop-section">
      <p className="shop-subtitle">Tienda</p>
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