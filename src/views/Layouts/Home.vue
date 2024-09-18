<template>
    <Toast />
    <header>
        <div class="card" style=" background: transparent">
            <Toolbar style="border:0; background: transparent; padding: 1rem 1rem 1rem 1.5rem">
                <template #start>
                    <div class="flex items-center gap-2">
                        <img src="/src/assets/images/logo-muvs.png" class="full-logo"/>
                    </div>
                </template>
                <template #end>
                    <div class="flex items-center gap-2">
                        <div>
                            <router-link to="/contacto"> <Button label="Contacto" text plain /></router-link>
                        </div> 
                        <Button label="Blog" text plain />
                        <div>
                            <router-link to="/registro"> <Button label="Registrarse" text plain /></router-link>
                        </div>                
                        <div>
                            <router-link to="/login"> <Button class="btnlogin green" label="Iniciar Sesión"  size="small" /></router-link>
                        </div>
                    </div>
                </template>
            </Toolbar>
        </div>
    </header>
    <RouterView />
    <footer>
        <div class="footer-sec">
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-menu-upper">
                        <div class="row">
                            <div class="col-md-3 col-sm-12 d-none">

                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="footer-menu-right">


                                    <div class="footer-menu-right-box">
                                        <h3>
                                            <img src="/src/assets/images/logo-muvs.png" class="full-logo"/>
                                        </h3>
                                        <ul class="fotter-list">

                                        </ul>
                                    </div>


                                    <div class="footer-menu-right-box">
                                        <h3>Dirección</h3>
                                        <ul class="fotter-list">
                                            <li><a href="#">6 calle este,</a></li>
                                            <li><a href="#"> 12 avenida, Puerto Cortés</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-menu-right-box">
                                        <h3> </h3>
                                        <div class="social-media-logo">
                                            <a href="https://wa.me/50488960857"><i
                                                    class="fa-brands fa-whatsapp"></i></a>
                                            <a href="https://linkedin.com/company/muvsolutions"><i
                                                    class="fa-brands fa-linkedin"></i></a>
                                            <a href="https://instagram.com/muvssolutions">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Toast from 'primevue/toast';

</script>

<style>

.full-logo {
  max-height: 50px;
  max-width: 100%;
}

header {
    position: absolute;
    z-index: 9999;  
    width: 100%;
}
                        
.green {
    background-color: #43C25F;
}

.txt-green {
    color: #43C25F !important;
}

.btnlogin {
    border: 0;
}

.btn-secondary-header {
    background: transparent !important;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto;
}

header .navbar-brand {
    margin-left: 34px;
}

.hero-banner-wrapper a:hover {
    color: #fff;
}

.footer-menu-right.footer-menu-right {
    justify-content: space-around;
}

.input-field {
    position: relative;
    flex-basis: 450px;
}

.input-field label.error {
    position: absolute;
    color: red;
    font-size: 12px;
    top: calc(100% + 5px);
    line-height: 12px;
    margin: 0;
}

.input-field [name].error {
    border-color: red;
}


@media (min-width: 1600px) {
    .container {
        max-width: 1560px;
    }

    .freight-list-requested ul button {
        padding: 14px 10px;
    }

    .freight-list-requested ul button span {
        font-size: 16px;
    }
}

@media screen and (max-width:1440px) {
    /* img.hero-banner-truck {
        position: absolute;
        bottom: -19px;
        left: -114px;
    } */
}

@media screen and (max-width:1199px) {
    /* img.hero-banner-truck{
        display: none;
    } */

}

