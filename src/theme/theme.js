import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/Card";
import { badgeStyles } from "./components/badge";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { linkStyles } from "./components/link";
import { progressStyles } from "./components/progress";
import { switchStyles } from "./components/switch";
import { textareaStyles } from "./components/textarea";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";

export default extendTheme(
    {breakpoints},
    globalStyles,
    buttonStyles,
    textareaStyles,
    inputStyles,
    badgeStyles,
    linkStyles,
    progressStyles,
    switchStyles,
    CardComponent
)