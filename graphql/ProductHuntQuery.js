import { gql } from "@apollo/client";

export const GET_TOP_10_UPVOTES_OF_PHONG = gql`
  query phongPHVoted {
    user(username: "isnhp") {
      votedPosts(first: 10) {
        edges {
          node {
            name
            tagline
            thumbnail {
              url
            }
            votesCount
            isVoted
            slug
            commentsCount
            topics(first: 2) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
