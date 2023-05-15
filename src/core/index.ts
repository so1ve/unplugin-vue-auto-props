import { createUnplugin } from "unplugin";

import type { Options } from "./types";
import { transform } from "./transform";

export default createUnplugin<Options | undefined>((_options) => ({
  name: "unplugin-vue-tsx-auto-props",
  enforce: "pre",
  transform(code) {
    return transform(code);
  },
}));
