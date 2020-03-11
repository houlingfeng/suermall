import { network } from './NetWork'
export function home () {
  return network({
    url: '/home/multidata'
  })
}

export function getHomeGoodsData (type, page) {
  return network({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}