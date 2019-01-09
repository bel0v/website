import { cdnLink as getLink } from "../helpers"

export const Picture = ({ cdnLink }) => {
  const path = cdnLink.substr(0, cdnLink.lastIndexOf("."))
  return (
    <picture>
      <source srcSet={getLink(`${path}.webp`)} type="image/webp" />
      <img src={getLink(cdnLink)} />
    </picture>
  )
}
