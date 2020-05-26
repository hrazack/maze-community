import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from "apollo-link-http";
import config from './config';

export const createClient = (fetch) => new ApolloClient({
  cache: new InMemoryCache,
  link: createHttpLink({
    fetch,
    useGETForQueries: true,
    uri: config.drupal_base_url + '/graphql',
  }),
});

export const GroupsQuery = gql`
query Groups($limit: Int = 10, $offset: Int = 0) {
  nodeQuery(
    limit: $limit,
    offset: $offset,
    filter: {
      conditions: [
        {field: "status", operator:EQUAL, value:["1"]},
        {field: "type", operator:EQUAL, value:["group"]}
      ]
    },
    sort: [
      {field: "sticky", direction: DESC},
      {field: "changed", direction: DESC}
    ]) {
    count
    entities {
      ... on NodeGroup {
        nid,
        created,
        changed,
        type {
          targetId
        },
        status,
        uid {
          entity {
            ... on User {
              uid,
              name,
              mail,
              fieldImage {
                url
              }
            }
          }
        }
        title,
        fieldSubtitle,
        promote,
        sticky,
        path {
          alias
        }
      }
    }
  }
}
`;

export const NodeByPathQuery = gql`
query GroupNodeByPath($path: String!) {
  route: route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        ... on NodeGroup {
          created
          changed
          status
          title
          type {
            targetId
          }
          path {
            alias
          }
          uid {
            entity {
              ... on User {
                uid
                name
                mail
                created
              }
            }
          }
        }
      }
    }
  }
}`;

export const UsersQuery = gql`
query Users($limit: Int = 10, $offset: Int = 0) {
  userQuery(
    limit: $limit,
    offset: $offset,
  filter: {
      conditions: [
        {field: "uid", operator:NOT_EQUAL, value:["0"]},
        {field: "uid", operator:NOT_EQUAL, value:["1"]}
      ]
    }) {
    count
    entities {
      ... on User {
        uid,
        created,
        changed,
        status,
        fieldFirstName,
        fieldLastName,
        fieldJobTitle,
        fieldImage {
          url
        }
      }
    }
  }
}
`;

export const UserByPathQuery = gql`
query UserGroups($path: String!) {
  route: route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        ... on User {
          created
          changed
          status
          uid
          fieldFirstName,
          fieldLastName,
          fieldJobTitle,
          fieldProfile,
          fieldImage {
            url
          },
          fieldFacebook {
            url {
              path
            }
          },
          fieldTwitter {
            url {
              path
            }
          },
          fieldLinkedin {
            url {
              path
            }
          },
          fieldGroups {
            entity {
              nid
              title
              path {
                alias
              }
            }
          },
          path {
            alias
          }
        }
      }
    }
  }
}`;

export const UserContentQuery = gql`
query UserNodes($uid: String, $limit: Int = 10, $offset: Int = 0) {
  nodeQuery(limit: $limit, offset: $offset, filter: {conditions: [{field: "uid", operator: EQUAL, value: [$uid]}]}) {
    count
    entities {
      entityId
      entityLabel
      entityCreated
      entityUrl {
        path
      }
    }
  }
}
`;
  
export function getUserURL(entity) {
  const path = entity.path && entity.path.alias || `/people/${entity.uid}`
  return path;
}

export function getNodeURL(entity) {
  const path = entity.path && entity.path.alias || `/node/${entity.nid}`
  return path;
}