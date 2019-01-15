//inpired by https://github.com/raphamorim/native-css

import cssParser from "css";

var formatPropertyName = name =>
  name.replace(/(-.)/g, match => match[1].toUpperCase());

//needs to refact
export const transform = css => {
  if (!css) {
    throw new Error("Missing the Css Text");
  }

  //it's necessary for cssParser to work correctly
  css = `.root { ${css} }`;

  var cssParsed = cssParser.parse(css);
  var result = {};

  cssParsed.stylesheet.rules.forEach(rule => {
    if (rule.type !== "rule") {
      throw new Error("Only type of Rule is supported");
    }

    rule.declarations.forEach(declaration => {
      const propName = formatPropertyName(declaration.property);
      result[propName] = declaration.value;
    });
  });

  return result;
};
