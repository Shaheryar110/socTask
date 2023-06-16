import styling from "./dropdown.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CarCatelogue = () => {
  return (
    <div className={styling.maincontainer}>
      <div className={styling.carcatalog}>
        <h2 className={styling.heading}>Car Catalogue</h2>
        <p className={styling.text}>Explore our cars you might like</p>
      </div>
      <div className={styling.dropdowncontainer}>
        <div className={styling.dropdownbutton}>
          Price
          <KeyboardArrowDownIcon />
          <div className={styling.dropdownmenu}>
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Sedan</label>
            </div>
            <hr style={{ width: "327.64px" }} />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">VOUN</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">MINI</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Support</label>
            </div>
          </div>
        </div>
        <div className={styling.dropdownbutton}>
          Manufacture
          <div className={styling.notify}>
            <p className={styling.notifyNum}>5</p>
          </div>
          <KeyboardArrowDownIcon />
          <div className={styling.dropdownmenu}>
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Sedan</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">VOUN</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">MINI</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Support</label>
            </div>
          </div>
        </div>
        <div className={styling.dropdownbutton}>
          Type
          <div className={styling.notify}>
            <p className={styling.notifyNum}>2</p>
          </div>
          <KeyboardArrowDownIcon />
          <div className={styling.dropdownmenu}>
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Sedan</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">VOUN</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">MINI</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Support</label>
            </div>
          </div>
        </div>
        <div className={styling.dropdownbutton}>
          Rating
          <KeyboardArrowDownIcon />
          <div className={styling.dropdownmenu}>
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Sedan</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">VOUN</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">MINI</label>
            </div>
            <hr />
            <div className={styling.custom}>
              <input type="checkbox" id="price-sedan" />
              <label htmlFor="price-sedan">Support</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCatelogue;
