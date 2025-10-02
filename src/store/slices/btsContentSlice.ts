import { createSlice } from "@reduxjs/toolkit";

export interface BTSContentState {
  fashion: {
    image: {
      src: string;
      detailSrc: string;
      title: string;
      description: string;
      detailDescription: string;
      time: string;
    }[];
  };
  props: {
    image: {
      src: string;
      detailSrc: string;
      title: string;
      description: string;
      detailDescription: string;
    }[];
  };
  setSpace: {
    title: string;
    description: string;
    image: {
      src: string;
      detailSrc: string;
      title: string;
      description: string;
      detailDescription: string;
    }[];
  };
  direction: {
    image: {
      src: string;
      detailSrc: string;
      title: string;
      description: string;
      detailDescription: string;
    }[];
  };
  typography: {
    title: string;
    description: string;
    font: string;
    youtube: string;
  };
}

const initialState: BTSContentState = {
  fashion: {
    image: [
      {
        src: "/fashion/bts/1_1.png",
        detailSrc: "/fashion/bts/1_2.png",
        title: "Louis Vuitton Denim, Denim hoodie Zip-up",
        description: "루이비통 데님 셋업",
        detailDescription:
          "데님 청청패션은 편안한 핏과 개성 있는 디테일이 특징으로, 자유로운 젊음의 상징이었다. 1970년대 청청패션은 루즈핏 데님 팬츠와 데님 셔츠 등을 매치하고, 나팔바지 형태나 페인팅, 자수 등 개성 넘치는 디자인을 더해 자유로운 영혼과 반항적인 젊음의 정신을 표현했다.",
        time: "00:23 - 00:49",
      },
      {
        src: "/fashion/bts/2_1.png",
        detailSrc: "/fashion/bts/2_2.png",
        title: "1970s Retro suit set-up",
        description: "1970년대 복고풍 슈트 셋업",
        detailDescription:
          "70년대에서 영감을 받은 복고풍 슈트, 구찌의 베스트, 화이트 컬러셔츠, 블레이저, 플레어 팬츠, 벨트, 로퍼 등을 착용했다. 70년대 복고풍 슈트는 넉넉한 핏의 플레어 팬츠, 넓은 라펠, 그리고 화려한 색감과 패턴이 특징이다. 남성 슈트에서는 '패턴 온 패턴' 스타일로 서로 다른 패턴의 셔츠와 타이, 슈트를 함께 매치했으며, 여성 슈트에서는 부드러운 실루엣을 강조하고 허리를 강조하는 두꺼운 벨트, 망토 등을 착용하여 개성 있는 스타일을 표현했다.",
        time: "01:58 - 02:46",
      },
      {
        src: "/fashion/bts/3_1.png",
        detailSrc: "/fashion/bts/3_2.png",
        title: "1990s Pastel suit set-up",
        description: "파스텔 톤의 수트",
        detailDescription:
          "90년대 유행했던 파스텔 수트는 80년대의 화려하고 파워풀한 스타일과 달리, 편안하면서도 세련된 모던클래식 스타일의 일환으로 인기를 끌었다. 오버사이즈 실루엣에 옅은 파스텔 색상을 활용하여 밝고 경쾌한 느낌을 주었으며, 이는 여성복에서 파워 수트와 함께 등장하며 현대적인 감각을 더했다.",
        time: "02:47 - 03:26",
      },
    ],
  },
  props: {
    image: [
      {
        src: "/prop/bts/1.png",
        detailSrc: "/prop/bts/detail/1.png",
        title: "Projekt Produkt SC4 C010PG",
        description: "안구 소재의 아세테이트와 렌즈의 색 조합이 돋보이는 선글라스",
        detailDescription:
          "안구 소재의 아세테이트와 렌즈의 색 조합이 돋보이고, 지지대없이 렌즈를 고정하는 브릿지 구조가 독특한 선글라스 제품이다. 반투명 오렌지 프레임 모델이며 90년대 미니멀리즘 패션 트렌드를 반영하여, 스퀘어 디자인으로 과도한 장식 없이 깔끔하고 세련된 느낌을 강조했다.",
      },
      {
        src: "/prop/bts/2.png",
        detailSrc: "/prop/bts/detail/2.png",
        title: "캉골트로픽 504",
        description: "클래식한 504 기본 스타일의 헌팅캡",
        detailDescription:
          "얇은 폴리에스터 소재를 사용해 여름에도 시원하게 착용하기 좋은 헌팅캡으로, 클래식한 504 기본 스타일에 챙이 없는 벤테일 디자인이 특징이다. 507모델에 비해 504모델이 폭이 좁고 깊어 착용감이 좋다.",
      },
    ],
  },
  setSpace: {
    title: "장소",
    description: "",
    image: [
      {
        src: "/location/bts/1.png",
        detailSrc: "/location/bts/1_hover.png",
        title: "LA 공항 잉글우드(Inglewood)시에 있는 랜디스 도넛",
        description: "지구 상에서 가장 유명한 도넛 숍",
        detailDescription:
          "\"이 지구 상에서 가장 유명한 도넛 숍\"이며 \"여행객들이 LA의 명소들을 사진에 담을 때 가장 많이 찍는 장소 가운데 하나\"로 소개되는 랜디스 도넛. 9.75미터 높이의 지붕 위 대형 도넛 형상으로 인해 영화와 뮤직비디오, 텔레비전 드라마에도 자주 등장했다. 실제의 랜디스 도넛 간판에 컴퓨터그래픽을 이용해 깔끔하게 단장하고 색깔도 덧씌운 모습을 알 수 있다.",
      },
      {
        src: "/location/bts/2.png",
        detailSrc: "/location/bts/2_hover.png",
        title: "LA Venice Beach Basketball Courts",
        description: "11년째 항상 농구 토너먼트가 진행되던 곳",
        detailDescription:
          "베니스 비치 농구 코트는 팬데믹 전 11년째 항상 농구 토너먼트가 진행되던 곳이다. 이곳은 미리 신청만 하면 누구든지 무료 이용할 수 있다. 베니스 비치 애틀래틱 센터(Venice Beach Athletic Center)의 일부로 이 일대에는 근육 운동을 할 수 있는 실외 운동 기구들이 가득 놓여 있다. 덧붙여 베니스 비치는 '독특한 문화적 용광로'라고 불리곤 하는데 기념품점, 부티크, 레스토랑, 바(Bar)들이 해안선을 따라 줄줄이 늘어서 있다.",
      },
      {
        src: "/location/bts/3.png",
        detailSrc: "/location/bts/3_hover.png",
        title: "한국 에버랜드 락스빌 테마존",
        description: "1960년대 락앤롤 음악과 함께하는 테마공원",
        detailDescription:
          "미국 샌프란시스코 인근 소도시 락스빌을 본따 만든 에버랜드 락스빌은 미국의 역사를 한눈에 볼 수 있는 '아메리칸 어드벤쳐' 존 내 위치한 지역으로 1960년대 락앤롤 음악과 함께 더블락스핀, 렛츠트위스트, 롤링엑스트레인 등의 놀이기구와 뉴트로 축제인 '로라 코스타' 등이 열리는 테마공원이다.",
      },
    ],
  },
  direction: {
    image: [
      {
        src: "/direction/bts/1.png",
        detailSrc: "/direction/bts/1_2.png",
        title: "아이스크림 트럭 문화",
        description: "많은 미국인에게 어린 시절의 즐거운 기억을 떠올리게 하는 요소",
        detailDescription:
          "아이스크림 트럭은 많은 미국인에게 어린 시절의 즐거운 기억을 떠올리게 하는 요소이다. 1920년대 오하이오에서 시작된 것으로 추정되는 아이스크림 트럭은 현재 프랜차이즈화되어 미국 전역에서 찾아볼 수 있고, 특히 뉴욕과 로스앤젤레스 같은 대도시에서 아이스크림 시장의 큰 부분을 차지하고 있다. 주로 스텝 밴을 개조한 것이 전통적인 외형이다.",
      },
      {
        src: "/direction/bts/2.png",
        detailSrc: "/direction/bts/2_2.png",
        title: "1970년대 서양의 간판 양식",
        description: "미래주의적인 디자인과 자동차 문화를 반영",
        detailDescription:
          "1970년대 초까지 유행했던 구기(Googie) 양식이 대표적이며, 이는 미래주의적인 디자인과 함께 자동차 문화와 우주시대를 반영하여 도로변의 빠른 이동 차량에서도 눈에 잘 띄도록 화려하고 유치한 디자인이 특징이다. 우주시대의 도래에 영향을 받아 구기를 테마로 한 건축 양식은 1940년대 중반부터 1970년대 초까지 모텔 , 커피숍 , 주유소 등에서 큰 인기를 끌었다. 1970년대 중반 이후에는 근대주의 건축 양식의 영향을 받아 기능적인 디자인이 강조되는 경향을 보이기도 했다.",
      },
      {
        src: "/direction/bts/3.png",
        detailSrc: "/direction/bts/3.png",
        title: "하늘로 솟구치는 색상 파우더",
        description: "억눌린 에너지를 해방하는 메시지",
        detailDescription:
          "코로나 팬데믹 당시 해당 곡이  발표되었음을 고려할 때 단절된 일상 속 억눌린 에너지를 해방하는 메시지를 느낄 수 있다. 전체적인 뮤직비디오의 색감은 파스텔톤으로 진행되었지만 영상의 후반부 고채도의 파우더들을 폭죽처럼 사용하여 디스코/펑크의 원색 대비를 현대적으로 보여준다.",
      },
    ],
  },
  typography: {
    title: "BTS (방탄소년단) 'Dynamite' Official MV",
    description:
      "밝고 경쾌한 분위기의 디스코 팝 장르로, 팬들을 위한 희망의 메시지를 담았다.",
    font: "",
    youtube: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
  },
};

const btsContentSlice = createSlice({
  name: "btsContent",
  initialState,
  reducers: {},
});

export default btsContentSlice.reducer;
