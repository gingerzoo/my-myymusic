import React, { memo, useRef } from "react"
import { Carousel } from "antd"
import type { ReactNode, FC } from "react"
import { NewAlbumWrapper } from "./style"
import { useAppSelector } from "@/store"
import AreaHeaderV1 from "@/components/area-header-v1"
import type { ElementRef } from "react"

import AlbumItem from "@/components/album-item"

interface IProps {
  children?: ReactNode
}

const NewAlbums: FC<IProps> = (props) => {
  const { newAlbum = [] } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
  }))

  console.log(newAlbum)

  const refCarousel = useRef<ElementRef<typeof Carousel>>(null)

  function btnClickHandle(isLeft = true) {
    const carousel = refCarousel.current
    isLeft ? carousel?.prev() : carousel?.next()
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/albums" />
      <div className="content">
        <div className="album">
          <Carousel ref={refCarousel} speed={1000}>
            {[0, 1].map((item, index) => {
              return (
                <div key={index}>
                  <div className="album-list">
                    {newAlbum.length > 0 &&
                      newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                        return <AlbumItem key={album.id} itemData={album} />
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => btnClickHandle()}
        ></button>

        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => btnClickHandle(false)}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbums)
