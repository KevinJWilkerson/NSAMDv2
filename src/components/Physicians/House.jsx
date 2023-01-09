import React from "react";
import Headshot from "../../assets/images/headshots/4.jpg";

function House() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Paul A. House, MD</h1>
      </div>
      <div className="physician-page-headshot-container">
        <img src={Headshot} className="physician-headshot" alt=""></img>
      </div>
      <div className="physician-bio">
        <h2>About Dr. House</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore
          eius autem similique, totam itaque perspiciatis quod asperiores
          aliquam recusandae doloribus et natus unde soluta repudiandae vitae
          repellat quasi quaerat.
        </p>
        <h2>Primary Interests</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a
          porro laudantium eius totam impedit illum provident sit, veritatis
          assumenda facilis autem perferendis perspiciatis? Ipsam voluptatibus
          fuga obcaecati nesciunt facere.
        </p>
        <h2>Education</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id et
          voluptatum eligendi quos error neque pariatur nemo. Cumque nostrum
          consequuntur, voluptatum atque, error assumenda debitis veniam impedit
          voluptates vitae deserunt.
        </p>
        <h2>Professional Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque ea
          dicta voluptatum obcaecati totam porro doloremque vitae rem animi.
          Accusamus, obcaecati. Vitae inventore magni accusamus perspiciatis
          laboriosam! Facilis, unde?
        </p>
        <h2>Professional Community Activities</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          inventore error doloribus doloremque rem mollitia cum enim omnis ad
          delectus ipsam, vitae corporis possimus voluptatum repudiandae vel
          libero cupiditate officia?
        </p>
        <h2>Membership in Professional Societies</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam hic
          repellat obcaecati! Rerum animi, ullam, officia perferendis sequi,
          voluptatibus laboriosam quis consectetur et quos hic recusandae
          sapiente. Totam, quia repudiandae!
        </p>
      </div>
    </div>
  );
}

export default House;
