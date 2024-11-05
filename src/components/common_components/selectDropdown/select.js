import React, { useState } from "react";
import "../selectDropdown/select.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = ({ data, placeholder }) => {
  const [isCategorySelect, setisCategorySelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedCategoryItem, setselectedCategoryItem] = useState(placeholder);
  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const categorySelect = () => {
    setisCategorySelect(!isCategorySelect);
  };

  const closeCategorySelect = (index, name) => {
    setselectedCategoryItem(name);
    setselectedIndex(index);
    setisCategorySelect(false);
  };

  // SEARCHING IMPLEMENT
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    const list2 = list.filter((item, index) => list.indexOf(item) === index);
    setListData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setisCategorySelect(false)}>
      <div className="selectDrop cursor position-relative">
        <span className="openSelect" onClick={categorySelect}>
          {selectedCategoryItem.length > 16
            ? selectedCategoryItem.substr(0, 14) + "..."
            : selectedCategoryItem}
          {isCategorySelect ? (
            <ExpandMoreIcon className="arrow" />
          ) : (
            <KeyboardArrowUpIcon className="arrow" />
          )}
        </span>
        {isCategorySelect ? (
          <div className="selectDropdown">
            <div className="searchField">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchCategories">
              <li
                key={0}
                onClick={() => closeCategorySelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {listData.map((item, index) => (
                <li
                  key={index + 1}
                  onClick={() => closeCategorySelect(index + 1, item)}
                  className={`${selectedIndex === index + 1 ? "active" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
