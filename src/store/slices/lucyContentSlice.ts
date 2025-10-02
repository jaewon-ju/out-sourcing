// src/slices/lucyContentSlice.ts
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

interface LucyContentState {
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

const initialState: LucyContentState = {
  fashion: {
    title: ["[New Jeans | Bubble Gum ] Look #1 - [Japanese School Uniform]"],
    image: [["/fashion/lucy/1_1.png", "/fashion/lucy/1_2.png"]],
    subTitle: ["영미권 학교 앰뷸럼"],
    subDescription: ["Y2K school uniforms 80s anime aesthetic"],
    timeStamp: ["(02:03 - 02:08)"],
    description: [
      "흰 셔츠와 짙은 플리츠 스커트로 단순화한 교복의 형태는 일본 학원물에서 반복적으로 구축된 시각적 상징으로 여름철 하복(夏服, 나쓰후쿠)에서 이런 미니멀 구성이 전형화되어, 대중매체 속 청춘 이미지로 굳어졌다. 일본 고등학생들의 셔츠를 크게 입는 교복 착용 방식은 90–2000년대 서브컬처에서 강조되며 교복을 규율의 상징이 아니라 개인적 자유와 청춘의 아이콘으로 소비하는 방식과 맞물린다.",
    ],
  },
  props: {
    image: [
      {
        src: "/prop/lucy/1.png",
        detailImage: "/prop/lucy/detail/1.png",
        detailTitle: "1990~2000년대 직장인 유머",
        detailDescription:
          "'자는 직원을 눈치 못 채는 상사' 또는 '자는 척하며 일하기'를 유머러스하게 연출하기 위한 메모지 낙서",
      },
      {
        src: "/prop/lucy/2.png",
        detailImage: "/prop/lucy/detail/2.png",
        detailTitle: "1980s Office Furniture",
        detailDescription:
          "허먼 밀러의 액션 오피스 시스템이 대중화 되면서,사무 공간의 배치는 기계 설비의 효율적 배치를 기준으로 이루어졌다. 모듈화, 직선화, 파티션화, 금속·합성소재화로 특징지어지며, 기능성과 표준화를 중시하는 형태를 보인다.",
      },
    ],
  },
  setSpace: {
    title: ["아날로그 오피스 공간", "원형 메인 스테이지와 둘러싼 사람들로 구성된 무대"],
    image: ["/set-space/lucy/1.png", "/set-space/lucy/2.png"],
    hoverImage: ["/set-space/lucy/1_hover.png", "/set-space/lucy/2_hover.png"],
    description: [
      "오피스 공간의 색감은 전체적으로 미드센츄리 모던의 과장되고 원색위주의 색감을 띈다. 하지만 가구와 인테리어들은 1980~2000년대의 폐쇄적이고 효율 중심의 아날로그 오피스를 모티브로 한다. 주로 파티션이 없으며, 쌓여진 서류더미나 좁은 철제 책상들로 아날로그 시대 사무노동에 대한 패러디적 연출을 보여준다.",
      "원형무대는 무대를 앞에서 보는 관객이 아니라, 카메라를 둘러싼 다각도로 고려한 구성이 특징이다. 특히 1970~90년대 TV 쇼 프로그램에서 반복적으로 쓰인 원형 무대의 상징성을 재현한 것으로, 360도 노출구조를 통해 시청자들에게 방청객이 된 듯한 감각을 전수한다.",
    ],
  },
  direction: {
    title: [
      "1990s~2000s 카툰 연출",
      "1960~80년대 미국 예능, 애니메이션 속 연출 문법",
      "슬랩스틱 코미디 오마주",
      "1990년대 TV쇼 차용",
      "서미 스트리트, 머팻쇼 캐릭터와 유사한 인형",
      "사물의 인격화",
    ],
    image: [
      ["/direction/lucy/1.png", "/direction/lucy/1_2.png"],
      ["/direction/lucy/2.png", "/direction/lucy/2_2.png"],
      ["/direction/lucy/3.png"],
      ["/direction/lucy/4.png", "/direction/lucy/4_2.png"],
      ["/direction/lucy/5.png", "/direction/lucy/5_2.png"],
      ["/direction/lucy/6.png", "/direction/lucy/6_2.png"],
    ],
    description: [
      "1990~2000년대 키즈쇼, 광고, 애니메이션에서 자주 보던 몽환, 정지된 연출을 레트로 미학으로 재구성한 것. 양이라는 상징 오브제를 사용하여 리얼리티보다 픽션적 요소로 잠이 오는 상황을 표현했다.",
      "미국 고전 TV 쇼와 영화에서 사용되던 '서클 인/아웃(circle in/out)' 트랜지션의 대표적 예시. 꿈인지 현실인지 모르는 과도기적 순간을 트렌지션을 통해 나타낸다. 또한 TV 브라운관 형태의 마스킹을 사용했으며 1990년대 가정용 비디오카메라 특유의 카메라 렌즈 광각 비틀림이 존재한다.",
      "일관되게 양식화된 움직임, 연극 무대 같은 공간, 그리고 과장된 신체표현으로 1980~90년대의 슬랩스틱 코미디에서 자주 보이던 무브를 사용했다. 이불을 뒤집어쓰며 깨우러 오는 사람들을 피해 달아나는 장면은 곡 제목 '잠깨'에서 추측할 수 있듯이 잠에서 깨지 못하는 상황 혹은 꿈 속에서 도망치는 비현실적 상황을 빗대어 나타내는 것으로 유추할 수 있다.",
      "옛날 CRT 브라운관 TV 혹은 캠코더의 뷰파인더를 연상 시키는 4:3 화면비 포맷. 어린이 공개 방송 프로그램 오프닝이나 모닝 프로그램 쇼의 전형적인 구도를 띄고 있다. 1970년대 TV show 타이틀 카드 구성과도 유사하다.",
      "1970년대부터 방송된 서미 스트리트(Sesame Street)와 더 머펫 쇼(The Muppet Show)를 연상시키는 캐릭터 인형을 등장시켜 어린이 프로그램을 오마주했다는 것을 전적으로 보여준다. 해당시기 공영방송에서 주로 사용된 교육용 캐릭터 인형은 상상력과 감성을 자극하는 요소로써 손인형의 구조로 움직이며 방송 전반에서 진행자와 대화하는 모습을 보여준다.",
      "1980~1990년대 유럽 및 북미권 어린이 교육 방송에서 유행했던 사물 인격화 연출법. 사물에 눈,코,입 등의 신체기관을 부착하여 다양한 감정표현을 보여준다.",
    ],
  },
  typography: {
    image: ["/typography/lucy/1.png"],
  },
  related: {
    image: ["/images/NCT.png", "/images/NewJeans.png", "/images/RIIZE.png"],
  },
  youtube: {
    viewUrl: "https://www.youtube.com/watch?v=lTESlQNkd5I",
    url: "https://www.youtube.com/embed/lTESlQNkd5I",
    title: "LUCY ‘잠깨’ Official MV",
    subTitle: "시작을 상징하는 봄, 새로운 챕터를 피우는 곡",
  },
  tags: ["Spring", "Office", "Retro", "Comedy"],
};

export const lucyContentSlice = createSlice({
  name: "lucyContent",
  initialState,
  reducers: {},
});

export default lucyContentSlice.reducer;
