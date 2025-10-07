// src/slices/riizeContentSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export type Fashion = {
  title: string[];
  image: string[][];
  subTitle: string[];
  subDescription: string[];
  timeStamp: string[];
  description: string[];
};

export type Props = {
  image: {
    src: string;
    detailImage: string;
    detailTitle: string;
    detailDescription: string;
  }[];
};

export type SetSpace = {
  title: string[];
  image: string[];
  hoverImage: string[];
  description: string[];
};

export type Direction = {
  title: string[];
  image: string[][];
  description: string[];
};

export type Typography = {
  image: string[];
};

export type Related = {
  image: string[];
};

interface RiizeContentState {
  fashion: Fashion;
  props: Props;
  setSpace: SetSpace;
  direction: Direction;
  related: Related;
  typography: Typography;
  youtube: {
    url: string;
    title: string;
    subTitle: string;
    viewUrl: string;
  };
  tags: string[];
}

const initialState: RiizeContentState = {
  fashion: {
    title: [
      "[RIIZE 라이즈 | Love 119 ] Look #1 - [The North Face 1996 Novelty Nuptse Jacket Woodland Camo]",
      "[RIIZE 라이즈 | Love 119 ] Look #2 - [Adidas Tiro 23 League Windbreaker Jacket]",
      "[RIIZE 라이즈 | Love 119 ] Look #3 - [IEY MAXI DUFFLE COAT]",
      "[RIIZE 라이즈 | Love 119 ] Look #4 - [Loafer Shoes]",
    ],
    image: [
      ["/fashion/riize/1_1.png", "/fashion/riize/1_2.png"],
      ["/fashion/riize/2_1.png", "/fashion/riize/2_2.png"],
      ["/fashion/riize/3_1.png", "/fashion/riize/3_2.png"],
      ["/fashion/riize/4_1.png", "/fashion/riize/4_2.png"],
    ],
    subTitle: [
      "노스페이스 1996 노벨티 눕시 카모",
      "아디다스 티로23 리그 윈드브레이커 재킷",
      "이에이 맥시 더플코트",
      "로퍼 신발",
    ],
    subDescription: [
      "Nuptse, Camo pattern, 1996",
      "Streetwear-ready, Sporty, Outerwear",
      "Classic, Heritage, Vintage-inspired",
      "JK style, Preppy, Classic",
    ],
    timeStamp: [
      "(01:46 - 01:48)",
      "(01:35 - 01:38)",
      "(02:20 - 02:39)",
      "(01:07 - 01:09)",
    ],
    description: [
      "1996년 출시된 눕시 재킷의 디자인에 카모플라주 패턴이 적용된 패딩'. 노벨티(Novelty)'는 새로운 디자인이나 특징을 의미하며, 숲을 연상시키는 짙은 갈색과 녹색 계열의 카모플라주 패턴이 특징이다. 눕시가 가장 인기를 끌던 1996년도에서 따와 1996이라는 숫자가 붙었다.",
      "2022년 출시된 아디다스의 티로 23 리그 컬렉션 제품으로, 가벼운 비와 바람을 막아주는 우븐 발수 쉘이 견고한 보호막을 더해준다. 저지 위로 들뜸 없이 걸칠 수 있는 슬림 핏이 자유로운 활동성을 선사한다.",
      "전체적으로 오버사이즈의 실루엣과 오버 플랫으로 조금 더 볼드한 분위기를 주는 코트. 1990년도, 더플코트를 교복 위에 걸치는 스타일링이 유행하였다. 현재까지 학생, 예술가, 그리고 젊은층 사이에서 유행하며 자유로움과 개성을 표현하는 상징적인 패션이 됐다. 캠퍼스 패션의 필수 아이템으로 겨울 프레피 룩의 메인 아우터로 사랑받고 있다.",
      "메리제인 신발과 더불어 주로 일본에서 학생들이 교복과 함께 착용하는 신발. 로퍼의 착용을 의무화하는 학교도 다수 있기 때문에 일본 내에서 로퍼 신발은 고등학생이 신는 신발이라는 이미지가 강하다.",
    ],
  },
  props: {
    image: [
      {
        src: "/prop/riize/1.png",
        detailImage: "/prop/riize/detail/1.png",
        detailTitle: "삼성 갤럭시Z 플립",
        detailDescription:
          "삼성전자가 2020년 출시한 갤럭시 Z 시리즈 소속 안드로이드 플래그십 폴더블 스마트폰으로, 삼성전자의 두 번째 인폴딩 폴더블 스마트폰이다.",
      },
      {
        src: "/prop/riize/2.png",
        detailImage: "/prop/riize/detail/2.png",
        detailTitle: "다다미 방에 주로 등장하는 일본식 실내 사각조명",
        detailDescription:
          "프레임은 주로 소나무, 참나무 등 원목으로 만들어져 다다미와 조화를 이룬다. 조명 갓을 통해 확산되는 따뜻한 색감의 빛은 다다미방 특유의 평온하고 아늑한 분위기를 조성한다.",
      },
      {
        src: "/prop/riize/3.png",
        detailImage: "/prop/riize/detail/3.png",
        detailTitle: "Tivoli Audio Model One",
        detailDescription:
          "2000년대 출시된 아날로그 형태의 라디오. 겉면에는 MDF를 사용하여 나무 재질 같은 느낌을 준다. 왼쪽에 모노 스피커에 불륨 조절과 작동 버튼 그리고 아날로그 채널 다이얼이 있다.",
      },
      {
        src: "/prop/riize/4.png",
        detailImage: "/prop/riize/detail/4.png",
        detailTitle: "오디오테크니카 개방형 온이어 헤드폰 실버",
        detailDescription:
          "2000~10년대 많이 보였던 폴더블 디자인. 가벼운 무게와 편안한 착용감이 특징인 유선 온이어 헤드폰이다.",
      },
      {
        src: "/prop/riize/5.png",
        detailImage: "/prop/riize/detail/5.png",
        detailTitle: "이스트팩 AUTHENTIC 백팩 데이팩",
        detailDescription:
          "2000년대 초반, 백팩 유행을 이끌었던 이스트팩. 50년 전 디자인과 크게 다르지 않다.",
      },
    ],
  },
  setSpace: {
    title: [
      "일상적 방구조",
      "일본 주택가와 수로, 다리를 중심으로 구성된 공간",
      "일본식 체육관 구조",
      "일본 철길 옆 공간",
    ],
    image: [
      "/set-space/riize/1.png",
      "/set-space/riize/2.png",
      "/set-space/riize/3.png",
      "/set-space/riize/4.png",
    ],
    hoverImage: [
      "/set-space/riize/1_hover.png",
      "/set-space/riize/2_hover.png",
      "/set-space/riize/3_hover.png",
      "/set-space/riize/4_hover.png",
    ],
    description: [
      "침대 대신 바닥에 깐 요와 이불, 낮은 높이의 베개, 햇살이 들어오는 원목 마루 바닥으로 매우 일상적이고 이상적인 아침 모습을 연출한다. 특히 일본식 다다미 방 혹은 한국식 구옥 방에서 흔히 보이던 조합이다.",
      "양옆으로 늘어선 낮은 단독주택과 철제 펜스와 콘크리트 구조물은 1980~90년대 도시개발 이후의 도시조직을 반영한다.",
      "일본식 학교 체육관은 다목적 활용과 높은 내진 성능을 중요하게 고려하여 설계되었다. 넓은 실내 공간 확보를 위해 기둥이 없는 구조를 채택하며, 다양한 건축 양식과 구조 공법을 활용한다. 나무로 된 바닥에는 배구, 배드민턴 등 다양한 종목의 코트 라인이 여러 색으로 그려져 있으며, 네트 설치용 지지대 구멍이 있다. 이동식 농구 골대 등을 사용해 공간 활용도를 높이기도 한다.",
      "일본의 철길 근처 공간에서 타이야끼라고 하는 한국의 붕어빵과 유사한 음식을 먹고있다. 일본은 도시 개발에 따라 고가 철도 아래 공간에는 술집, 식당, 자전거 보관소 등이 밀집해 있으며, 주거지 근처 철길 옆에는 콘크리트 마감의 독특한 집이 지어지기도 한다. 또한, 철길 옆 풍경을 활용한 개성 있는 카페와 상점들이 등장하며, 낡은 화물창고나 철도 기지는 복합타운으로 재개발되기도 한다.",
    ],
  },
  direction: {
    title: [
      "한국어 언어와 현대의 소통방식",
      "창작물 속 장면 오마주",
      "2000년대 피처폰 ui 차용 디자인",
    ],
    image: [
      ["/direction/riize/1.png", "/direction/riize/1_2.png"],
      ["/direction/riize/2.png", "/direction/riize/2_2.png"],
      ["/direction/riize/3.png", "/direction/riize/3_2.png"],
    ],
    description: [
      "현대의 문자메시지를 통한 소통방식을 사용하고 있으며, MV속 나레이션과 핸드폰 속 SNS 언어 모두 한국어를 사용하고 있다. 인스타그램의 사용은 한국 기준 2014~15년도부터 확산되었다.",
      "애니메이션 영화 <너의 이름은(2016) > 오마주\n영화 <LOVE LETTER(1995) >오마주",
      "2000년대 피처폰의 픽셀 그래픽을 재해석한 UI 테마, 피처폰의 특징적인 기능이었던 다양한 컬러 액정과 버튼 배열을 그래픽에 적용했다. 2bit 혹은 8bit 기반 컬러 구성처럼 보이는 디지털 블루 계열 메인 팔레트를 사용했다.",
    ],
  },
  typography: {
    image: ["/typography/riize/1.png"],
  },
  related: {
    image: [
      "/images/nct.png",
      "/images/Hearts2Hearts.png",
      "/images/newjeans2.png",
    ],
  },
  youtube: {
    viewUrl: "https://youtu.be/0TAAUWHo4Ec?si=_yOtf0X9JDsHYEQ2",
    url: "https://www.youtube.com/embed/0TAAUWHo4Ec?si=_yOtf0X9JDsHYEQ2",
    title: "RIIZE 라이즈 'Love 119' MV",
    subTitle: "일본 감성과 현대적 요소가 결합된 RIIZE의 청춘 로맨스를 담은 곡",
  },
  tags: ["1990s", "School", "youth chaos", "first love"],
};

export const riizeContentSlice = createSlice({
  name: "riizeContent",
  initialState,
  reducers: {},
});

export default riizeContentSlice.reducer;
