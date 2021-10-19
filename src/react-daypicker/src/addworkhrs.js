import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button> Add working hours</button>} position="right center">
    <div id="outer_div">
    <section id="inner_div" class="u-align-center u-clearfix u-grey-10 u-section-3" id="carousel_3b72">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h3 class="u-text u-text-default u-text-1">Add working hours<br/>
            </h3>
            <div class="u-expanded-width u-form u-login-control u-form-1">
              <form action="#" method="POST" id="form_xxx" class="u-clearfix u-form-custom-backend u-form-spacing-38 u-form-vertical u-inner-form" source="custom" name="form-2">
                <div class="u-form-group u-form-name">
                  <label for="username-708d" class="u-form-control-hidden u-label"></label>
                  <input type="number" min="0" max="14" placeholder="worked hours" id="username-708d" name="hours" class="u-grey-5 u-input u-input-rectangle" required=""/>
                </div>
                <div class="u-form-checkbox u-form-group">
                </div>
                <div class="u-align-center u-form-group u-form-submit">
                  <button href="#" id ="add_hrs" class="add_work_hrs u-active-custom-color-5 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-hover-custom-color-3 u-radius-17 u-btn-1" >Submit<br/> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </Popup>
);