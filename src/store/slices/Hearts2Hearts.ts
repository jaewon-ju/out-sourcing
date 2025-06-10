// src/slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export type Hearts2HeartsFashion = {
  title: string[];
  image: string[][];
  subTitle: string[];
  subDescription: string[];
  timeStamp: string[];
  description: string[];
};

export type Hearts2HeartsProps = {
  image: {
    src: string;
    detailImage: string;
    detailTitle: string;
    detailDescription: string;
  }[];
};

export type Hearts2HeartsSetSpace = {
  title: string[];
  image: string[];
  hoverImage: string[];
  description: string[];
};

export type Hearts2HeartsTypography = {
  image: string[];
};

export type Hearts2HeartsDirection = {
  title: string[];
  image: string[][];
  description: string[];
};

export type Hearts2HeartsRelated = {
  image: string[];
};

interface Hearts2HeartsContentState {
  fashion: Hearts2HeartsFashion;
  props: Hearts2HeartsProps;
  setSpace: Hearts2HeartsSetSpace;
  direction: Hearts2HeartsDirection;
  related: Hearts2HeartsRelated;
  typography: Hearts2HeartsTypography;
  youtube: {
    url: string;
    title: string;
    subTitle: string;
    viewUrl: string;
  };
  tags: string[];
}

