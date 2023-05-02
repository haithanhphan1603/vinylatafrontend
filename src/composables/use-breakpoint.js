import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export default function () {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const greaterThanLg = breakpoints.greater("lg");
  const greaterThanSm = breakpoints.greater("sm");
  const greaterThanXl = breakpoints.greater("xl");
  return {
    ...breakpoints,
    greaterThanLg,
    greaterThanSm,
    greaterThanXl,
  };
}
