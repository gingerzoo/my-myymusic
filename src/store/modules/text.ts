import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// 对应有些不能准确推导出类型的变量，可以使用类型接口，但大部分能自动推断出来的没必要
const initialState = {
  count: 0,
  message: "hippo"
}

const counterSlice = createSlice({
  name: "countNum",
  /* 对象语法糖 */
  initialState,
  /*
  别忘了action其实只是一个对象，包括type和paylaod两个属性
  PaylaodAction用来指定payload的类型
   */
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export default counterSlice.reducer

export const { changeMessageAction } = counterSlice.actions
