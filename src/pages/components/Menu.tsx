import React, { useState } from "react";
import DropDown from "./Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("");
  const cities = () => {
    return [
      "Real Estate",
      "Vehicles",
      "Short Term Rentals",
      "Long Term Rentals",
      "Clothing",
      "Jewelry",
      "Atv",
    ];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const citySelection = (city: string): void => {
    setSelectCity(city);
  };

  return (
    <div className="w-full">
      <div className=" bg-slate-200 text-violet-500 w-full">
        <div>
          {selectCity
            ? `You selected ${selectCity} for your travel destination`
            : "Select your travel destination"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className=" bg-slate-100 text-violet-500 w-full">
          {selectCity ? "Select: " + selectCity : "Select ..."}{" "}
        </div>
        {showDropDown && (
          <DropDown
            cities={cities()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
    </div>
  );
};

export default Menu;
