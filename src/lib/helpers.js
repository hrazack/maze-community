import config from './config';

export function getUserURL(entity) {
  const path = entity.path && entity.path.alias || `/user/${entity.uid}`
  return config.drupal_base_url + path;
}

export function getNodeURL(entity) {
  const path = entity.path && entity.path.alias || `/node/${entity.nid}`
  return path;
}