/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import { createUseScreenVariants } from "@plasmicapp/react-web";
import * as React from "react";

export type ScreenValue = "mobileOnly";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
});

export default ScreenContext;
/* prettier-ignore-end */
