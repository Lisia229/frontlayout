import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    // -商店名稱
    name: {
      type: String,
      required: [true, '缺少名稱']
    },
    place: {
      type: String,
      required: [true, '缺少地點']
    },
    description: {
      // -商店敘述
      type: String,
      required: [true, '缺少說明']
    },
    image: {
      // -展覽照片
      type: String,
      required: [true, '缺少圖片']
    },
    dateValue: {
      // -商店時間
      type: String,
      required: [true, '缺少日期']
    },
    special: {
      // -商店特色
      type: String,
      required: [true, '缺少特色']
    },
    url: {
      // -商店網址
      type: String,
      required: [true, '缺少網址']
    }
  },
  { versionKey: false }
)

export default model('stories', schema)
