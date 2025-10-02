// src/slices/lesserafimContentSlice.ts
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

interface LesserafimContentState {
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

const initialState: LesserafimContentState = {
  fashion: {
    title: ["[LE SSERAFIM 르세라핌 | Come Over ] Look #1 - [1960s Mods Look]"],
    image: [["/fashion/lesserafim/1_1.png", "/fashion/lesserafim/1_2.png"]],
    subTitle: ["1960년대 모즈룩 패션"],
    subDescription: ["1960s, Monochrome, Geometric prints, Minimalist chic"],
    timeStamp: ["(00:35 - 00:47)"],
    description: [
      "1960년대 간결한 미학을 추구한 미니멀리즘과 세련된 감각을 내세운 모즈룩이 서양 패션을 주도했다. 과감하고 신선하고 독특한 스타일로 인식되며 시도되었는데, 특히 치마나 원피스가 사다리꼴로 퍼지는 '트라페즈 실루엣'과 블래과 화이트 색상의 스트라이프, 도트, 체크무늬 패턴 등을 기본으로 한다.",
    ],
  },
  props: {
    image: [
      {
        src: "/prop/lesserafim/1.png",
        detailImage: "/prop/lesserafim/detail/1.png",
        detailTitle: "1960~70년대 브라운관 형태의 소형 TV",
        detailDescription:
          "청록색 바디, 둥근 모서리, 큰 다이얼 등의 디테일은 초기 컬러 TV 광고를 연상시킨다. 화면 속 로고 'Come Over' 와 VHS 효과는 광고 오프닝을 떠올리게 하는 레트로 키치 감성을 강조하고 있다.",
      },
      {
        src: "/prop/lesserafim/2.png",
        detailImage: "/prop/lesserafim/detail/2.png",
        detailTitle: "스테인리스 커트레이 세트",
        detailDescription:
          "1950~60년대 미국과 유럽 중산층 가정 및 호텔 레스토랑에서 유행하던  포멀한 디너웨어 스타일과 유사하다.",
      },
      {
        src: "/prop/lesserafim/3.png",
        detailImage: "/prop/lesserafim/detail/3.png",
        detailTitle: "안드로이드 폰과 AI 기능",
        detailDescription:
          "뮤직 비디오 속에 안드로이드 스마트폰과 구글 생성형 AI인 제미나이가 등장한다. 멤버들이 '서클 투 서치' 기능을 활용해 마트에서 외국어로 표기된 식재료를 확인하는 내용이다.",
      },
      {
        src: "/prop/lesserafim/4.png",
        detailImage: "/prop/lesserafim/detail/4.png",
        detailTitle: "1960년대에 등장했던 캔 디자인",
        detailDescription:
          "1960년대는 팝아트 운동이 활발했던 시기로, 대중문화와 소비주의의 영향을 받아 눈에 띄고 대담한 색상이 캔 디자인에 적용되었다. 또한 알루미늄 캔이 등장하면서 더 가볍고 생산 비용이 저렴한 캔이 보편화되었다.",
      },
    ],
  },
  setSpace: {
    title: ["1970s 복고 미국식 슈퍼마켓", "세기말 사이버 문화 속 레트로 퓨처리즘"],
    image: ["/set-space/lesserafim/1.png", "/set-space/lesserafim/2.png"],
    hoverImage: ["/set-space/lesserafim/1_hover.png", "/set-space/lesserafim/2_hover.png"],
    description: [
      "1970년대의 서양의 슈퍼마켓은 화려한 색감, 그리고 여유로운 분위기가 특징이다. 바쁜 주부들을 위해 냉동식품, 박스에 담긴 믹스 제품 등 조리가 간편한 가공식품이 대량 진열되었고, 제품이 벽처럼 정렬되어 있는 반복적 배열이 돋보인다.",
      "당시 사이버펑크 문화는 데이터가 실질적인 가치를 지니고 가상현실이 현실과 뒤섞이는 세계를 상상했다. 이는 오늘날의 메타버스와 비슷한 개념으로, 레트로 퓨처리즘 미학에는 1980년대 후반부터 2000년대 초까지 사람들이 바라본 미래의 모습이 담겨 있다. 미래적인 느낌을 주기 위해 밝고 강렬한 원색이나 네온 톤을 사용하며, 금속성의 반짝이는 질감을 활용하기도 한다.",
    ],
  },
  direction: {
    title: [
      "1960s 텍스타일 패턴과 광고 속 색감 재현",
      "축소된 인물과 초현실적 합성",
      "상징적 색조합 차용",
      "2000년대 디스코, 글램팝 영상미",
    ],
    image: [
      ["/direction/lesserafim/1.png", "/direction/lesserafim/1_2.png"],
      ["/direction/lesserafim/2.png", "/direction/lesserafim/2_2.png"],
      ["/direction/lesserafim/3.png", "/direction/lesserafim/3_2.png"],
      ["/direction/lesserafim/4.png", "/direction/lesserafim/4_2.png"],
    ],
    description: [
      "주로 1950~60년대 광고 속 파스텔톤 위주의 컬러팔레트와 유사하며 도트, 스트라이프, 플레어 패턴 등 1960~70년대 텍스타일 그래픽이 인테리어에 사용되었다.",
      "1980~90년대 어린이 잡지, 장난감 광고 등 자주 사용되었던 축소된 인물 합성 연출법. 이러한 연출은 컴퓨터 그래픽 기술이 발달하지 않았던 당시, 아날로그적인 특수 촬영 기법을 활용해 제작되었다.",
      "1950년대 코카콜라 광고에서 가장 상징적이었던 색조합. 또한 50년대 미국 주택 인테리어, 식당,  소다숍 인테리어에서 많이 쓰였던 파스텔 블루 계열을 차용했다. 수영장의 하늘색 배경 위 빨강색과 흰색 소품, 멤버들의 패션이 놓여 형성된 극명한 컬러 대비는 시선을 끌고 청량한 느낌을 심어준다.",
      "2000년대에는 컨템퍼러리 R&B, 힙합, 일렉트로닉 음악이 주류를 이루면서 전통적인 디스코의 형태는 줄어들었으나, 디스코의 경쾌함이 댄스 음악에 녹아들었다. 디스코 영상미는 클럽 문화를 배경으로 한 영상에서 주로 나타났으며, 레이저 조명과 LED를 활용한 시각 효과, 자유로운 춤을 추는 사람들의 모습 등을 통해 역동적이고 세련된 느낌을 강조했다. 선명한 색감과 디지털 기술을 활용한 화려한 영상미가 특징이다.",
    ],
  },
  typography: {
    image: ["/typography/lesserafim/1.png"],
  },
  related: {
    image: ["/images/NCT.png", "/images/NewJeans.png", "/images/RIIZE.png"],
  },
  youtube: {
    viewUrl: "https://www.youtube.com/watch?v=VzP8V8c3WLo",
    url: "https://www.youtube.com/embed/VzP8V8c3WLo",
    title: "LE SSERAFIM (르세라핌) 'Come Over' OFFICIAL MV",
    subTitle: "1960~2000년대 레트로 감성과 미래적 요소가 결합된 르세라핌만의 독특한 매력을 느낄 수 있는 곡",
  },
  tags: ["1960s", "Retro", "Mods", "Supermarket"],
};

export const lesserafimContentSlice = createSlice({
  name: "lesserafimContent",
  initialState,
  reducers: {},
});

export default lesserafimContentSlice.reducer;