const initialState: Hearts2HeartsContentState = {
  fashion: {
    title: [
      "[Hearts2Hearts | Butterflies] Look #1 — [Preppy]",
      "[Hearts2Hearts | Butterflies] Look #2 — [School Looks]",
    ],
    image: [
      ["/fashion/Hearts2Hearts/1_1.png", "/fashion/Hearts2Hearts/1_2.png"],
      ["/fashion/Hearts2Hearts/2_1.png", "/fashion/Hearts2Hearts/2_2.png"],
    ],
    subTitle: [
      "영국 스쿨룩에서 파생된 프레피 스타일",
      "자율적이고 개성 있는 하이틴 교복 스타일",
    ],
    subDescription: [
      "BritishPreppy Schoolcore UniformRemix",
      "PreppyFreedom TeenStyleDiversity SchoolCore",
    ],
    timeStamp: ["(00:42 - 00:45)", "(02:36 - 02:52)"],
    description: [
      "영국 전통 스쿨룩에서 파생된 프레피(preppy) 스타일을 현대적으로 재해석한 사례이다. 셔츠와 스트라이프 타이, 니트 베스트 조합은 이튼 칼리지나 브리티시 보딩스쿨 스타일을 연상케 하며, 클래식한 단정미와 학원물 감성을 동시에 불러일으킨다.",
      "획일적인 제도복이 아닌, 자율복장을 허용하는 하이틴 스쿨룩으로 구성되어 있으며, 각자의 취향과 정체성을 시각적으로 표현할 수 있는 여지를 담고 있다. 셔츠, 타이, 체크 스커트 등 기본 교복 아이템은 공유하되, 어떤 학생은 하프집업과 캡모자를 착용하고, 어떤 학생은 블레이저 대신 니트 스웨터나 크루넥 후디를 매치하는 등 다양한 스타일의 병렬적 존재가 허용된다. 개성, 유연함, 다양성을 전면에 내세우는 ‘비표준화된 학교 이미지’가 연출되며, 전통적인 규율과 개성 사이의 균형이 특징적인 시각적 내러티브를 형성한다.",
    ],
  },

  props: {
    image: [
      {
        src: "/prop/Hearts2Hearts/1.png",
        detailImage: "/prop/Hearts2Hearts/detail/1.png",
        detailTitle: "스티커 투표판 (STICKER VOTING)",
        detailDescription:
          "2000년대 축제 포스터와 학교 환경 캠페인의 미장센, 한국어 언어가 사용 되었다.",
      },
      {
        src: "/prop/Hearts2Hearts/2.png",
        detailImage: "/prop/Hearts2Hearts/detail/2.png",
        detailTitle: "지도카드",
        detailDescription: "종이질감 강조로 레트로 페이퍼 문서",
      },
      {
        src: "/prop/Hearts2Hearts/3.png",
        detailImage: "/prop/Hearts2Hearts/detail/3.png",
        detailTitle: "Dual-lens 8mm Movie Camera",
        detailDescription: "1950–60년대: 가정용 무비 카메라로 주로 쓰임",
      },
      {
        src: "/prop/Hearts2Hearts/4.png",
        detailImage: "/prop/Hearts2Hearts/detail/4.png",
        detailTitle: "JBL 헤드셋",
        detailDescription:
          "JBL 오버이어 헤드셋은 미니멀하고 입체적인 디자인, 강한 브랜드 식별성, 실용적인 기능을 갖춘 소품으로, 청춘 캐릭터의 개성을 드러내기에 적합한 현대형 리빙 오브제이다.",
      },
    ],
  },
  setSpace: {
    title: [
      "미국식 고등학교 행사 공간",
      "자동문 + 하트 아이콘 디스플레이",
      "현대식 교내 엘리베이터 장치",
    ],
    image: [
      "/set-space/Hearts2Hearts/1.png",
      "/set-space/Hearts2Hearts/2.png",
      "/set-space/Hearts2Hearts/3.png",
    ],
    hoverImage: [
      "/set-space/Hearts2Hearts/1_hover.png",
      "/set-space/Hearts2Hearts/2_hover.png",
      "/set-space/Hearts2Hearts/3_hover.png",
    ],
    description: [
      "미국 고등학교 특유의 오픈형 다목적 공간으로, 체육관이나 카페테리아처럼 유연하게 활용 가능한 구조를 보여준다. 손글씨 배너와 포스터, 간이 테이블 등은 학생 주도 DIY 문화를 반영하며, 커뮤니티 중심의 활동성과 자율성을 강조한다다. 공간 전반에는 페스티벌 특유의 따뜻한 조명과 분산된 동선이 어우러져, 하이틴 영화 속 전형적인 학교 행사 분위기를 재현하고 있다.",
      "전형적인 현대식 공공시설 또는 학교 건물 내부 구조를 충실히 반영한 공간으로, 기능성과 효율성 중심의 설계 요소들이 뚜렷하게 드러난다. 자동문은 센서 기반 양방향 슬라이딩 도어로, 대형 병원, 학교, 행정청사 등 다중이용시설에서 흔히 사용되는 형태이며, 통행량이 많은 구역의 출입 동선 최적화를 목표로 하고 있다.",
      "스테인리스 마감과 디지털 안내 패널 등으로 구성된 현대식 공공건물의 전형적 수직 이동 공간. 정보 전달과 위생, 내구성을 중시한 구조는 교육기관·의료시설 등에서 흔히 사용되며, 반복적이고 무표정한 공간미는 인물 간 정서적 거리를 부각시키는 연출적 배경으로도 작동한다.",
    ],
  },

  direction: {
    title: [
      "레트로 영화 크레딧 스타일",
      "고전필름 오프닝 시퀀스 타이틀 프레임",
      "비현실의 인공적 구성",
      "CRT 브라운관 모니터",
    ],
    image: [
      ["/direction/Hearts2Hearts/1.png"],
      ["/direction/Hearts2Hearts/2.png", "/direction/Hearts2Hearts/2_2.png"],
      ["/direction/Hearts2Hearts/3.png", "/direction/Hearts2Hearts/3_2.png"],
      ["/direction/Hearts2Hearts/4.png", "/direction/Hearts2Hearts/4_2.png"],
    ],
    description: [
      "흑백과 저해상도 처리로 아날로그 필름 카메라, VHS 홈비디오, 다큐멘터리 비주얼을 자아낸다. 로우 콘트라스트/소프트 포커스 효과는 회상 장면이나 과거의 꿈을 보는 듯한 몽환적인 연출 방식.",
      "1960~70년대 고전 필름의 오프닝 시퀀스를 연상시키는 정적이고 중심 정렬된 크레딧 구성을 따르고 있다. 넓은 자간, 점으로 나뉜 인명 배열, 세리프 서체의 사용은 당시 영화 타이틀 카드의 기계적인 리듬감과 인쇄물 같은 정서를 재현한다.",
      "fairycore 특유의 날개, 파스텔 톤, 구름, 침대 등의 요소와 dreamcore의 비현실적 무중력 공간, 맥락 없는 오브제, 몽환적 푸른 조명이 결합된 ‘메타버스형 가상 무대 연출’ 이다. 공간은 현실성과 물리성이 제거된 듯한 AR적 구성으로, 스튜디오의 촬영 구조가 일부 드러나면서도 동시에 판타지의 심층으로 진입하는 듯한 다층적 레이어를 형성하고 있다. 비정형적 시공간 위에 캐릭터가 배치되며, 현실을 시뮬레이션한 듯하면서도 동화 속 꿈의 구조물을 떠올리게 하는 시각적 장치로 작동한다.",
      "CRT 브라운관 모니터를 중심으로 레트로 기술 매체의 감성적 연출을 극대화한다. CRT 특유의 깊이감 있는 화면 곡률, 저해상도 노이즈, 푸른색 백라이트는 디지털 이미지의 감정을 더욱 몽환적이고 물리적인 실체로 표현하며, 현재와 과거의 시청각 매체가 충돌하는 시공간을 구성한다. 화면 밖 실제 인물이 마이크에 기대 잠든 구도는, 모니터 속 현실(컬러)과 바깥의 감정(흑백) 사이에 단절과 연결의 이중구조를 형성하고, 이는 미디어와 자아, 꿈과 기억 사이의 심리적 경계를 은유적으로 표현하는 연출이다.",
    ],
  },
  typography: {
    image: [
      "/typography/Hearts2Hearts/1.png",
      "/typography/Hearts2Hearts/2.png",
    ],
  },
  related: {
    image: [
      "/images/Lesserafim.png",
      "/images/Lucy.png",
      "/images/NewJeans2.png",
    ],
  },
  youtube: {
    viewUrl: "https://www.youtube.com/watch?v=hJ9Wp3PO3c8",
    url: "https://www.youtube.com/embed/hJ9Wp3PO3c8?si=uQxNrjDdiwOiOLQ1",
    title: "Hearts2Hearts ‘Butterflies(2025)’",
    subTitle: "나비를 따라 모여 무대를 준비하며 우정을 쌓아가는 서사",
  },
  tags: ["first love", "spring fever", "camcorder", "school"],
};

export const hearts2HeartsContentSlice = createSlice({
  name: "hearts2HeartsContent",
  initialState,
  reducers: {},
});

export default hearts2HeartsContentSlice.reducer;
