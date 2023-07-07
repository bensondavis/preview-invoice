const fromLogo = require("../Assets/logoipsum-286.svg") as string
const companyLogo = require("../Assets/logoipsum-253.svg") as string
import { logos } from "../interfaces/logos";

const Logos:logos = {
  fromCompanyLogo: {
    img: fromLogo,
    link: "https://react.dev/",
  },
  companyLogo: {
    img: companyLogo,
    link: "https://react.dev/",
  },
};

export default Logos;