@media screen and (max-width:992px) {
    .laptop-img-box {
        width: 100%
    }

    header{
        margin-bottom: 200px;
    }

    .hero-banner-truck {
        left: -20%;
    }

    img.road-img-vector {
        left: -20%
    }

    .managment-platform-section .container:before {
        content: "";
        filter: blur(28px);
    }

    .navbar-menus {
        display: flex;
        /* justify-content: flex-end; */
        width: calc(100% - 20px);
        background-color: #fff;
        position: absolute;
        left: 10px;
        top: 89px;
        border-radius: 20px;
        padding: 20px;
    }

    #navbarNavAltMarkup li.nav-item {
        width: 100%;
        display: flex;
        justify-content: center;
        border-bottom: 1px dashed lightgrey;
    }

    #navbarNavAltMarkup li.nav-item:last-child {
        border-bottom: none
    }

    #navbarNavAltMarkup {
        padding: 0 10px;
        background-color: #eff6fa;
    }

    .navbar-nav .nav-link:last-child {
        margin: 10px 0;
    }

    .navbar-nav {
        margin: 0 auto;
        width: 100%;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        text-align: left;
        margin: 10px 0;
    }

    .navbar-menus a {
        color: #141718;
        margin-right: 0px;
        font-family: var(--font-medium);
    }

    section.login-page-wrapper {
        height: auto;
        overflow: initial;
        min-height: 800px;
    }

    .left-login-page {
        display: none
    }

    .right-login-page {
        min-height: 750px;
        padding: 30px;
        height: 100vh;
    }

    .laptop-img-box img {
        display: block;
    }
}

/* For tablets and mobile */
@media screen and (max-width:767px) {
    .hero-banner-wrapper img {
        margin-top: 0px;
    }

    .hero-banner-truck {
        display: none;
    }

    .hero-section {
        height: 650px
    }

    .laptop-img-box svg {
        display: none;
    }

    .hero-banner-wrapper p {
        padding: 0 17%;
    }

    .sign-up-right {
        margin-top: 45px
    }

    .laptop-img-box{
        margin-top: -86px !important; 
    }
}

@media screen and (max-width:575px) {
    .on-map-wrapper {
        margin-top: -272px;
    }

    .managment-platform-detail-section {
        background-color: #141718;
        padding: 80px 20px 300px 20px;
    }

    .footer-menu-down {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .hero-banner-heading h1 {
        font-size: 30px;
    }

    .move-fridge-left-heading h2 {
        font-size: 28px;
    }

    .managment-platform-inner-right-heading h2 {
        font-size: 28px;
    }

    .connect-companies-wrapper h2 {
        font-size: 28px;
    }

    .managment-platform-detail-right-wrapper h2 {
        font-size: 28px;
    }

    .on-map-wrapper h2 {
        font-size: 28px;
    }

    .move-fridge-right-inner-box p {
        font-size: 14px;
    }

    .managment-platform-inner-right p {
        font-size: 14px;
    }

    .connect-companies-wrapper p {
        font-size: 14px;
    }

    .managment-platform-detail-right-wrapper p {
        font-size: 14px;
    }

    .on-map-wrapper p {
        font-size: 14px;
    }

    .hero-section {
        min-height: 100vh;
    }

    .hero-section>.container {
        height: 100%
    }

    .hero-section .hero-banner-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 6%;
    }

    .radion-label-content p {
        display: none;
    }

    .login-radio-outer label {
        gap: 5px;
        padding: 20px 10px;
    }

    .input-radio {
        width: 20px;
        max-width: 20px;
        height: 20px;
    }

    .radion-label-content h3 {
        font-size: 0.8em
    }

    .sign-up-left {
        justify-content: center;
    }

    .company-signup .sign-up-section {
        padding: 30px;
    }

    .laptop-img-box{
        margin-top: -156px !important; 
    }

}

@media screen and (max-width:480px) {
    .term-condition-list {
        justify-content: center;
    }

    .laptop-img-box{
        margin-top: -156px !important; 
    }
}

/* webfonts */




/* webfonts end */

:root {
    --secondary-color: #141718;
    --primary-color: #43C25F;
    --light-color: #969696;
    --white-text: #fff;
    --text-color: #141718;
    --heading-color: #141718;
    --font: 'inter-Regular';
    --font-light: 'inter-Light';
    --font-medium: 'inter-Medium';
    --font-semibold: 'inter-SemiBold';
    --font-bold: 'inter-Bold';
    --font-bold: 'inter-ExtraBold';
}

html {
    margin: 0;
}

body {

    overflow-x: hidden;
    color: var(--text-color);
    height: 100vh;
    margin: 0 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    white-space: normal;
    word-break: break-word;

    line-height: 1.1;
    color: var(--heading-color);
}

h1 {
    font-size: 65px;
}

h2 {
    font-size: 40px;
}

h3,
.h3 {
    font-size: 30px;
}

h4,
.h4 {
    font-size: 28px;
}

h5 {
    font-size: 22px;
}

h6 {
    font-size: 20px;
}

