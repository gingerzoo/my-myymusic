import { configureStore } from "@reduxjs/toolkit"
/*  */
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual
} from "react-redux"

import count from "./modules/text"
import bannerReducer from "@/views/discover/c-views/recommend/store/recommend"
import PlayReducer from "@/views/player/store/player"
import SongsReduer from "@/views/discover/c-views/songs/store"
import RankingReducer from "@/views/discover/c-views/ranking/store"
import SingerReducer from "@/views/discover/c-views/singers/store"
import ArtistReducer from "@/views/artist/store"
import AlbumReducer from "@/views/discover/c-views/albums/store"
import DjRadioReducer from "@/views/discover/c-views/DJradio/store"
import MvReducer from "@/views/mv/store"

const store = configureStore({
  reducer: {
    recommend: bannerReducer,
    player: PlayReducer,
    songCatList: SongsReduer,
    ranking: RankingReducer,
    singerCatList: SingerReducer,
    artist: ArtistReducer,
    album: AlbumReducer,
    djRadio: DjRadioReducer,
    mv: MvReducer
  }
})

/* store.getState是一个函数，typeof store.getState返回函数的类型 */
type getStateType = typeof store.getState
type useDispatchType = typeof store.dispatch

/*ReturnType返回函数返回值的类型  */
export type IRootState = ReturnType<getStateType>
/*
还可以像下面这样！！！！
const result = store.getState()
type IRootState = typeof result
但是为什么 type IRootState=typeof store.getState()返回的是函数类型？
*/

/*
interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
}

大括号里面其实是一个函数签名
所以 <TSelected>为什么加在前面  就的泛型啦
*/

// 为了让useSelector中解构的state有类型(默认是any类型)，这里对它做了重新封装
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

/* 其实下面这两个不是很有必要 主要是为了统一出口 */
export const useAppDispatch: () => useDispatchType = useDispatch

export const appShallowEqual = shallowEqual

export default store
