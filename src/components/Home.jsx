import styles from "./home.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import DropDownButton from "./DropDownButton";
import Image from "next/image";
import PropaneIcon from "@mui/icons-material/Propane";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import data from "../../constant/data";
function Home() {
  const Card = ({ carName, price, imageUrl, cylinder, seats, mpg }) => {
    return (
      <div className={styles.card}>
        <h2 className={styles.cardheading}>{carName}</h2>
        <p className={styles.cardprice}>
          <span className={styles.Dollar}>$</span>
          <span className={styles.cardheadings}>{price}</span>
          <span className={styles.days}>/Days</span>
        </p>
        <Image className={styles.cardimage} src={imageUrl} alt={carName} />
        {/* <button className={styles.cardbutton}>Buy Now</button> */}
        <div className={styles.cardBottom}>
          <div className={styles.cardBottomChild}>
            <PropaneIcon />
            <p className={styles.iconTextCard}>{cylinder} Cylinder</p>
          </div>
          <div className={styles.cardBottomChild}>
            <AirlineSeatReclineNormalIcon />
            <p className={styles.iconTextCard}>{seats}Seats</p>
          </div>
          <div className={styles.cardBottomChild}>
            <LocalGasStationIcon />
            <p className={styles.iconTextCard}>{mpg}MPG</p>
          </div>
        </div>
      </div>
    );
  };

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "bb0665451amsh975e1775ed50fe0p16feeajsnb7a25ae97850",
  //         "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // });
  return (
    <>
      <div className={styles.parent}>
        {/* NAV BAR*/}
        <nav className={styles.navbar}>
          <div className={styles.leftsection}>
            <h1 className={styles.title}>CARENT</h1>
          </div>
          <div className={styles.centersection}>
            <a href="#" className={styles.menuitem}>
              Home
            </a>
            <a href="#" className={styles.menuitem}>
              Car Category
            </a>
            <a href="#" className={styles.menuitem}>
              Contact Us
            </a>
            <a href="#" className={styles.menuitem}>
              Help
            </a>
          </div>
          <div className={styles.rightsection}>
            <button className={styles.registerbutton}>Register</button>
            <button className={styles.signinbutton}>Sign In</button>
          </div>
        </nav>
        {/* GROUPS*/}
        <div className={styles.parentContainer}>
          <div
            className={styles.childContainer}
            style={{
              borderTopLeftRadius: "3rem",
              borderBottomLeftRadius: "3rem",
            }}
          >
            <div className={styles.iconcontainer}>
              <LocationOnIcon />
            </div>
            <div className="text-container">New Zealand</div>
          </div>
          <div className={styles.childContainer}>
            <div className={styles.iconcontainer}>
              <CalendarMonthIcon />
            </div>
            <div className="text-container">27/11/2020</div>
          </div>
          <div className={styles.childContainer}>
            <div className={styles.iconcontainer}>
              <CalendarMonthIcon />
            </div>
            <div className="text-container">30/11/2020</div>
          </div>
          <div
            className={styles.childContainer}
            style={{
              borderTopRightRadius: "3rem",
              borderBottomRightRadius: "3rem",
            }}
          >
            <div className={styles.SearchButton}>
              <SearchIcon />
            </div>
          </div>
        </div>
        {/* DROPDOWN*/}
        <DropDownButton />
        {/* CARDS*/}
        <div className={styles.cardcontainer}>
          {data?.map((car, index) => (
            <Card
              key={index}
              carName={car.carName}
              price={car.price}
              imageUrl={car.imgUrl}
              cylinder={car.cylinder}
              seats={car.seats}
              mpg={car.mpg}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
