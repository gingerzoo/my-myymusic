// discover中的数据
export const dicoverMenu = [
  {
    title: "推荐",
    link: "/discover"
  },
  {
    title: "排行榜",
    link: "/discover/ranking"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "主播电台",
    link: "/discover/djradio"
  },
  {
    title: "歌手",
    link: "/discover/singers"
  },
  {
    title: "新碟上架",
    link: "/discover/albums"
  }
]

export const footerLink = [
  {
    title: "网易开放平台",
    link: "https://developer.music.163.com/st/developer"
  },
  {
    title: "云村交易平台",
    link: "https://music.163.com/st/web-sublicense/home"
  },
  {
    title: "Amped Studio",
    link: "https://web-amped.music.163.com/"
  },
  {
    title: "用户认证",
    link: "https://music.163.com/st/userbasic#/auth"
  },
  {
    title: "独立音乐人",
    link: "https://music.163.com/recruit"
  },
  {
    title: "赞赏",
    link: "https://music.163.com/web/reward"
  },
  {
    title: "视频激励",
    link: "https://music.163.com/uservideo#/plan"
  }
]
export const footerClause = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "投资者关系",
    link: "http://ir.music.163.com/en/index.php"
  },
  {
    title: "广告关系",
    link: "https://music.163.com/ui/resource"
  },
  {
    title: "联系我们",
    link: "https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station"
  }
]

// 热门主播
export const hotRadios = [
  {
    picUrl:
      "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485"
  },
  {
    picUrl:
      "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
    name: "DJ艳秋",
    position: "著名音乐节目主持人",
    url: "/user/home?id=91239965"
  },
  {
    picUrl:
      "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
    name: "国家大剧院古典音乐频道",
    position: "国家大剧院古典音乐官方",
    url: "/user/home?id=324314596"
  },
  {
    picUrl:
      "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
    name: "谢谢收听",
    position: "南京电台主持人王馨",
    url: "/user/home?id=1611157"
  },
  {
    picUrl:
      "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
    name: "DJ晓苏",
    position: "独立DJ，CRI环球旅游广播特邀DJ",
    url: "/user/home?id=2313954"
  }
]

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001"
      }
    ]
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3
      }
    ]
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3
      }
    ]
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3
      }
    ]
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3
      }
    ]
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3
      }
    ]
  }
]

export const artistInfo = [
  { title: "热门作品", link: "/artist" },
  { title: "所有专辑", link: "album" },
  { title: "相关mv", link: "mv" },
  { title: "艺人介绍", link: "desc" }
]

export const AlbumCate = [
  { title: "全部", type: "ALL" },
  { title: "华语", type: "ZH" },
  { title: "欧美", type: "EA" },
  { title: "韩国", type: "KR" },
  { title: "日本", type: "JP" }
]
