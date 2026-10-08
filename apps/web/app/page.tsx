const products = [
  {
    name: "B2B Wholesale Packaging",
    category: "Business Supplies",
    price: "$149",
    match: "92% buyer fit",
  },
  {
    name: "Smart Office Kit",
    category: "Office Tech",
    price: "$299",
    match: "88% buyer fit",
  },
  {
    name: "Eco-Friendly Home Set",
    category: "Consumer Goods",
    price: "$89",
    match: "90% buyer fit",
  },
  {
    name: "Digital Sales Bundle",
    category: "Software",
    price: "$499",
    match: "95% buyer fit",
  },
];

const filters = ["All", "B2B", "B2C", "Tech", "Home", "Wholesale"];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Marketplace for real buyers</p>
          <h1>Find the right buyer for every product.</h1>
          <p className="subtext">
            Connect sellers and buyers through smart discovery, category matching, and
            lead-focused experiences built for both business and consumer markets.
          </p>
          <div className="cta-row">
            <button className="primary">List a product</button>
            <button className="secondary">Explore buyers</button>
          </div>
          <div className="stats">
            <div>
              <strong>28K+</strong>
              <span>Active buyers</span>
            </div>
            <div>
              <strong>3.4x</strong>
              <span>Higher conversion</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Market visibility</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">
            <span className="label">Buyer intent</span>
            <h3>High-intent leads</h3>
            <ul>
              <li>Retail buyers: 41%</li>
              <li>Business buyers: 36%</li>
              <li>Resellers: 23%</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="catalog">
        <div className="section-header">
          <div>
            <p className="eyebrow">Matches by category</p>
            <h2>Recommended for you</h2>
          </div>
          <a href="#">View all products</a>
        </div>

        <div className="filters">
          {filters.map((filter) => (
            <button key={filter} className={filter === "All" ? "pill active" : "pill"}>
              {filter}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="thumb" aria-hidden="true" />
              <div className="card-body">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="meta-row">
                  <span>{product.match}</span>
                  <strong>{product.price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
