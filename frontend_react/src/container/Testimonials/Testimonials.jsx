import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { H1ChevronLeft, HiChevronRigth } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const query = `*[_type == "testimonials"]`;
    const brandQuery = `*[_type == "brands"]`;
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return <div>Testimonials</div>;
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "app__testimonials",
  "app__primarybg"
);
