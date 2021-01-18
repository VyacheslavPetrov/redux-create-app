import {UPDATE_OLD_ARRAY, moduleName} from '../models/2048.js'
export const savePrevArray = ({dispatch, getState}) => next => ({type, payload}) => {
  if(type.includes('MOVE')){
    const oldMatrix = getState()[moduleName].gameArray
    dispatch({
      type: UPDATE_OLD_ARRAY,
      payload: oldMatrix
    })
  }
  return next ({type, payload})
}