import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString } from "../../untils/Common/formatVietnameseToString";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

// const nav = [
//   { name: "Trang chủ", path: "home" },
//   { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
//   { name: "Nhà cho thuê", path: "nha-cho-thue" },
//   { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
//   { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang " },
// ];
const notActive =
  "hover:bg-third px-4 h-full flex items-center bg-secondary transition-all ease-linear duration-300";
const active = "hover:bg-third px-4 h-full flex items-center bg-third";
const Navigation = () => {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  // console.log(categories);
  useEffect(() => {
    // const fetchCategories = async () => {
    //   const response = await apiGetCategories();
    //   if (response?.data.err === 0) {
    //     setCategories(response.data.response);
    //   }
    // };
    // fetchCategories();
    dispatch(actions.getCategories());
  }, []);
  return (
    <div className="w-full text-white h-[40px] bg-secondary flex justify-center items-center">
      <div className="w-[75%] flex items-center h-full">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div key={item.code} className="h-full">
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
