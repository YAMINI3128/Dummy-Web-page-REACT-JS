import React from "react";

const about2 = {
  textAlign: "justify",
  padding: "2px",
};

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="heading text-center">
          <h2>About us</h2>
        </div>

        <div className="col-md-6 p-4">
          <div className="about1">
            <img src="Assets/img4.jpg" className="card-img-top " alt="img4" />
          </div>
        </div>
        <div className="col-md-6 p-4">
          <div className="about2 " style={about2}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptatibus soluta recusandae ad et sapiente, saepe voluptates
              iure eaque repudiandae ab sed, perspiciatis ipsam totam id ut
              earum quidem ipsa quis repellendus excepturi Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Officia corporis eaque eius
              vel aut magni assumenda voluptatibus neque! Deleniti, error
              doloremque facilis magni quae placeat et necessitatibus, odio ut
              recusandae numquam eos cupiditate dolorum est quasi labore vel
              repellat quas. Sequi officia voluptatum debitis eveniet
              perspiciatis soluta expedita quia sapiente. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Tenetur voluptatibus soluta
              recusandae ad et sapiente, saepe voluptates iure eaque repudiandae
              ab sed, perspiciatis ipsam totam id ut earum quidem ipsa quis
              repellendus excepturi Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Officia corporis eaque eius vel aut magni
              assumenda voluptatibus neque! Deleniti, error doloremque facilis
              magni quae placeat et necessitatibus, odio ut recusandae numquam
              eos cupiditate dolorum est quasi labore vel repellat quas.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion p-4" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Why We
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How We Work
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              When I do
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
