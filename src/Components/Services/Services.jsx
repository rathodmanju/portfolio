import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoIosSchool } from "react-icons/io";

function Servises() {
  return (
    <section id="Services">
      <h5>Education</h5>
      <h2>Qualification</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>
              SSLC (10<sup>th</sup>)
            </h3>
          </div>

          <ul className="service-list">
            <li>
              <LiaSchoolSolid className="service-list-icon" />
              <h5>School Name :</h5>
              <p>Govt High School</p>
            </li>
            <li>
              <MdOutlinePlace className="service-list-icon" />
              <h5>Place :</h5>
              <p>Chilakamukhi Koppal Dst/Tlk</p>
            </li>
            <li>
              <IoIosSchool className="service-list-icon" />
              <h5>PassOut :</h5>
              <p>2011</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <h5>Percentage :</h5>
              <p>64.64</p>
            </li>
          </ul>
        </article>
        {/*END OF SSLC*/}
        <article className="service">
          <div className="service-head">
            <h3>
              ITI (Fitter)
            </h3>
          </div>

          <ul className="service-list">
            <li>
              <LiaSchoolSolid className="service-list-icon" />
              <h5>College Name :</h5>
              <p>Govt ITI School</p>
            </li>
            <li>
              <MdOutlinePlace className="service-list-icon" />
              <h5>Place :</h5>
              <p>Koppal Dst/Tlk</p>
            </li>
            <li>
              <IoIosSchool className="service-list-icon" />
              <h5>PassOut :</h5>
              <p>2014</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <h5>Percentage :</h5>
              <p>81.57</p>
            </li>
          </ul>
        </article>
        {/*End Of Web Development */}
        <article className="service">
          <div className="service-head">
            <h3>
              DIPLOMA (ME)
            </h3>
          </div>

          <ul className="service-list">
            <li>
              <LiaSchoolSolid className="service-list-icon" />
              <h5>College Name :</h5>
              <p>Govt Polytechnic</p>
            </li>
            <li>
              <MdOutlinePlace className="service-list-icon" />
              <h5>Place :</h5>
              <p>Karatagi - Koppal Dist - Gangavati Taluk</p>
            </li>
            <li>
              <IoIosSchool className="service-list-icon" />
              <h5>PassOut :</h5>
              <p>2017</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <h5>Percentage :</h5>
              <p>60.06</p>
            </li>
          </ul>
        </article>
        {/*End Of Content Creation */}
        <article className="service">
          <div className="service-head">
            <h3>
              BE (ME)
            </h3>
          </div>

          <ul className="service-list">
            <li>
              <LiaSchoolSolid className="service-list-icon" />
              <h5>College Name :</h5>
              <p>Jain Institute Of Technology</p>
            </li>
            <li>
              <MdOutlinePlace className="service-list-icon" />
              <h5>Place :</h5>
              <p>Davanagere</p>
            </li>
            <li>
              <IoIosSchool className="service-list-icon" />
              <h5>PassOut :</h5>
              <p>2021</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <h5>CGPA :</h5>
              <p>6.56</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Servises;
