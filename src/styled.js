import { transform } from "./cssToObj";

function css(literals, ...substitutions) {
  let result = "";

  // run the loop only for the substitution count
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }

  // add the last literal
  result += literals[literals.length - 1];

  return transform(result);
}

export default css;
