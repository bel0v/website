import { Picture } from "./Picture"
import styled from "styled-components"
import { transparentize } from "polished"
import { Box } from "./grid"
import Link from "next/link"

const Preview = styled(Box)`
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.color.main};
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  h2,
  h3 {
    margin: 0;
    line-height: normal;
  }
  picture {
    display: flex;
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    height: auto;
    width: 100%;
    transition: transform 0.3s;
    transform-origin: 50% 10%;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`

const Text = styled("div")`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
`

const Title = styled("div")`
  border-top-right-radius: 4px;
  background: ${({ theme }) => `${transparentize(0.5, theme.color.light)}`};
  display: inline-block;
  padding: 0.5rem 0.75rem;
  padding-bottom: 0;
`

const Subtitle = styled(Title)`
  font-weight: 300;
  padding-bottom: 0.5rem;
`

export const PostPreview = ({ title, subtitle, previewImage, slug, _id }) => {
  return (
    <Box width={{ desktop: "50%" }} pd="0.5rem">
      <Link as={`/blog/p/${slug}`} href={`/blog/post?slug=${slug}`}>
        <Preview height="300px" radius="4px">
          <Text>
            <div>
              <Title>
                <h2>{title}</h2>
              </Title>
            </div>
            <Subtitle>{subtitle}</Subtitle>
          </Text>
          <Picture cdnLink={previewImage} />
        </Preview>
      </Link>
    </Box>
  )
}
