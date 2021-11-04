import React from 'react'
import "../style/Blog-Template.css"
import "../style/Home.css"
import "../style/Post-Template.css"
import "../style/nicepage.css"

function signin() {
    return (
        <div>
            <section class="u-align-center u-clearfix u-grey-10 u-section-1" id="sec-c036">
            <div class="u-clearfix u-sheet u-sheet-1">
                <div class="u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                <div class="u-container-layout u-container-layout-1">
                    <h3 class="u-text u-text-default u-text-1">Sign In</h3>
                    <div class="u-expanded-width u-form u-login-control u-form-1">
                    <form action="#" method="POST" class="u-clearfix u-form-custom-backend u-form-spacing-38 u-form-vertical u-inner-form" source="custom" name="form-2">
                        <div class="u-form-group u-form-name">
                        <label for="username-708d" class="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Username" id="username-708d" name="username" class="u-grey-5 u-input u-input-rectangle" required="" />
                        </div>
                        <div class="u-form-group u-form-password">
                        <label for="password-708d" class="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Password" id="password-708d" name="password" class="u-grey-5 u-input u-input-rectangle" required="" />
                        </div>
                        <div class="u-form-checkbox u-form-group">
                        <input type="checkbox" id="checkbox-708d" name="remember" value="On" />
                        <label for="checkbox-708d" class="u-label">Remember me</label>
                        </div>
                        <div class="u-align-center u-form-group u-form-submit">
                        <a href="#" class="u-active-custom-color-5 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-hover-custom-color-3 u-radius-17 u-btn-1">Sign in</a>
                        <input type="submit" value="submit" class="u-form-control-hidden" />
                        </div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default signin
