import Link from "next/link";
import Image from "next/legacy/image";
import CondoCard from "@/components/CondoCard";
import PreconSchema from "@/components/PreconSchema";
import BottomContactForm from "@/components/BottomContactForm";
import MainSearch from "@/components/MainSearch";
import "../icons.css";
// import FeaturedCard from "@/components/FeaturedCard";
import AOSWrapper from "@/components/AOSWrapper";

async function getData(city) {
  const res = await fetch(
    "https://wong.condomonk.ca/api/preconstructions-city/" +
      city +
      "?page_size=10",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getCities() {
  const res = await fetch("https://wong.condomonk.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
// async function getFeaturedData() {
//   const res = await fetch(
//     "https://wong.condomonk.ca/api/preconstructions/?is_featured=True",
//     {
//       next: { revalidate: 10 },
//     }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
export default async function Home(props) {
  /* const data = await getData("calgary");
  const mississauga_data = await getData("mississauga");
  const edmonton_data = await getData("edmonton");
  const cambridge_data = await getData("cambridge"); */
  let cities = await getCities();
  // let dropdown_cities = await getCitiesandProjects();
  // const featured = await getFeaturedData();

  const filteredprojects = (value) => {
    return dropdown_cities.filter((city) => {
      return value.includes(city.name);
    });
  };

  return (
    <>
      <AOSWrapper>
        <section className="hero-section">
          <div className="container">
            <div className=" my-4 text-center d-flex justify-content-center align-items-center ">
              <h1 className="font-family2 hero-text ">
                Maldive's Most Reliable Home Selling, Leasing & Investing
                Platform
              </h1>
            </div>
            <div className="row row-cols-md-4 row-cols-2 justify-content-center pt-md-5 pt-0">
              <div
                className="col"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <img src="1.jpg" alt="Image 1" className="img-1" />
              </div>
              <div
                className="col"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <img src="2.jpg" alt="Image 2" className="img-2" />
              </div>
              <div
                className="col"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <img src="7.jpg" alt="Image 3" className="img-3" />
              </div>
              <div
                className="col"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <img src="4.jpg" alt="Image 4" className="img-4" />
              </div>
            </div>
          </div>
        </section>
      </AOSWrapper>

      {/* <div className="pt-5 " id="top10gta">
        <div className="container pt-5 ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-mine fs-big ">
              <span className="link-black font-family2">Featured Project</span>
            </h2>
            <p className="fs-5  text-center">
              Explore Top 10 Pre Construction Project for sale in GTA
            </p>
          </div>

          <div className="">
            <div className="row row-cols-1 row-cols-md-2 my-md-2 my-3 gy-3 g-4">
              {featured.results &&
                featured.results.slice(0, 8).map((item) => (
                  <div className="col" key={item.id}>
                    <script
                      key={item.slug}
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(PreconSchema(item)),
                      }}
                    />
                    <FeaturedCard {...item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-5 ">
        <div className="container pt-5 " id="projects">
          <div className=" pb-3">
            <div className=" d-flex justify-content-center align-items-center">
              <h2 className="fw-mine ccent-line fs-big text-center">
                <Link
                  href={"/calgary"}
                  className="link-black font-family2 px-md-4 px-0"
                >
                  Appartment for sale in Malé
                </Link>
              </h2>
            </div>
            <div className="text-center pb-3">
              <p className="fs-5 mb-1">Explore 20+ appartments in Malé</p>
              <Link
                href={"/calgary"}
                className="mt-1 btn btn-outline-dark mb-0"
              >
                Explore All
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
          </div>
          {/* 
          <div className="row row-cols-1 row-cols-md-4 gy-md-5 gx-3">
            {data.preconstructions &&
              data.preconstructions.slice(0, 8).map((item) => (
                <div className="col" key={item.id}>
                  <script
                    key={item.slug}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(PreconSchema(item)),
                    }}
                  />
                  <CondoCard {...item} />
                </div>
              ))}
          </div>
          */}

          <div className="container my-4">
            <div className="row pt-5 mt-md-5 align-items-center justify-content-between">
              <div className="col-md-6">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/image1.jpeg"
                        className="d-block w-100"
                        alt="Image 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/image2.jpeg"
                        className="d-block w-100"
                        alt="Image 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/image3.jpeg"
                        className="d-block w-100"
                        alt="Image 3"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="font-family2 fw-bold sm-center mt-4 mt-md-0 text-4xl">
                  Looking For Villa / Appartment In Maldives?
                </h1>
                <div className="buttons my-3 sm-center">
                  <Link href="#contact">
                    <button className="button btn btn-dark  mr-2">
                      Request Information
                    </button>
                    <button className="button btn btn-primary">
                      Contact Now
                    </button>
                  </Link>
                </div>
                <p className="pt-2">
                  Welcome to Maldiveshomes.com, The most reliable platform for
                  home selling, leasing, and investing. Stay ahead with the
                  latest updates on prime real estate opportunities across the
                  Maldives. Discover exclusive insights and secure your dream
                  property with ease and confidence.
                </p>
                <div className="recently-bought pt-md-4 pt-2">
                  <h2 className="fw-normal font-family2 text-3xl sm-center text-decoration-underline">
                    New Appartment
                  </h2>
                  <div className="row g-3">
                    <div className="col-4 ">
                      <img
                        src="/image1.jpeg"
                        className="img-fluid img-small"
                        alt="Image 1"
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="/image2.jpeg"
                        className="img-fluid img-small"
                        alt="Image 2"
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="/image3.jpeg"
                        className="img-fluid img-small"
                        alt="Image 3"
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="/image4.jpeg"
                        className="img-fluid img-small"
                        alt="Image 4"
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="/image5.jpeg"
                        className="img-fluid img-small"
                        alt="Image 5"
                      />
                    </div>
                    <div className="col-4 ">
                      <img
                        src="/image6.jpeg"
                        className="img-fluid img-small"
                        alt="Image 6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm-center mt-2 mt-md-0">
                  <Link href="#projects">
                    <div className=" mt-3 btn btn-outline-dark sm-center  ">
                      {" "}
                      <span className="sm-center btn-outline-dark ">
                        Explore More{" "}
                        <i class="bi bi-arrow-up-right-circle sm-center "></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 my-2"></div>
          <h2 className="fw-mine text-center mb-5 accent-line font-family2 fs-big">
            Explore Villas & Appartment In Maldives
          </h2>
          <div className="container text-center my-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/male.jpg"
                    className="city-image"
                    alt="Malé"
                  />
                  <div className="city-title">Malé</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Fuvahmulah.jpg"
                    className="city-image"
                    alt="Fuvahmulah"
                  />
                  <div className="city-title">Fuvahmulah</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Hithadhoo.jpg"
                    className="city-image"
                    alt="Hithadhoo"
                  />
                  <div className="city-title">Hithadhoo</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Kulhudhuffushi.jpeg"
                    className="city-image"
                    alt="Kulhudhuffushi"
                  />
                  <div className="city-title">Kulhudhuffushi</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Thinadhoo.jpg"
                    className="city-image"
                    alt="Thinadhoo"
                  />
                  <div className="city-title">Thinadhoo</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Naifaru.webp"
                    className="city-image"
                    alt="Naifaru"
                  />
                  <div className="city-title">Naifaru</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Hulhumale.jpg"
                    className="city-image"
                    alt="Hulhumale"
                  />
                  <div className="city-title">Hulhumale</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4">
                <div className="city-card">
                  <img
                    src="cities/Maafushi.jpeg"
                    className="city-image"
                    alt="Maafushi"
                  />
                  <div className="city-title">Maafushi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-md-5 pt-2" id="about">
            <h2 className="fw-mine text-center mb-5 fs-big font-family2">
              Your Expert Guide to Luxury Living in Maldives
            </h2>
            <div className="pt-md-5 pt-0"></div>
            <div className="pt-md-5 pt-0"></div>
            <div className="container testimonial-section">
              <div className="row">
                <div className="col-md-6 order-md-1 order-2">
                  <p className="testimonial-quote textt center-sm ps-md-5 ps-0 sm-center">
                    Meet <span className="fw-bold">Milan Pandey,</span> <br />
                    your dedicated real estate agent with a passion for helping
                    you find the perfect property. Whether you're searching for
                    a luxurious condo, a spacious villa, or a modern apartment,
                    Milan's expertise and personalized approach ensure that you
                    will discover a home that meets all your needs and desires.
                    Specializing in both sales and leases, Milan is committed to
                    guiding you through every step of the real estate process,
                    making your journey to finding your dream home smooth and
                    enjoyable.
                  </p>
                </div>
                <div className="col-md-6 order-md-2 order-1 pb-md-0 pb-5">
                  <img
                    src="/agent.png"
                    alt="Milan Pandey"
                    class="testimonial-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="py-5 mt-md-5 mt-0">
            <div className="text-center py-5 my-5 overlay-container">
              <img
                src="/heroBanner.png"
                className="img-fluid d-md-block d-none"
                alt=""
              />
              <img
                src="/heroBanner-sm.png"
                className="img-fluid d-md-none d-block"
                alt=""
              />
            </div>
          </div> */}

          <div className="pt-md-5 pt-0 mt-md-5 mt-0"></div>
          <div className="py-5 my-md-5 my-0" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <Image
                  src="/contact-bottom-2.png"
                  alt="Contact bottom"
                  width={300}
                  height={250}
                  className="img-fluid w-25 w-smm-50 mb-3"
                />
              </div>
              <h2 className="fw-bolder fw-boldie text-center px-md-4 fs-3 ">
                Looking to buy a villa / appartment ?
              </h2>

              <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <BottomContactForm
                    proj_name="All"
                    city="Home Page"
                  ></BottomContactForm>
                  <div className="d-flex">
                    <p className="small-text2 mb-3 text-center">
                      Condomonk.ca serves as an online database for
                      pre-construction homes. Condomonk compiles a list of
                      projects available publicly on the internet and does not
                      engage in real estate transactions. Please note that the
                      information provided on this page may be outdated or
                      inaccurate. By submitting the above form, you consent to
                      being contacted by real estate agents advertising on this
                      page. Your information may be shared with our partners or
                      advertisers to assist with your inquiries. You can
                      unsubscribe at any time by emailing us.
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
