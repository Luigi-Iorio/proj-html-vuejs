import { createApp } from "vue";
import "./assets/scss/general.scss";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faSquareMinus,
  faPhoneFlip,
  faIdBadge,
  faCircleRight,
  faChevronUp,
  faHouse,
  faEnvelope,
  faLink,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
