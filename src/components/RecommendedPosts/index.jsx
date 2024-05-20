import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"


const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor()}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        cover
        direction="right"
        bg={getThemeColor()}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

const RecommendedPostsPropTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }).isRequired,
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }).isRequired,
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

RecommendedPosts.propTypes = RecommendedPostsPropTypes
export default RecommendedPosts
