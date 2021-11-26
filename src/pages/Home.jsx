import ProductCategories from "../components/ProductCategories";
import Story from "../components/Story";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <p className="sub-title">NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="text-details">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <a href="#" className="btn btn-primary">
            See Product
          </a>
        </div>
      </section>

      <ProductCategories />

      <div className="container">
        <section className="featured-primary grid-12 text-light">
          <div className="text-container">
            <h1 class="title">ZX9 Speaker</h1>
            <p className="text-details">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <a href="#" className="btn btn-dark">
              See Product
            </a>
          </div>
        </section>

        <section className="featured-secondary grid-12">
          <div className="text-container">
            <h3 class="title">ZX7 Speaker</h3>
            <a href="#" className="btn btn-outline">
              See Product
            </a>
          </div>
        </section>

        <section className="featured-tertiary grid-12">
          <div className="left-side"></div>
          <div className="right-side grid-6">
            <div className="text-container">
              <h3 class="title">XY1 Earphone</h3>
              <a href="#" className="btn btn-outline">
                See Product
              </a>
            </div>
          </div>
        </section>
      </div>

      <Story />
    </div>
  );
}

export default Home;