.btn {
    display: inline-flex;
    border: unset;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 48px;
    border-radius: 6px;
}

.primary-btn {
    background-color: var(--primary-color);
    min-width: 120px;
    color: var(--white-text) !important;
    box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    gap: 24px;
}

.outline-btn {
    border: 1px solid #39393B;
    border-radius: 6px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0px 10px;
}

.navbar-menus {
    display: flex;
    justify-content: flex-end;
}

.navbar-menus a {
    color: #141718;
    margin-right: 70px;
    font-family: var(--font-medium);
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
}

.navbar-menus a:hover,
.navbar-menus a:focus {
    color: #141718;
}

.navbar-nav {
    align-items: center;
}

.navbar-nav .nav-link:last-child {
    margin-right: 34px;
}

.next-btn-box a {
    font-size: 18px;
    margin-right: unset;
}

.navbar {
    padding: 20px 0px;
    position: absolute;
    width: 100%;
    z-index: 3;
}

.hero-section {
    background-color: var(--secondary-color);

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 750px;
    position: relative;
    background-color: #141818;
    overflow: hidden;
}

.hero-section::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #DEECF4;
    position: absolute;
    top: 0;
    z-index: 0;
    clip-path: polygon(0 0, 100% 0, 100% 71%, 0% 100%);
}

.hero-sec-blur-effect {
    border-radius: 318px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    width: 318px;
    height: 317px;
    position: absolute;
    top: -84px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

img.road-img-vector {
    position: absolute;
    z-index: 1;
    bottom: 11%;
    width: 1800px;
}

img.hero-banner-right-effect {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 0;
}

img.hero-banner-left-effect {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
}

.hero-banner-wrapper {
    position: relative;
    z-index: 2;
}

.btn-check:focus+.btn,
.btn:focus {
    outline: 0;
    box-shadow: unset;
}

.hero-banner-heading {
    padding-top: 88px;
}

.hero-banner-heading h1 {
    text-align: center;
    max-width: 841px;
    text-align: center;
    margin: 0 auto;
    letter-spacing: -1.3px;
    font-size: 40px;
}

.hero-banner-wrapper p {
    text-align: center;
    margin: 10px 0;
    font-size: 18px;
    letter-spacing: -0.36px;

}

.dark-btn {
    background-color: #141718;
    color: #fff;
    display: flex;
    gap: 5px;
}

.hero-banner-wrapper a {
    margin: 0 auto;
    width: 153px;
}

.hero-banner-wrapper a:hover {
    color: #fff;
}

.hero-banner-heading h1 span {
    color: var(--primary-color);
}

/* .hero-banner-wrapper img {
    margin: 0 auto;
    display: flex;
    margin-top: -25px;
    max-width: 1005px;
} */
.hero-banner-truck {
    position: absolute;
    bottom: -22px;
    z-index: 2;
}

.move-fridge-section {
    background-color: #141718;
    padding: 80px 20px 157px 20px;
    position: relative;
}

.move-fridge-left-heading h2 {
    color: #fff;
    max-width: 444px;
    font-size: 45px;
}

.move-fridge-left-heading h2 span {
    color: var(--primary-color);
}

.move-fridge-left p {
    color: var(--light-color);
    max-width: 422px;
    line-height: 17px;
    font-size: 14px;
    margin-bottom: 38px;
    letter-spacing: -0.28px;
}

.move-fridge-left {
    max-width: 715px;
    width: 100%;
}

.move-fridge-right {
    max-width: 715px;
    width: 100%;
}


.move-fridge-brand-imges {
    max-width: 400px;
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
    align-items: center;
}

.move-fridge-left-heading {
    margin-bottom: 12px;
}

.move-fridge-right-inner-box img {
    margin-bottom: 33px;
}

.move-fridge-right-inner-box h3 {
    color: #fff;
    font-size: 25px;
    line-height: 27px;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
}

.move-fridge-right-inner-box p {
    color: var(--light-color);
    font-size: 16px;
    max-width: 319px;
    letter-spacing: -0.32px;
}

.managment-platform-section {
    position: relative;
    padding: 150px 20px;
}

.tablet-img {
    width: 100%;
}

.background-design-right {
    width: 286px;
    height: 285px;
    border-radius: 286px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    transform: rotate(-90deg);
    flex-shrink: 0;
    position: absolute;
    right: 0;
    top: 59px;
}

.background-design-left {
    width: 286px;
    height: 285px;
    border-radius: 286px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    position: absolute;
    /* top: 59px; */
    bottom: 0;
}

.managment-platform-section .container:before {
    content: "";
    width: 40%;
    height: 100%;
    background-color: #DEECF4;
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
}

.managment-platform-inner-right-heading h2 {
    line-height: 49px;
    margin-bottom: 23px;
    color: var(--heading-color);
    letter-spacing: -0.8px;
}

.managment-platform-inner-right-heading h2 span {
    color: var(--primary-color);
}

.managment-platform-inner-right-heading p {
    color: #39393B;
    font-size: 18px;

    margin-bottom: 44px;

}

.managment-platform-list li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 26px;
    margin-bottom: 24px;
    color: #39393B;

    letter-spacing: -0.32px;
}

