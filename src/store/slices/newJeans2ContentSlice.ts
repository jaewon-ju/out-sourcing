// src/slices/newJeansContentSlice.ts
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

interface NewJeans2ContentState {
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

const initialState: NewJeans2ContentState = {
  fashion: {
    title: ["[New Jeans | Bubble Gum ] Look #1 - [Japanese School Uniform]"],
    image: [["/fashion/newjeans2/1_1.png", "/fashion/newjeans2/1_2.png"]],
    subTitle: ["일본스타일 학교 하복"],
    subDescription: ["Y2K school uniforms 80s anime aesthetic"],
    timeStamp: ["(02:27 - 03:05)"],
    description: [
      "흰 셔츠와 짙은 플리츠 스커트로 단순화한 교복의 형태는 일본 학원물에서 반복적으로 구축된 시각적 상징으로 여름철 하복(夏服, 나쓰후쿠)에서 이런 미니멀 구성이 전형화되어, 대중매체 속 청춘 이미지로 굳어졌다. 일본 고등학생들의 셔츠를 크게 입는 교복 착용 방식은 90–2000년대 서브컬처에서 강조되며 교복을 규율의 상징이 아니라 개인적 자유와 청춘의 아이콘으로 소비하는 방식과 맞물린다.",
    ],
  },
  props: {
    image: [
      {
        src: "/prop/newjeans2/1.png",
        detailImage: "/prop/newjeans2/detail/1.png",
        detailTitle: "소니 SLV-ED818 (2001)",
        detailDescription: "2001년에 출시된 비디오 카세트 레코더 (VCR) 모델",
      },
      {
        src: "/prop/newjeans2/2.png",
        detailImage: "/prop/newjeans2/detail/2.png",
        detailTitle: "삼성 명품 플러스 TV CT-14F3",
        detailDescription:
          "1990년대 후반 ~ 2000년대 초반, CRT 브라운관 TV의 황혼기와 디지털 전환 사이에 있었던 과도기 모델",
      },
      {
        src: "/prop/newjeans2/3.png",
        detailImage: "/prop/newjeans2/detail/3.png",
        detailTitle: "애플 아이맥 G4(2002)",
        detailDescription:
          "2002년 공개된 iMac G4는 애플의 디자인 철학이 하드웨어 전반에 본격적으로 확장된 대표적 사례입니다. 기존 CRT 일체형 디자인에서 탈피하여, 반구형 본체에 LCD 플랫패널을 부착한 스윙암 구조로 당시 데스크탑 디자인에 일대 전환점을 가져왔습니다.",
      },
      {
        src: "/prop/newjeans2/4.png",
        detailImage: "/prop/newjeans2/detail/4.png",
        detailTitle: "스쿠비두(Scoubidou)",
        detailDescription:
          "투명한 아크릴 끈을 겹치듯 접어주면서 형태를 만들어 가는 90년대 유행했던 공예품. 가방에 매달거나 열쇠고리 등으로 활용할 수 있다. 어렸을 적 초등학생들 사이에서 끈 하나당 100-200원으로 쉽게 접할 수 있어 유행했던 아이템이다.",
      },
      {
        src: "/prop/newjeans2/5.png",
        detailImage: "/prop/newjeans2/detail/5.png",
        detailTitle: "에치 스케치(Etch A Sketch, 1960)",
        detailDescription:
          "20세기 장난감의 아이콘. 1955년 독일에서 열린 장난감 엑스포에 프랑스의 아더 그랑장이라는 사람이 '레크랑 마지끄(L'Ecran Magique)', 즉 마법의 스크린이라는 신기한 장난감을 처음으로 선보였다.",
      },
      {
        src: "/prop/newjeans2/6.png",
        detailImage: "/prop/newjeans2/detail/6.png",
        detailTitle: "애플 아이폰 15 프로(2023)",
        detailDescription:
          "Apple이 2023년 9월 13일 Apple 이벤트에서 공개한 iOS 스마트폰. iPhone 시리즈의 17번째 모델이다.",
      },
      {
        src: "/prop/newjeans2/7.png",
        detailImage: "/prop/newjeans2/detail/7.png",
        detailTitle: "고전 구슬치기 놀이",
        detailDescription:
          "고전 구슬치기 놀이에서 구슬은 유리로 된 작은 공으로, 다른 구슬을 쳐서 따먹거나 특정 목표에 던져 맞추는 등 놀이의 승패를 결정하는 데 사용된다. 주로 땅에 구슬을 놓고, 손가락으로 튕기거나 굴려서 상대방의 구슬을 맞추거나 원 안으로 밀어 넣는 방식으로 진행된다.",
      },
    ],
  },
  setSpace: {
    title: ["제주 황우치 해변"],
    image: ["/set-space/newjeans2/1.png"],
    hoverImage: ["/set-space/newjeans2/1_hover.png"],
    description: [
      "바닷가는 주로 청춘 영화나 창작물 속 반복된 여름 방학, 추억의 공식장소로 활용된다. 세팅된 세트장이 아닌 실제 청춘의 한 순간을 포착한 듯한 느낌을 주어 리얼리티를 강화하고 익숙한 휴양지이자 휴식의 장소로 친근한 기억속 추억을 불러일으키는 이상화된 장소이다.",
    ],
  },
  direction: {
    title: [
      "90~2000년대 홈비디오 스타일 화면연출",
      "CRT 브라운관 TV 시대, VHS 캠코더 화면비 4:3비율",
      "쿨톤과 저체도 필름, 소프트 포커스 효과, 빛 번짐",
      "강한 플래시와 과다노출",
    ],
    image: [
      ["/direction/newjeans2/1.png"],
      ["/direction/newjeans2/2.png"],
      ["/direction/newjeans2/3.png"],
      ["/direction/newjeans2/4.png"],
    ],
    description: [
      "90년대 캠코더 화면의 대표적 시각적 기호로 화면 상단에 날짜·시간 표시가 뜨며, 홈비디오 기록의 특징을 부각한다. VHS 테이프 특유의 '녹화/재생' 화면을 흉내 낸 그래픽. 화면의 미세한 줄무늬와 색 번짐도 VHS 질감을 재현한다. 하지만 실제 90~2000년대 캠코더에는 존재하지 않는 스펙. VHS는 해상도가 낮고 프레임 속도도 제한적이었다. 이에 반해 뮤직비디오 상에서는 초고해상도 지원 마크가 얹히면서, '레트로'라는 표면과 현대 기술이 충돌하는 역설적 장면이 등장한다.",
      "VHS는 1970년대 후반~1990년대까지 홈비디오의 표준 세팅값으로 사용되었고, 화면비 4:3 (1.33:1)은 당시 TV와 동일, 가정용 상영 환경에 최적화된 비율이다. 현대의 16:9 와이드 화면과 비교했을 때 정사각형에 가까운 비율로 피사체가 가운데에 집중되는 구도 형성이 많고, 여백 활용이 제한적이다. 이는 인물 클로즈업, 일상 장면 기록에 적합하며 홈비디오를 자주 촬영했던 시대상과 직결된다.",
      "일반적인 휴양지의 뜨거운 여름 느낌과 달리, 조금은 청량하고 차분한 정서를 전달한다. 해변의 자연광은 직접광이지만 부드럽게 확산되었고, 화면 곳곳에 빛 번짐 효과가 적용되어 꿈속의 기억, 혹은 필름 카메라의 역광사진 같은 질감을 보여준다.",
      "플래시는 카메라 렌즈를 직접 향하거나 흔들리며 움직여, 빛 번짐, 렌즈 플레어, 노출 과다 효과를 발생시킨다. 이를 통해 장면을 리얼하고 즉흥적인 기록성과 함께 몽환적이고 비현실적인 꿈속 기억처럼 표현한다.",
    ],
  },
  typography: {
    image: ["/typography/newjeans2/1.png"],
  },
  related: {
    image: ["/images/nct.png", "/images/newjeans3.png", "/images/riize.png"],
  },
  youtube: {
    viewUrl: "https://www.youtube.com/watch?v=ft70sAYrFyY",
    url: "https://www.youtube.com/embed/ft70sAYrFyY",
    title: "NewJeans (뉴진스) 'Bubble Gum' Official MV",
    subTitle:
      "심플한 드럼패턴에 시원한 느낌의 기타와 패드 신스 사운드가 더해져 뉴진스 만의 통통튀는 매력을 느낄 수 있는 곡",
  },
  tags: ["1990s", "slumber party", "y2k", "girlhood"],
};

export const newJeans2ContentSlice = createSlice({
  name: "newJeans2Content",
  initialState,
  reducers: {},
});

export default newJeans2ContentSlice.reducer;
