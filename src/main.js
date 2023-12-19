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

/* add icons to the library */
library.add(faSquareMinus, faPhoneFlip, faIdBadge);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
