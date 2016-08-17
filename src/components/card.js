
import yo from 'yo-yo'
import { curry } from 'ramda'
import t from 'tcomb'
import { Card, Lenses } from 'types'
import Action from 'actions'
import drag from '../drag'

export default
curry(( action$, card: Card, path  ) => {
  const elem = yo`
  <img class="card"
    src="/cards/${card.join('_')}.svg"
    onmousedown=${ md => drag({ md, action$ })}
  >`
  elem.path = path
  return elem
})
