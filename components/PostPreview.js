import { Picture } from "./Picture"
import styled from "styled-components"
import { transparentize } from "polished"
import { Box } from "./grid"

const Preview = styled(Box)`
  position: relative;
  overflow: hidden;
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
  }
`

const Text = styled("div")`
  position: absolute;
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

export const PostPreview = ({ title, subtitle, previewImage }) => {
  return (
    <Box width={{ desktop: "50%" }} pd="0.5rem">
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
    </Box>
  )
}
