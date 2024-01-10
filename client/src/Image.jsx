/* eslint-disable react/prop-types */
export default function Image({ src, ...rest }) {
  src =
    src && src.includes("https://")
      ? src
      : "https://us-central1-reservify-f1cff.cloudfunctions.net/api/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}
