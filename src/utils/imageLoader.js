// src/utils/imageLoader.js
// const importAll = (requireContext) => {
//   let images = {};
//   requireContext.keys().forEach((item) => {
//     images[item.replace("./", "")] = requireContext(item);
//   });
//   return images;
// };


// imageUtils.js
const requireContext = require.context('../assets/images', true, /\.(png|jpe?g|svg)$/);

export function getImage(imagePath) {
  try {
    return requireContext(`./${imagePath}`).default;
  } catch (e) {
    console.error(`Image not found: ${imagePath}`);
    return null;
  }
}
