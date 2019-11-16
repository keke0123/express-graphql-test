import all from "./env/all";
import development from "./env/development";
import production from "./env/production";

function config(mode) {
    return Object.assign(
        {},
        all,
        mode == "development" ? development : production
    );
}

export default config;