.managment-platform-list {
    padding-left: 0px;
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #B8B8B8;
    opacity: 0.2;
}

.managment-platform-details {
    display: flex;
    gap: 16px;
    align-items: center;
}

.managment-platform-details p {
    max-width: 204px;
    font-size: 14px !important;
    margin-bottom: 0px;
    letter-spacing: -0.28px !important;
}

.managment-platform-inner-right .divider {
    margin-bottom: 28px;
}

.connect-companies-section {
    padding: 80px 20px;
}

.connect-companies-wrapper h2 {
    max-width: 512px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 9px;
    letter-spacing: -0.8px;
}

.connect-companies-wrapper h2 span {
    color: var(--primary-color);
}

.connect-companies-wrapper p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 41px;
    color: #39393B;
    letter-spacing: -0.36px;
}

.connect-companies-video-box {
    background-color: #F5F5F5;
    padding: 21px;
    border-radius: 25px;
    position: relative;
    max-width: 1421px;
    margin: 0 auto;
}

.connect-companies-video-box img {
    width: 100%;
}

.videos-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 75px;
    height: 75px;
    cursor: pointer;
}

.connect-companies-btns {
    margin-top: 32px;
    /* margin: 0 auto; */
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.connect-companies-btns .outline-btn {
    font-size: 18px;
    font-weight: 600;
    color: #39393B;
    padding: 13px 20px;
    height: 48px;
}

.connect-companies-btns .primary-btn {
    padding: 13px 14px;
    font-size: 18px;
    font-weight: 600;
    height: 48px;
}

.managment-platform-detail-section {
    background-color: #141718;
    padding: 80px 20px 500px 20px;
    position: relative;
}

.managment-platform-detail-img-box img {
    width: 100%;
    border-radius: 25px;
}

.managment-platform-detail-img-box {
    padding: 17px 18px;
    background-color: #0B0D0E;
    border-radius: 25px;
}

.managment-platform-detail-right-wrapper h2 {
    max-width: 552px;
    color: #fff;
    letter-spacing: -0.8px;
}

h2 span {
    color: var(--primary-color);
}

.truck-count-box h3 {
    color: #fff;
    font-size: 45px;
    min-width: 60px;
}

.truck-count-box {
    display: flex;
    gap: 14px;
    align-items: center;
    max-width: 385px;
    border-radius: 13px;
    border: 1px solid #2F3334;
    background: #0C0F10;
    padding: 16px 38px;
    margin-bottom: 46px;
}

.truck-count-box img {
    transform: rotateY(180deg);
}

.truck-count-box p {
    color: #CECECE;
    margin-bottom: 0px;
    opacity: 0.8;
    max-width: 176px;
    font-size: 14px;
}

.truck-count-box {
    display: flex;
    gap: 14px;
    align-items: center;
}

.managment-platform-detail-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.managment-platform-detail-list-wrapper ul li {
    color: #fff;
    gap: 9px;
    font-size: 18px;
    letter-spacing: -0.36px;
}

.managment-platform-detail-right-wrapper p {
    font-size: 18px;
    color: #969696;
    margin-top: 11px;
    letter-spacing: -0.36px;
}

.on-map-section {
    background-image: url(../images/map-background.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 20px;
}

.on-map-wrapper h2 {
    color: #fff;
    max-width: 515px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 11px;
    letter-spacing: -0.8px;
}

.on-map-wrapper p {
    font-size: 18px;
    color: #CECECE;
    text-align: center;
    margin-bottom: 51px;
    letter-spacing: -0.36px;
}

.on-map-wrapper {
    margin-top: -465px;
    position: relative;
}

.on-map-wrapper img {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
}

.truck-count-box p {
    font-size: 14px;
    line-height: 17px;
    margin-top: 0px;
    letter-spacing: -0.28px;
}

.footer-sec {
    padding: 20px;
}

.footer-logo img {
    margin-bottom: 28px;
}

.footer-logo p {
    max-width: 211px;
    color: #51585C;
    font-size: 18px;
    letter-spacing: -0.36px;
}

.footer-menu-right.footer-menu-right {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.fotter-list li {
    list-style-type: none;
}

.fotter-list li a {
    color: #51585C;
    text-decoration: none;
    letter-spacing: -0.32px;
}

.fotter-list {
    padding-left: 0px;
    margin: 0;
}

.footer-menu-right-box h3 {
    font-size: 22px;
    color: var(--heading-color);
    margin-bottom: 5px;
    letter-spacing: -0.44px;
}

.term-condition-list {
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0px;
}

.term-condition-list li {
    list-style-type: none;
    padding: 0px 20px;
    border-right: 1px solid #dcdede;
}

.term-condition-list li a {
    color: #51585C;
    text-decoration: none;
    font-size: 14px;
}

.term-condition-list li:last-child {
    border-right: unset;
}

.term-condition-list li:first-child {
    padding-left: 0px;
}

.footer-menu-down {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.social-media-logo {
    display: flex;
    gap: 25px;
    /* align-items: center; */
}

.managment-platform-details h3 {
    width: 100%;
    max-width: 55px;
}

.glow-effect {
    width: 282px;
    height: 282px;
    position: absolute;
    /* background-color: aqua; */
    bottom: 126px;
    left: -108px;
    border-radius: 282px;
    background: #5282C3;
    filter: blur(185.5px);
}

img.ring-effect {
    position: absolute;
    right: 0;
    top: -235px;
}

.managment-platform-inner-right p {
    font-size: 18px;
    letter-spacing: -0.36px;
}

.managment-platform-inner-right {
    padding-left: 50px;
}

.managment-platform-detail-right {
    padding-left: 50px;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: unset;
}


.navbar-toggler span {
    width: 30px;
    height: 3px;
    background-color: #000;
    display: block;
    margin-bottom: 6px;
    transition: all .6s cubic-bezier(0.250, 0.100, 0.250, 1.000);
}

.navbar-toggler[aria-expanded="true"] span:first-of-type {
    transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggler[aria-expanded="true"] span:nth-of-type(2) {
    opacity: 0;
}

.navbar-toggler[aria-expanded="true"] span:last-of-type {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ==============================

    login CSS

===================================*/


.left-login-page {
    background-image: url(../images/login-bg.png);
    height: 100vh;
    background-position: top right;
    background-size: cover;
    background-repeat: no-repeat;
}

.login-form-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 686px;
    /* margin-left: 50px; */
}

.login-heading {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    /* margin-bottom: 90px; */
    padding: 10px 0px 0px 10px;
}

.right-login-page {
    height: 100%;
}

.login-form-box {
    width: 100%;
    max-width: 592px;
}

.login-radio-box {
    max-width: 288px;
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    padding: 27px 20px;
}

.login-radio-wrapper {
    display: flex;
    gap: 16px;
    max-width: 592px;
    margin-bottom: 45px !important;
}

.login-radio-outer {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    max-width: 288px;
    background-color: #fff;
}

.form label {
    cursor: pointer;
}

.input-radio {
    box-shadow: 0px 0px 0px 4px #43C25F;
    font-size: 3em;
    width: 25px;
    max-width: 25px;
    height: 25px;
    margin-right: 7px;

    border: 4px solid #fff;
    background-clip: border-box;
    border-radius: 50%;
    appearance: none;
    transition: background-color 0.3s, box-shadow 0.3s;

}

.login-radio-outer .input-radio {
    flex: 0 0 28px;
}

label {
    display: flex;
    margin: 10px 15px;
}

.input-radio.on:checked {
    box-shadow: 0px 0px 0px 4px #43C25F;
    background-color: #43C25F;
}

.input-radio.on:checked+label {
    background-color: #ff5151;
}

.login-radio-outer label {
    display: flex;
    margin: unset;
    gap: 16px;
    align-items: center;
    cursor: pointer;
    height: 100%;
}

.login-form-box .divider {
    max-width: 592px;
    margin-bottom: 24px;
}

.login-form-box .form-field label {
    font-size: 18px;
    letter-spacing: -0.28px;
    line-height: 48px;

    color: #141718;
    margin: 0px;
}

.login-form-box .form-field input {
    width: 100%;
    max-width: 592px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: #fff;
    padding: 12px 30px 12px 12px;
    color: #51585C;
    font-size: 14px;
    letter-spacing: -0.28px;
    min-height: 48px;
}

.login-form-box .form-field {
    margin-bottom: 24px;
}

.login-form-box .primary-btn {
    width: 100%;
}

.light-btn {
    width: 100%;
    background-color: #dbf1e0;
    color: #39393B;
    font-size: 14px;

    /* box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.13); */

}

.radion-label-content p {
    color: #43c25f;
    margin-top: 0px !important;
    font-size: 14px;

    margin-bottom: 0px;
}

.radion-label-content h3 {
    font-size: 22px;
}

.login-left-heading {
    display: flex;
    align-content: flex-end;
    height: 100%;
    align-items: flex-end;
    /* max-width: 547px; */
    justify-content: flex-end;
    width: 100%;
    /* margin-bottom: 40px; */
}

.login-left-heading h2 {
    max-width: 400px;
    margin-bottom: 20px;
    margin-right: 0px;
    font-size: 28px;
    text-align: center;
}

.login-form-box p {
    margin-bottom: 0px;
    margin-top: 26px;
}

.input-radio.on:checked+label {
    background-color: #aaeda2b8 !important;
}

input#login-check1:checked+.login-radio-box {
    background: chartreuse;
}

.login-radio-outer:has(.input-radio.on:checked) {
    background-image: linear-gradient(90deg, #ecf4f7, #dff0eb);
}

/* ===========================

    Sign up CSS

===============================*/

.sign-up-section {
    background-image: url(../images/Contact-us-bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4vh 0px 5vh;
}

.shipper-contact-us .sign-up-section {
    padding-top: calc(88px + 4vh);
}

.sign-up-list {
    padding-left: 0px;
    position: relative;
    margin-bottom: 0px;
}

.sign-up-list li {
    list-style-type: none;
    display: flex;
    gap: 19px;
    align-items: flex-start;
    padding-bottom: 45px;
    font-size: 18px;

    color: #39393B;
    z-index: 7;
    position: relative;
}

/* .sign-up-left h1{
    margin-bottom: 49px;
    position: relative;
} */
.sign-up-left h1:before {
    content: "";
}

.sign-up-para {
    margin-top: 40px;
    font-size: 18px;

    color: #39393B;
    margin-bottom: 38px;
}

.sign-up-left {
    max-width: 598px;
    margin-left: auto;
}

/* ul.sign-up-list:before {
    content: "";
    height: 98%;
    width: 1px;
    position: absolute;
    border-left: 1px dashed #39393B;
    left: 10px;
    z-index: 0;
    top: 4px;
} */
.sign-up-list li:last-child {
    padding-bottom: 0px;
}

.sign-up-form-box {
    border-radius: 21px;
    background: #FFF;
    box-shadow: 0px 8px 99px 0px rgba(194, 211, 222, 0.71);
    max-width: 703px;
    padding: 40px 47px 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
}

.sign-up-form-box .form-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    width: 100%;
}

.sign-up-form-box .form-field input {
    min-height: 48px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: #FFF;
    max-width: 450px;
    font-size: 14px;

    letter-spacing: -0.28px;
    width: 100%;
    padding: 10px 30px 10px 19px;
    caret-color: red;
}

.sign-up-form-box .form-field label:not(.error) {
    font-size: 16px;

    letter-spacing: -0.32px;
    color: #141718;
    margin: 0px;
    max-width: 137px;
    width: 100%;
}

.sign-up-form {
    width: 100%;
    margin: 0 auto;
}

.sign-up-form-box .primary-btn:last-child {
    margin-bottom: 0px;
}

.sign-up-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* width: 100%; */
}

.sign-up-left h2 {
    margin-bottom: 49px;
    position: relative;
}

.sign-up-left h2:before {
    content: "";
    width: 98px;
    height: 1px;
    background-color: #43c25f;
    position: absolute;
    bottom: -20px;
    border-radius: 90px;
    background-color: #4DB663;
}

.contact-us-wrapper {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 35px;
}

.contact-us-box {
    border-radius: 10px;
    border: 1.3px solid #DBDBDB;
    background: #FFF;
    padding: 26px 23px 22px;
    max-width: 292px;
    width: 100%;
    cursor: pointer;
}

.contact-us-box h4 {
    letter-spacing: -0.36px;
    font-size: 18px;

    color: #141718;
}

.contact-us-box span {
    font-size: 18px;
    color: var(--primary-color);

    letter-spacing: -0.36px;
}

.form-field.form-field-textarea {
    display: flex;
    align-items: flex-start;
}

.form-field.form-field-textarea textarea {
    max-width: 450px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: var(--wh, #FFF);
    padding: 16px 12px;
    width: 100%;
    caret-color: red;
}

.sign-up-heading {
    font-size: 30px;
    font-family: 600;
    color: #141718;
    letter-spacing: -0.6px;
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
}

.sugnup-btn-box {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    justify-content: flex-start;
}

.sugnup-btn-box p {
    margin-bottom: 0px;
}

.sugnup-btn-box .primary-btn {
    max-width: 185px;
    width: 100%;
}

.sugnup-btn-box p {
    font-size: 16px;

}

.sugnup-btn-box span {
    color: var(--primary-color);

}

.sugnup-btn-box p a {
    text-decoration: none;
}

.sugnup-btn-box-inner {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 23px;
    flex-direction: column;
}

.sign-up-left svg {
    margin-bottom: 30px;
    position: relative;
}

.sign-up-logo:before {
    content: "";
    width: 98px;
    height: 1px;
    background-color: #43c25f;
    position: absolute;
    bottom: -20px;
    border-radius: 90px;
    background-color: #4DB663;
}

a.navbar-brand img {
    width: 135px;
}

.sign-up-list li p span {}

.sign-up-list li::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    top: 15px;
    border: 1px solid #39393B;
    border-style: dashed;
    z-index: -1;
    left: 10px;
}

.sign-up-list li:last-child::after {
    display: none;
}

.sign-up-list svg {
    flex: 0 0 23px;
    margin-top: 5px;
}

.social-media-logo a i {
    font-size: 31px;
    color: #000;
}

section.login-page-wrapper {
    height: 100vh;
    overflow: hidden;
}

.laptop-img-box svg,
.laptop-img-box img {
    margin: 0 auto;
    width: 100%;
    display: flex;
    max-height: 451px;
}

.laptop-img-box {
    width: 70%;
    margin: auto;
    margin-top: -16px;
}

.laptop-img-box img {
    display: none;
}

footer {
    background-color: #eff6fa;

}

.sign-up-left.for-logo {
    margin-bottom: 30px;
    display: flex;
}

@media screen and (max-width: 1620px) {
    /* img.road-img-vector {
        position: absolute;
        z-index: 1;
        bottom: 104px;
    } */
    /* .hero-banner-wrapper img {
        margin: 0 auto;
        display: flex;
        margin-top: -10px;
        max-width: 1005px;
    } */
}

@media screen and (max-width: 1199px) {
    .sidebar {
        transition: all.3s ease-in;
        transform: translateX(-1000px);
    }
}

@media screen and (max-width: 992px) {
    .footer-menu-right.footer-menu-right {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        flex-direction: column;
    }

    .p-toolbar-group-start{
        display: none;
    }
}

@media screen and (max-width: 490px) {

    .freights-job-info-form {
        box-sizing: border-box;
        border-radius: 0;
    }

    .form-field.form-field-textarea textarea {
        font-size: 12px;
    }

    .sign-up-form-box .form-field input {
        font-size: 12px;
    }

    .sign-up-form-box {
        padding: 40px 20px 55px;
    }

}

.move-fridge-section,
.managment-platform-section,
.connect-companies-section,
.managment-platform-detail-section,
.on-map-section {
    display: none;
}
</style>
