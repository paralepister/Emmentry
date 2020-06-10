html {
  display: flex;
  justify-content: center;
}

body {
  font-family: 'Gilroy', sans-serif;
}

.header {
  z-index: 19;
  display: flex;
  position: fixed;
  background-color: #FFF;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  padding-top: 17px;
  padding-left: 120px;
  padding-right: 130px;
}

@media screen and (max-width: 1024px) {
  .header {
    padding-left: 150px;
    padding-right: 135px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    display: none;
  }
}

.wrap {
  width: 100%;
  max-width: 1176;
  padding-top: 24px;
}

.nav {
  margin: 0;
  padding-bottom: 20px !important;
  padding-top: 2px !important;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav>li {
  margin-left: 15px;
  margin-right: 100px;
}

@media screen and (max-width: 1024px) {
  .nav>li {
    margin-left: 110px;
    margin-right: -8px;
  }
}

.nav>li>a {
  text-decoration: none;
  color: #000;
}

@media screen and (max-width: 1024px) {
  .nav>li>a {
    margin-right: -10px;
  }
}

.nav_button {
  background-color: #000;
  color: #fff !important;
  border-radius: 8px;
  border: none;
  padding: 6px 26px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 15px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo_img {
  display: block;
  width: 70px;
  height: 30px;
  margin-left: 7px;
  margin-right: 90px;
  background-image: url("../img/logo_1.svg");
}

@media screen and (max-width: 1024px) {
  .logo_img {
    margin-left: 137px;
    margin-right: 1px;
  }
}

.a_link:hover {
  color: #089216 !important;
}

.nav_button:hover {
  background-color: #089216;
}

.wrap_button {
  background-color: #000;
  color: #fff !important;
  border-radius: 8px;
  border: none;
  padding: 18px 83px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 22px;
  text-decoration: none;
}

.wrap_button:hover {
  background-color: #089216;
}

.page {
  padding-top: 185px;
  padding-bottom: 102px;
  margin-left: 78px;
}

h1 {
  font-size: 48px;
  line-height: 45px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 46px;
    line-height: 47px;
    padding-left: 150px;
    margin-top: -47px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 72px;
    line-height: 74px;
    padding-left: 335px;
    margin-top: -47px;
  }
}

@media screen and (max-width: 425px) {
  h1 {
    padding-left: 478px;
  }
}

@media screen and (max-width: 320px) {
  h1 {
    padding-left: 488px;
  }
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin-left: 576px;
  margin-top: -39px;
  z-index: 8;
  position: absolute;
}

@media screen and (max-width: 1024px) {
  h2 {
    margin-left: 670px;
    margin-top: -39px;
  }
}

@media screen and (max-width: 768px) {
  h2 {
    margin-left: 738px;
    margin-top: -40px;
  }
}

@media screen and (max-width: 425px) {
  h2 {
    margin-left: 819px;
    margin-top: -71px;
    font-size: 28px;
  }
}

@media screen and (max-width: 375px) {
  h2 {
    margin-left: 824px;
    margin-top: -73px;
    font-size: 30px;
  }
}

@media screen and (max-width: 320px) {
  h2 {
    margin-left: 819px;
    margin-top: -139px;
    font-size: 30px;
  }
}

h3 {
  font-size: 35px;
  line-height: 37px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  h3 {
    font-size: 31px;
    line-height: 37px;
  }
}

@media screen and (max-width: 768px) {
  h3 {
    font-size: 45px;
  }
}

h4 {
  font-size: 35px;
  line-height: 34px;
  font-weight: bold;
  color: #fff;
  margin-left: -25px;
  margin-top: 100px;
  position: absolute;
  z-index: 8;
}

@media screen and (max-width: 1024px) {
  h4 {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  h4 {
    margin-left: 352px;
    margin-top: 84px;
  }
}

@media screen and (max-width: 425px) {
  h4 {
display: none;
  }
}

h5 {
  font-size: 20px;
  font-weight: 500;
  margin-left: 574px;
  margin-top: -14px;
  z-index: 8;
  position: absolute;
}

@media screen and (max-width: 1024px) {
  h5 {
    margin-left: 670px;
  }
}

@media screen and (max-width: 768px) {
  h5 {
    margin-left: 733px;
    margin-top: -44px;
  }
}

@media screen and (max-width: 425px) {
  h5 {
    margin-left: 815px;
    margin-top: -49px;
    font-size: 28px;
  }
}

@media screen and (max-width: 375px) {
  88px {
    margin-left: 824px;
    margin-top: -73px;
    font-size: 30px;
  }
}

@media screen and (max-width: 320px) {
  h5 {
    margin-left: 813px;
    margin-top: -116px;
    font-size: 30px;
  }
}

h6 {
  font-size: 36.5px;
  font-weight: bold;
  margin-left: 53px;
  margin-top: 150px;
}

@media screen and (max-width: 1024px) {
  h6 {
    margin-left: 153px;
  }
}

@media screen and (max-width: 768px) {
  h6 {
    margin-left: 352px;
    font-size: 45px;
    margin-top: 95px;
  }
}

@media screen and (max-width: 425px) {
  h6 {
margin-left: 482px;
    margin-top: 57px;
    font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  h6 {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 58px;
  }
}

@media screen and (max-width: 320px) {
h6 {
margin-top: 144px;
font-size: 60px;
margin-left: 484px;
}
}

.description_fourth_h4_second {
  position: absolute;
  z-index: 9;
  color: #fff;
  margin-left: -25px;
  margin-top: 156px;
  font-size: 20px;
  line-height: 22px;
  font-style: italic;
}

@media screen and (max-width: 1024px) {
  .description_fourth_h4_second {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .description_fourth_h4_second {
    margin-left: 351px;
    margin-top: 147px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_fourth_h4_second {
display: none;
  }
}

.h3_first {
  margin-left: 660px;
  margin-top: 32px;
}

@media screen and (max-width: 1024px) {
  .h3_first {
    margin-left: 720px;
    margin-top: 32px;
  }
}

@media screen and (max-width: 768px) {
  .h3_first {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_first {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_first {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 60px;
  }
}

@media screen and (max-width: 320px) {
  .h3_first {
    margin-top: -7px;
    margin-left: 484px;
    font-size: 57px;
  }
}

.h3_second {
  margin-left: -25px;
  margin-top: 37px;
}

@media screen and (max-width: 1024px) {
  .h3_second {
    margin-left: 151px;
    margin-top: 37px;
  }
}

@media screen and (max-width: 768px) {
  .h3_second {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_second {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_second {
margin-left: 480px;
  }
}

@media screen and (max-width: 320px) {
  .h3_second {
    margin-left: 484px;
    margin-top: -13px;
    font-size: 57px;
  }
}

.h3_fifth {
  margin-left: -69px;
  margin-top: 37px;
}

@media screen and (max-width: 1024px) {
  .h3_fifth {
    margin-left: 118px;
  }
}

@media screen and (max-width: 768px) {
  .h3_fifth {
    margin-left: 522px;
    margin-top: 57px;
    line-height: 52px;
  }
}

@media screen and (max-width: 425px) {
  .h3_fifth {
    margin-left: 482px;
        line-height: 64px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_fifth {
margin-left: 480px;
line-height: 64px;
  }
}

@media screen and (max-width: 320px) {
  .h3_fifth {
    line-height: 63px;
    margin-left: 484px;
    margin-top: -13px;
    font-size: 57px;
  }
}

.h3_sixth {
  margin-left: 405px;
  margin-top: -169px;
}

@media screen and (max-width: 1024px) {
  .h3_sixth {
    margin-left: 519px;
  }
}

@media screen and (max-width: 768px) {
  .h3_sixth {
    margin-left: 522px;
    margin-top: 517px;
    line-height: 52px;
  }
}

@media screen and (max-width: 425px) {
  .h3_sixth {
    margin-left: 482px;
        line-height: 64px;
        margin-top: 534px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_sixth {
margin-left: 480px;
line-height: 64px;
  }
}

@media screen and (max-width: 320px) {
  .h3_sixth {
    line-height: 63px;
    margin-left: 484px;
    margin-top: 557px;
    font-size: 57px;
  }
}

.h3_seventh {
  margin-left: 881px;
  margin-top: -168px;
}

@media screen and (max-width: 1024px) {
  .h3_seventh {
    margin-left: 917px;
    margin-top: -169px;
  }
}

@media screen and (max-width: 768px) {
  .h3_seventh {
    margin-left: 525px;
    margin-top: 57px;
    line-height: 52px;
  }
}

@media screen and (max-width: 425px) {
  .h3_seventh {
    margin-left: 482px;
        line-height: 64px;
        margin-top: 534px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_seventh {
margin-left: 480px;
line-height: 64px;
  }
}

@media screen and (max-width: 320px) {
  .h3_seventh {
    line-height: 63px;
    margin-left: 484px;
    margin-top: 557px;
    font-size: 57px;
  }
}

.h3_eighth {
  margin-left: 656px;
  margin-top: 56px;
}

@media screen and (max-width: 1024px) {
  .h3_eighth {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .h3_eighth {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_eighth {
    margin-left: 482px;
        margin-right: 337px;
        line-height: 64px;
        margin-top: 90px;
        font-size: 56px;
    }
}


@media screen and (max-width: 375px) {
  .h3_eighth {
    margin-left: 480px;
    margin-top: 88px;
    font-size: 58px;
    margin-right: 317px;
    line-height: 64px;
  }
}

@media screen and (max-width: 320px) {
  .h3_eighth {
    margin-left: 484px;
    margin-right: 295px;
    line-height: 63px;
  }
}

.h3_ninth {
  margin-left: -25px;
  margin-top: 56px;
}

@media screen and (max-width: 1024px) {
  .h3_ninth {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .h3_ninth {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_ninth {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_ninth {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 58px;
  }
}

@media screen and (max-width: 320px) {
  .h3_ninth {
    margin-left: 484px;
    margin-right: 88px;
    line-height: 63px;
  }
}

.h3_tenth {
  margin-left: 655px;
  margin-top: 57px;
}

@media screen and (max-width: 1024px) {
  .h3_tenth {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .h3_tenth {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_tenth {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_tenth {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 58px;
  }
}

@media screen and (max-width: 320px) {
  .h3_tenth {
    margin-left: 484px;
  }
}

.h3_eleventh {
  margin-left: -25px;
  margin-top: 53px;
}

@media screen and (max-width: 1024px) {
  .h3_eleventh {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .h3_eleventh {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_eleventh {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_eleventh {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 58px;
  }
}

@media screen and (max-width: 320px) {
  .h3_eleventh {
    margin-left: 484px;
  }
}

.h3_twelfth {
  margin-left: 655px;
  margin-top: 60px;
}

@media screen and (max-width: 1024px) {
  .h3_twelfth {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .h3_twelfth {
    margin-left: 352px;
    margin-top: 57px;
  }
}

@media screen and (max-width: 425px) {
  .h3_twelfth {
    margin-left: 482px;
        margin-top: 57px;
        font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .h3_twelfth {
    margin-left: 480px;
    margin-top: 57px;
    font-size: 58px;
  }
}

@media screen and (max-width: 320px) {
  .h3_twelfth {
    margin-left: 484px;
  }
}

.description_first_h3_first {
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-style: italic;
  margin-left: 660px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_first_h3_first {
    margin-left: 720px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .description_first_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_first_h3_first {
    margin-left: 479px;
    margin-top: 59px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_first_h3_first {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_first_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_first_h3_second {
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-style: italic;
  margin-left: -24px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_first_h3_second {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .description_first_h3_second {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_first_h3_second {
    margin-left: 479px;
    margin-top: 59px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_first_h3_second {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_first_h3_second {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_fifth_h3_second {
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  margin-left: -69px;
  margin-top: 19px;
}

@media screen and (max-width: 1024px) {
  .description_fifth_h3_second {
    font-size: 16px;
    line-height: 21px;
    margin-left: 120px;
  }
}

@media screen and (max-width: 768px) {
  .description_fifth_h3_second {
    margin-left: 520px;
    margin-top: 21px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_fifth_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_fifth_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_sixth_h3_second {
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  margin-left: 405px;
  margin-top: 19px;
}

@media screen and (max-width: 1024px) {
  .description_sixth_h3_second {
    font-size: 16px;
    line-height: 20px;
    margin-left: 519px;
    margin-top: 19px;
  }
}

@media screen and (max-width: 768px) {
  .description_sixth_h3_second {
    margin-left: 523px;
    margin-top: 21px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_sixth_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_sixth_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_seventh_h3_second {
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  margin-left: 879px;
  margin-top: 19px;
}

@media screen and (max-width: 1024px) {
  .description_seventh_h3_second {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin-left: 917px;
    margin-top: 18px;
  }
}

@media screen and (max-width: 768px) {
  .description_seventh_h3_second {
    margin-left: 526px;
    margin-top: 24px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_seventh_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_seventh_h3_second {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_first_h3_first_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: 660px;
  margin-top: 299px;
}

@media screen and (max-width: 1024px) {
  .description_first_h3_first_2 {
    margin-left: 722px;
    margin-top: 209px;
  }
}

@media screen and (max-width: 768px) {
  .description_first_h3_first_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_first_h3_first_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_first_h3_first_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_first_h3_second_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: -22px;
  margin-top: 296px;
}

@media screen and (max-width: 1024px) {
  .description_first_h3_second_2 {
    margin-left: 151px;
    margin-top: 209px;
  }
}

@media screen and (max-width: 768px) {
  .description_first_h3_second_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_first_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_first_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_eighth_h3_first {
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-style: italic;
  margin-left: 660px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_eighth_h3_first {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .description_eighth_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_eighth_h3_first {
    margin-left: 479px;
    margin-top: 59px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_eighth_h3_first {
    margin-left: 480px;
        margin-top: 49px;
        font-size: 35px;
        line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_eighth_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_eighth_h3_first_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: 658px;
  margin-top: 259px;
}

@media screen and (max-width: 1024px) {
  .description_eighth_h3_first_2 {
    margin-left: 720px;
    margin-top: 171px;
  }
}

@media screen and (max-width: 768px) {
  .description_eighth_h3_first_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_eighth_h3_first_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_eighth_h3_first_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_ninth_h3_first {
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-style: italic;
  margin-left: -24px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_ninth_h3_first {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .description_ninth_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_ninth_h3_first {
    margin-left: 479px;
    margin-top: 59px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_ninth_h3_first {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_ninth_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_tenth_h3_first {
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  font-style: italic;
  margin-left: 654px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_tenth_h3_first {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .description_tenth_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_tenth_h3_first {
    margin-left: 479px;
        margin-top: 59px;
        font-size: 35px;
        line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_tenth_h3_first {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_tenth_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_eleventh_h3_first {
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  font-style: italic;
  margin-left: -26px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_eleventh_h3_first {
    margin-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .description_eleventh_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_eleventh_h3_first {
    margin-left: 479px;
        margin-top: 59px;
        font-size: 35px;
        line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_eleventh_h3_first {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_eleventh_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_twelfth_h3_first {
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  font-style: italic;
  margin-left: 654px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .description_twelfth_h3_first {
    margin-left: 720px;
  }
}

@media screen and (max-width: 768px) {
  .description_twelfth_h3_first {
    margin-left: 351px;
    margin-top: 37px;
    font-size: 24px;
    line-height: 29px;
  }
}

@media screen and (max-width: 425px) {
  .description_twelfth_h3_first {
    margin-left: 479px;
        margin-top: 59px;
        font-size: 35px;
        line-height: 47px;
  }
}

@media screen and (max-width: 375px) {
  .description_twelfth_h3_first {
    margin-left: 480px;
    margin-top: 49px;
    font-size: 35px;
    line-height: 47px;
  }
}

@media screen and (max-width: 320px) {
  .description_twelfth_h3_first {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 35px;
    line-height: 47px;
  }
}

.description_ninth_h3_second_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: -22px;
  margin-top: 326px;
}

.description_tenth_h3_second_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: 658px;
  margin-top: 284px;
}

@media screen and (max-width: 1024px) {
  .description_tenth_h3_second_2 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    margin-left: 724px;
    margin-top: 192px;
  }
}

@media screen and (max-width: 768px) {
  .description_tenth_h3_second_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_tenth_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_tenth_h3_second_2 {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_eleventh_h3_second_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: -22px;
  margin-top: 303px;
}

@media screen and (max-width: 1024px) {
  .description_eleventh_h3_second_2 {
    margin-left: 152px;
    margin-top: 203px;
  }
}

@media screen and (max-width: 768px) {
  .description_eleventh_h3_second_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_eleventh_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_eleventh_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_twelfth_h3_second_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: 658px;
  margin-top: 309px;
}

@media screen and (max-width: 1024px) {
  .description_twelfth_h3_second_2 {
    margin-left: 722px;
    margin-top: 217px;
  }
}

@media screen and (max-width: 768px) {
  .description_twelfth_h3_second_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_twelfth_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_twelfth_h3_second_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 31px;
    line-height: 41px;
  }
}

.description_ninth_h3_first_2 {
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin-left: -22px;
  margin-top: 298px;
}

@media screen and (max-width: 1024px) {
  .description_ninth_h3_first_2 {
    margin-left: 151px;
    margin-top: 209px;
  }
}

@media screen and (max-width: 768px) {
  .description_ninth_h3_first_2 {
    margin-left: 350px;
    margin-top: 31px;
    font-size: 21px;
    line-height: 25px;
  }
}

@media screen and (max-width: 425px) {
  .description_ninth_h3_first_2 {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .description_ninth_h3_first_2 {
    margin-left: 484px;
    margin-top: 61px;
    font-size: 31px;
    line-height: 41px;
  }
}

.h1_description {
  margin-top: 30px;
  line-height: 32px;
  font-size: 25px;
  margin-bottom: 80px;
}

@media screen and (max-width: 1024px) {
  .h1_description {
    margin-top: 30px;
    line-height: 30px;
    font-size: 24px;
    margin-bottom: 80px;
    padding-left: 151px;
  }
}

@media screen and (max-width: 768px) {
  .h1_description {
    margin-top: 40px;
    line-height: 38px;
    font-size: 31px;
    margin-bottom: 89px;
    padding-left: 338px;
  }
}

@media screen and (max-width: 425px) {
  .h1_description {
    padding-left: 419px;
  }
}

@media screen and (max-width: 425px) {
  .h1_description {
    padding-left: 478px;
  }
}

@media screen and (max-width: 375px) {
  .h1_description {
    padding-left: 478px;
    font-size: 40px;
    line-height: 54px;
  }
}

@media screen and (max-width: 320px) {
  .h1_description {
    padding-left: 488px;
    font-size: 39px;
    line-height: 52px;
  }
}

#line_1 {
  border-top: 1px solid #000;
  margin-top: 22px;
  position: fixed;
  margin-left: -115px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_1 {
    margin-left: 48px;
    margin-right: -173px;
    width: 1170px;
  }
}

#line_2 {
  border-top: 1px solid #000;
  margin-top: 25px;
  position: fixed;
  margin-left: -115px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_2 {
    margin-left: 48px;
    margin-right: -173px;
    width: 1170px;
  }
}

#line_3 {
  border-top: 1px solid #000;
  margin-top: 89px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_3 {
    margin-top: 89px;
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_3 {
    margin-top: 57px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_3 {
    margin-top: 97px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_3 {
    margin-top: 72px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_3 {
    margin-top: 97px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_4 {
  border-top: 1px solid #000;
  margin-top: 3px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_4 {
    margin-top: 3px;
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_4 {
    margin-top: -23px;
    margin-top: -23px;
    margin-left: 253px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_4 {
    margin-top: -20px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_4 {
    margin-top: -18px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_4 {
    margin-top: -82px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_5 {
  border-top: 1px solid #000;
  margin-top: 39px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_5 {
    margin-left: 120px;
    width: 1168px;
  }
}

@media screen and (max-width: 768px) {
  #line_5 {
    margin-top: 49px;
    margin-left: 253px;
    margin-bottom: -16px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_5 {
    margin-top: 81px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_5 {
    margin-top: 106px;
        margin-left: 463px;
        margin-bottom: 35px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_5 {
    margin-top: 97px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_6 {
  border-top: 1px solid #000;
  margin-top: 40px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_6 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_6 {
    margin-top: 49px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_6 {
    margin-top: 87px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_6 {
    margin-top: 57px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_6 {
    margin-top: 97px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_7 {
  border-top: 1px solid #000;
  margin-top: 3px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_7 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_7 {
    margin-top: -23px;
    margin-left: 253px;
    margin-bottom: -7px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_7 {
    margin-top: -20px;
    margin-left: 443px;
    margin-bottom: -15px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_7 {
    margin-top: -18px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_7 {
    margin-top: -82px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_8 {
  border-top: 1px solid #000;
  margin-top: 296px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_8 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_8 {
    margin-top: 273px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_8 {
display: none;
  }
}

/* @media screen and (max-width: 425px) {
  #line_8 {
    margin-top: 57px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_8 {
    margin-top: 57px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_8 {
    margin-top: 57px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
} */

#line_9 {
  border-top: 1px solid #000;
  margin-top: 3px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_9 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_9 {
    margin-top: -23px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_9 {
display: none;
}
}

/* @media screen and (max-width: 425px) {
  #line_9 {
    margin-top: -20px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_9 {
    margin-top: -18px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_9 {
    margin-top: -82px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
} */

#line_10 {
  border-top: 1px solid #000;
  margin-top: 570px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_10 {
    margin-top: 513px;
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_10 {
    margin-top: 502px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_10 {
    margin-top: 554px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_10 {
    margin-top: 557px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_10 {
    margin-top: 567px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_11 {
  border-top: 1px solid #000;
  margin-top: 3px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_11 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_11 {
    margin-top: -23px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_11 {
    margin-top: -20px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_11 {
    margin-top: -18px;
    margin-left: 463px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_11 {
    margin-top: -82px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_12 {
  border-top: 1px solid #000;
  margin-top: 47px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_12 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_12 {
    margin-top: 51px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_12 {
    margin-top: 97px;
        margin-left: 443px;
        margin-bottom: 98px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_12 {
    margin-top: 103px;
        margin-left: 463px;
        margin-bottom: 108px;
        margin-right: 21px;
        width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_12 {
    margin-top: 97px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_13 {
  border-top: 1px solid #000;
  margin-top: 43px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_13 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_13 {
    margin-top: 45px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_13 {
    margin-top: 87px;
    margin-left: 443px;
    margin-bottom: 98px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_13 {
    margin-top: 90px;
    margin-left: 463px;
    margin-bottom: 95px;
        margin-right: 21px;
        width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_13 {
    margin-top: 78px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_14 {
  border-top: 1px solid #000;
  margin-top: 8px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_14 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_14 {
    margin-top: 10px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_14 {
    margin-top: 60px;
        margin-left: 442px;
        margin-bottom: 108px;
    margin-right: 21px;
    width: 866px;
  }
}

@media screen and (max-width: 375px) {
  #line_14 {
    margin-top: 59px;
        margin-left: 463px;
        margin-bottom: 98px;
        margin-right: 21px;
        width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_14 {
    margin-top: 57px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_15 {
  border-top: 1px solid #000;
  margin-top: 10px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_15 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_15 {
    margin-top: 6px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_15 {
    margin-top: 61px;
    margin-left: 443px;
    margin-bottom: 109px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_15 {
    margin-top: 57px;
    margin-left: 463px;
    margin-bottom: 96px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_15 {
    margin-top: 57px;
    margin-left: 486px;
    margin-bottom: 93px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_16 {
  border-top: 1px solid #000;
  margin-top: 5px;
  margin-left: -73px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_16 {
    margin-left: 120px;
    width: 1170px;
  }
}

@media screen and (max-width: 768px) {
  #line_16 {
    margin-top: 4px;
    margin-left: 253px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_16 {
    margin-top: 57px;
    margin-left: 443px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 864px;
  }
}

@media screen and (max-width: 375px) {
  #line_16 {
    margin-top: 57px;
    margin-left: 463px;
    margin-bottom: 437px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_16 {
    margin-top: 57px;
    margin-left: 486px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_17 {
  border-top: 1px solid #000;
  margin-top: 168px;
  margin-left: 5px;
  margin-bottom: 28px;
  margin-right: 1px;
  width: 1380px;
}

@media screen and (max-width: 1024px) {
  #line_17 {
    margin-top: 168px;
    margin-left: 198px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1169px;
  }
}

@media screen and (max-width: 768px) {
  #line_17 {
    margin-top: 164px;
    margin-left: 333px;
    margin-bottom: 28px;
    margin-right: 21px;
    width: 1041px;
  }
}

@media screen and (max-width: 425px) {
  #line_17 {
    margin-top: 233px;
    margin-left: 520px;
    margin-bottom: 68px;
    margin-right: 21px;
    width: 866px;
  }
}

@media screen and (max-width: 375px) {
  #line_17 {
    margin-top: 237px;
        margin-left: 542px;
        margin-bottom: 71px;
    margin-right: 21px;
    width: 851px;
  }
}

@media screen and (max-width: 320px) {
  #line_17 {
    margin-top: 237px;
    margin-left: 566px;
    margin-bottom: 58px;
    margin-right: 21px;
    width: 787px;
  }
}

#line_16_1 {
  border-top: 1px solid #000;
  margin-top: 8px;
  margin-left: 938px;
  margin-bottom: 59px;
  margin-right: 1px;
  width: 349px;
}

@media screen and (max-width: 1024px) {
  #line_16_1 {
    width: 392px;
  }
}

@media screen and (max-width: 768px) {
  #line_16_1 {
    width: 485px;
    margin-top: 8px;
    margin-left: 433px;
    margin-bottom: 59px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 425px) {
  #line_16_1 {
    width: 613px;
        margin-top: 18px;
        margin-left: 563px;
        margin-bottom: 59px;
        margin-right: 1px;
  }
}

@media screen and (max-width: 375px) {
  #line_16_1 {
    width: 532px;
    margin-top: 8px;
    margin-left: 564px;
    margin-bottom: 59px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 320px) {
  #line_16_1 {
    width: 775px;
        margin-top: 14px;
        margin-left: 571px;
        margin-bottom: 59px;
        margin-right: 1px;
  }
}

.img_first {
  margin-top: -347px;
  margin-left: 605px;
}

@media screen and (max-width: 1024px) {
  .img_first {
    margin-top: -310px;
    margin-left: 695px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_first {
    margin-top: 130px;
    margin-left: 261px;
    width: 1031px;
  }
}

@media screen and (max-width: 425px) {
  .img_first {
    margin-top: 108px;
    margin-left: 440px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_first {
    margin-top: 126px;
    margin-left: 453px;
    margin-bottom: 40px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_first {
    margin-top: 127px;
    margin-left: 474px;
    width: 789px;
  }
}

.img_second {
  margin-top: -625px;
  margin-bottom: 10px;
  margin-left: -74px;
}

@media screen and (max-width: 1024px) {
  .img_second {
    margin-top: -387px;
    margin-bottom: 10px;
    margin-left: 119px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_second {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_second {
    margin-top: 88px;
    margin-left: 440px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_second {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_second {
    margin-top: 88px;
    margin-left: 476px;
    width: 794px;
  }
}

.img_third {
  margin-top: -481px;
  margin-left: 608px;
  margin-bottom: 6px;
}

@media screen and (max-width: 1024px) {
  .img_third {
    margin-top: -481px;
    margin-left: 727px;
    margin-bottom: 6px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_third {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_third {
    margin-top: 74px;
    margin-left: 441px;
    width: 871px;
  }
}


@media screen and (max-width: 375px) {
  .img_third {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_third {
    margin-top: 88px;
    margin-left: 476px;
    width: 798px;
  }
}

.img_fourth {
  margin-top: -432px;
  margin-left: -72px;
  margin-bottom: -252px;
}

@media screen and (max-width: 425px) {
  .img_fourth {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .img_fourth {
    margin-top: -432px;
    margin-left: 120px;
    margin-bottom: -234px;
    width: 1172px;
  }
}

@media screen and (max-width: 768px) {
  .img_fourth {
    margin-top: 47px;
    height: 188px;
    margin-bottom: -216px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_fourth {
    margin-top: 74px;
    margin-left: 449px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_fourth {
    margin-top: 88px;
    margin-left: 476px;
    width: 808px;
  }
}

.img_fifth {
  margin-left: -72px;
  margin-bottom: -507px;
}

@media screen and (max-width: 1024px) {
  .img_fifth {
    margin-left: 118px;
    margin-bottom: -443px;
    width: 377px;
  }
}

@media screen and (max-width: 768px) {
  .img_fifth {
    margin-right: 97px;
        padding-left: 231px;
        width: 870px;
        padding-top: 60px;
  }
}


@media screen and (max-width: 425px) {
  .img_fifth {
    margin-top: 74px;
        margin-left: 441px;
        width: 877px;
  }
}

@media screen and (max-width: 375px) {
  .img_fifth {
    margin-top: 66px;
        margin-left: 453px;
        width: 878px;
  }
}

@media screen and (max-width: 320px) {
  .img_fifth {
    margin-top: 88px;
        margin-left: 476px;
        width: 805px;
  }
}


.img_sixth {
  margin-left: 403px;
  margin-bottom: -505px;
}

@media screen and (max-width: 1024px) {
  .img_sixth {
    margin-left: 518px;
    margin-bottom: -443px;
    width: 374px;
  }
}

@media screen and (max-width: 768px) {
  .img_sixth {
    margin-right: 67px;
        padding-left: 0px;
        width: 528px;
        padding-top: 40px;
  }
}

@media screen and (max-width: 425px) {
  .img_sixth {
    margin-top: 74px;
        margin-left: 441px;
        width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_sixth {
    margin-top: 66px;
        margin-left: 453px;
        width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_sixth {
    margin-top: 88px;
        margin-left: 476px;
        width: 798px;
  }
}

.img_seventh {
  margin-left: 874px;
  margin-bottom: -505px;
}

@media screen and (max-width: 1024px) {
  .img_seventh {
    margin-left: 913px;
    margin-bottom: -505px;
    /* margin-left: 491px; */
    /* margin-bottom: -505px; */
    margin-bottom: -444px;
    width: 377px;
  }
}

@media screen and (max-width: 768px) {
  .img_seventh {
    margin-right: -363px;
        padding-left: 0px;
        width: 528px;
        padding-top: 40px;
  }
}

@media screen and (max-width: 425px) {
  .img_seventh {
    margin-top: 74px;
        margin-left: 441px;
        width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_seventh {
    margin-top: 66px;
        margin-left: 453px;
        width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_seventh {
    margin-top: 88px;
        margin-left: 476px;
        width: 798px;
  }
}

.img_eighth {
  margin-top: -476px;
  margin-bottom: 9px;
  margin-left: -71px;
}

@media screen and (max-width: 1024px) {
  .img_eighth {
    margin-top: -387px;
    margin-bottom: 10px;
    margin-left: 119px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_eighth {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_eighth {
    margin-top: 74px;
    margin-left: 441px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_eighth {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_eighth {
    margin-top: 82px;
    margin-left: 476px;
    width: 799px;
  }
}

.img_ninth {
  margin-top: -476px;
  margin-bottom: 8px;
  margin-left: 606px;
}

@media screen and (max-width: 1024px) {
  .img_ninth {
    margin-top: -371px;
    margin-bottom: 14px;
    margin-left: 727px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_ninth {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_ninth {
    margin-top: 74px;
    margin-left: 442px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_ninth {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_ninth {
    margin-top: 88px;
    margin-left: 476px;
    width: 798px;
  }
}

.img_tenth {
  margin-top: -467px;
  margin-bottom: 38px;
  margin-left: -72px;
}

@media screen and (max-width: 1024px) {
  .img_tenth {
    margin-top: -381px;
    margin-bottom: 48px;
    margin-left: 119px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_tenth {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_tenth {
    margin-top: 74px;
    margin-left: 442px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_tenth {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_tenth {
    margin-top: 81px;
    margin-left: 476px;
    width: 798px;
  }
}

.img_eleventh {
  margin-top: -484px;
  margin-bottom: 36px;
  margin-left: 605px;
}

@media screen and (max-width: 1024px) {
  .img_eleventh {
    margin-top: -370px;
    margin-bottom: 47px;
    margin-left: 727px;
    width: 563px;
  }
}

@media screen and (max-width: 768px) {
  .img_eleventh {
    margin-top: 64px;
    margin-left: 255px;
    width: 1035px;
  }
}

@media screen and (max-width: 425px) {
  .img_eleventh {
    margin-top: 74px;
    margin-left: 442px;
    width: 871px;
  }
}

@media screen and (max-width: 375px) {
  .img_eleventh {
    margin-top: 66px;
    margin-left: 453px;
    width: 871px;
  }
}

@media screen and (max-width: 320px) {
  .img_eleventh {
    margin-top: 80px;
    margin-left: 476px;
    width: 798px;
  }
}

.img_twelfth {
  margin-top: -471px;
  margin-bottom: 26px;
  margin-left: -87px;
}

@media screen and (max-width: 1024px) {
  .img_twelfth {
    margin-top: -388px;
    margin-bottom: 37px;
    margin-left: 108px;
    width: 588px;
  }
}

@media screen and (max-width: 768px) {
  .img_twelfth {
    margin-top: 64px;
    margin-left: 226px;
    width: 1090px;
  }
}

@media screen and (max-width: 425px) {
  .img_twelfth {
    margin-top: 74px;
    margin-left: 423px;
    width: 912px;
  }
}

@media screen and (max-width: 375px) {
  .img_twelfth {
    margin-top: 66px;
    margin-left: 435px;
    width: 902px;
  }
}

@media screen and (max-width: 320px) {
  .img_twelfth {
    margin-top: 77px;
    margin-left: 456px;
    width: 839px;
  }
}

.white_rectangle {
  position: absolute;
  z-index: 1;
  margin-left: 552px;
  margin-top: -52px;
}

@media screen and (max-width: 1024px) {
  .white_rectangle {
    margin-left: 643px;
    margin-top: -52px;
  }
}

@media screen and (max-width: 768px) {
  .white_rectangle {
    margin-left: 699px;
    margin-top: -46px;
    width: 160px;
  }
}

@media screen and (max-width: 425px) {
  .white_rectangle {
    margin-left: 744px;
    margin-top: -104px;
    width: 271px;
  }
}

@media screen and (max-width: 375px) {
  .white_rectangle {
    margin-left: 751px;
    margin-top: -104px;
    width: 271px;
  }
}

@media screen and (max-width: 320px) {
  .white_rectangle {
    margin-left: 747px;
    margin-top: -194px;
    width: 271px;
  }
}

.white_rectangle_2 {
  position: absolute;
  z-index: 1;
  margin-left: 552px;
  margin-top: -33px;
}

@media screen and (max-width: 1024px) {
  .white_rectangle_2 {
    margin-left: 643px;
  }
}

@media screen and (max-width: 768px) {
  .white_rectangle_2 {
    margin-left: 699px;
    margin-top: -46px;
    width: 160px;
  }
}

@media screen and (max-width: 425px) {
  .white_rectangle_2 {
    margin-left: 744px;
    margin-top: -104px;
    width: 271px;
  }
}

@media screen and (max-width: 375px) {
  .white_rectangle_2 {
    margin-left: 751px;
    margin-top: -104px;
    width: 271px;
  }
}

@media screen and (max-width: 320px) {
  .white_rectangle_2 {
    margin-left: 747px;
    margin-top: -134px;
    width: 271px;
  }
}

.social {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1024px) {
  .social {
    padding-left: 183px;
  }
}

@media screen and (max-width: 768px) {
  .social {
    padding-left: 307px;
  }
}

@media screen and (max-width: 425px) {
  .social {
    padding-left: 489px;
  }
}

@media screen and (max-width: 375px) {
  .social {
    padding-left: 502px;
  }
}

@media screen and (max-width: 375px) {
  .social {
    padding-left: 527px;
  }
}

.main_information {
  display: flex;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 34px;
  font-weight: 400;
  font-style: italic;
  font-size: 14.5px;
}

@media screen and (max-width: 1024px) {
  .main_information {
    padding-left: 182px;
  }
}

@media screen and (max-width: 768px) {
  .main_information {
    padding-left: 304px;
    font-size: 20.5px;
  }
}

@media screen and (max-width: 425px) {
  .main_information {
    padding-left: 476px;
    font-size: 24.5px;
  }
}

@media screen and (max-width: 375px) {
  .main_information {
    padding-left: 516px;
    font-size: 32.5px;
    padding-top: 32px;
    padding-bottom: 69px;
  }
}

@media screen and (max-width: 320px) {
  .main_information {
    padding-left: 516px;
    font-size: 32.5px;
    padding-top: 32px;
    padding-bottom: 69px;
  }
}

.instagram {
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .instagram {
    width: 49px;
  }
}

@media screen and (max-width: 425px) {
  .instagram {
    width: 82px;
  }
}

@media screen and (max-width: 375px) {
  .instagram {
    width: 82px;
  }
}

@media screen and (max-width: 320px) {
  .instagram {
    width: 82px;
  }
}

.instagram:hover {
  opacity: 0.8;
}

.vk {
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .vk {
    width: 49px;
  }
}

@media screen and (max-width: 425px) {
  .vk {
    width: 82px;
  }
}

@media screen and (max-width: 375px) {
  .vk {
    width: 82px;
  }
}

@media screen and (max-width: 320px) {
  .vk {
    width: 82px;
  }
}

.vk:hover {
  opacity: 0.8;
}

.facebook {
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .facebook {
    width: 49px;
  }
}

@media screen and (max-width: 425px) {
  .facebook {
    width: 82px;
  }
}

@media screen and (max-width: 375px) {
  .facebook {
    width: 82px;
  }
}

@media screen and (max-width: 320px) {
  .facebook {
    width: 82px;
  }
}

.facebook:hover {
  opacity: 0.8;
}

.telegram {
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .telegram {
    width: 49px;
  }
}

@media screen and (max-width: 425px) {
  .telegram {
    width: 82px;
  }
}

@media screen and (max-width: 375px) {
  .telegram {
    width: 82px;
  }
}

@media screen and (max-width: 320px) {
  .telegram {
    width: 82px;
  }
}

.telegram:hover {
  opacity: 0.8;
}

.youtube {
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .youtube {
    width: 49px;
  }
}

@media screen and (max-width: 425px) {
  .youtube {
    width: 82px;
  }
}

@media screen and (max-width: 375px) {
  .youtube {
    width: 82px;
  }
}

@media screen and (max-width: 320px) {
  .youtube {
    width: 82px;
  }
}

.youtube:hover {
  opacity: 0.8;
}

.dashed {
  margin-top: -470px;
  margin-bottom: -233px;
  margin-left: -70px;
}

@media screen and (max-width: 1024px) {
  .dashed {
    margin-top: -430px;
    margin-bottom: -223px;
    margin-left: 120px;
    width: 1160px;
  }
}

@media screen and (max-width: 900px) {
  .dashed {
    display: none;
  }
}

.e-mail {
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  font-size: 13px;
  margin-left: 936px;
  margin-top: -198px;
}

@media screen and (max-width: 768px) {
  .e-mail {
    font-size: 18px;
    margin-left: 432px;
    margin-top: -36px;
        opacity: 56%;
  }
}

@media screen and (max-width: 425px) {
  .e-mail {
    font-size: 23px;
        margin-left: 557px;
        margin-top: -36px;
        opacity: 56%;
  }
}

@media screen and (max-width: 375px) {
  .e-mail {
    font-size: 20px;
    margin-left: 561px;
    margin-top: -36px;
        opacity: 56%;
  }
}

@media screen and (max-width: 320px) {
  .e-mail {
font-size: 28px;
    margin-left: 578px;
    opacity: 56%;
    margin-top: -36px;
  }
}

.wrap_button_subscribtion {
  background-color: #000;
  color: #fff !important;
  border-radius: 8px;
  border: none;
  padding: 12px 114px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  .wrap_button_subscribtion {
    padding: 12px 137px;
  }
}

@media screen and (max-width: 768px) {
  .wrap_button_subscribtion {
    font-size: 21px;
    padding: 16px 180px;
  }
}

@media screen and (max-width: 425px) {
  .wrap_button_subscribtion {
    font-size: 28px;
        padding: 27px 223px;
  }
}

@media screen and (max-width: 375px) {
  .wrap_button_subscribtion {
    font-size: 28px;
        padding: 27px 183px;
  }
}

@media screen and (max-width: 320px) {
  .wrap_button_subscribtion {
font-size: 31px;
    padding: 26px 295px;
}
}

@media screen and (max-width: 1024px) {
  .wrap_button {
    margin-left: 152px;
  }
}

@media screen and (max-width: 768px) {
  .wrap_button {
    margin-left: 336px;
    font-size: 33px;
  }
}

@media screen and (max-width: 425px) {
  .wrap_button {
    margin-left: 478px;
  }
}

@media screen and (max-width: 375px) {
  .wrap_button {
    font-size: 43px;
  }
}

@media screen and (max-width: 320px) {
  .wrap_button {
    margin-left: 489px;
    font-size: 41px;
  }
}

.button_subscription {
  margin-top: 146px;
  margin-bottom: -203px;
  margin-left: 860px;
}

@media screen and (max-width: 768px) {
  .button_subscription {
    margin-top: 388px;
    margin-bottom: -438px;
    margin-left: 353px;
  }
}

@media screen and (max-width: 425px) {
  .button_subscription {
    margin-top: 528px;
    margin-bottom: -518px;
    margin-left: 483px;
  }
}

@media screen and (max-width: 375px) {
  .button_subscription {
    margin-top: 498px;
    margin-bottom: -508px;
    margin-left: 484px;
  }
}

@media screen and (max-width: 320px) {
.button_subscription {
    margin-top: 530px;
    margin-bottom: -636px;
    margin-left: 489px;
}
  }

.wrap_button_subscribtion:hover {
  background-color: #089216;
}

.subscribe_description {
  font-size: 16px;
  line-height: 24.5px;
  font-weight: 500;
  margin-left: 365px;
  margin-top: -63px;
}

@media screen and (max-width: 1024px) {
  .subscribe_description {
    margin-left: 384px;
  }
}

@media screen and (max-width: 768px) {
  .subscribe_description {
    margin-left: 354px;
    font-size: 21px;
    line-height: 27.5px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 425px) {
  .subscribe_description {
    margin-left: 484px;
    margin-top: 47px;
    font-size: 28px;
    line-height: 38px;
  }
}

@media screen and (max-width: 375px) {
  .subscribe_description {
    margin-left: 484px;
        margin-top: 47px;
        font-size: 28px;
        line-height: 38px;
  }
}

@media screen and (max-width: 320px) {
  .subscribe_description {
margin-left: 484px;
margin-top: 35px;
font-size: 31px;
line-height: 41px;
}
}
