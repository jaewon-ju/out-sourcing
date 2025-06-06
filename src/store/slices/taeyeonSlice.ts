// src/slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export type TaeyeonFashion = {
  title: string[];
  image: string[][];
  subTitle: string[];
  subDescription: string[];
  timeStamp: string[];
  description: string[];
};

export type TaeyeonProps = {
  image: {
    src: string;
    detailImage: string;
    detailTitle: string;
    detailDescription: string;
  }[];
};

export type TaeyeonSetSpace = {
  title: string[];
  image: string[];
  hoverImage: string[];
  description: string[];
};

export type TaeyeonTypography = {
  image: string[];
};

export type TaeyeonDirection = {
  title: string[];
  image: string[][];
  description: string[];
};

export type TaeyeonRelated = {
  image: string[];
};

interface TaeyeonContentState {
  fashion: TaeyeonFashion;
  props: TaeyeonProps;
  setSpace: TaeyeonSetSpace;
  direction: TaeyeonDirection;
  related: TaeyeonRelated;
  typography: TaeyeonTypography;
  youtube: {
    url: string;
    title: string;
    subTitle: string;
  };
}

const initialState: TaeyeonContentState = {
  fashion: {
    title: [
      "[TAEYEON | Weekend] Look #1 — [Braid Hair]",
      "[TAEYEON | Weekend] Look #2 — [Bandana]",
      "[TAEYEON | Weekend] Look #3 — [Training]",
      "[TAEYEON | Weekend] Look #4 — [Twiggy]",
      "[TAEYEON | Weekend] Look #5 — [Mod Look]",
      "[TAEYEON | Weekend] Look #6 — [Marine look]",
    ],
    image: [
      ["/fashion/taeyeon/1_1.png", "/fashion/taeyeon/1_2.png"],
      ["/fashion/taeyeon/2_1.png", "/fashion/taeyeon/2_2.png"],
      ["/fashion/taeyeon/3_1.png", "/fashion/taeyeon/3_2.png"],
      ["/fashion/taeyeon/4_1.png", "/fashion/taeyeon/4_2.png"],
      ["/fashion/taeyeon/5_1.png", "/fashion/taeyeon/5_2.png"],
      ["/fashion/taeyeon/6_1.png", "/fashion/taeyeon/6_2.png"],
    ],
    subTitle: [
      "2000년대 초반 복고하이틴 스타일링",
      "1990년대 유행 반다나 패션",
      "Juicy Couture",
      "1960년대 트위기 메이크업",
      "1960년대 모드룩",
      "1960년대 프렌치 마린룩",
    ],
    subDescription: [
      "Highteen, 2000s, Braid Hair Style",
      "Highteen, 1990s, Hiphop",
      "Highteen, 2000s, Y2k, Pastel",
      "1960s, Modernism, Cut Crease",
      "1960s, Modernism, Primary color",
      "1960s, Breton stripes, Parisian chic",
    ],
    timeStamp: [
      "(00:30 - 00:34)",
      "(00:17 - 00:28)",
      "(00:34 - 00:53)",
      "(02:16 - 02:21)",
      "(03:22 - 03:40)",
      "(03:22 - 03:40)",
    ],
    description: [
      "길게 땋은 브레이드를 양갈래 혹은 하나로 늘어뜨린 형태로 연출한다. 보헤미안 레트로 요소 중 하나로 1994년부터 유행주기가 돌고 있는 스타일링이다.",
      "반다나는 복고적 장식이자 자율성의 표현 도구로 기능한다. 1990년대 하이틴과 스트리트 패션의 레퍼런스를 차용해, 자유롭고 자기표현적인 주말 감성을 시각화한 장치이다.",
      "Paris Hilton, Britney Spears, Lindsay Lohan 등의 셀럽들이 공항, 파파라치 컷, 리얼리티 TV 등에서 착용하며 대중화되었다. 2000년대 Y2K 시대의 소녀적 과시와 셀럽 문화가 결합된, 가장 아이코닉한 패션 아이템 중 하나이다.",
      "인형 같은 눈매와 미니멀한 얼굴 대비를 통해, 새로운 시대의 여성성과 소녀적 반항을 시각화한 상징적 스타일이다. 기존의 여성스러운 곡선미보다 중성적이고 소녀적인 외형이 각광받기 시작한 시기의 중심에 있다. 또한 런던 모즈(Mod) 스타일과 밀접하게 연관되며, 청춘의 자유와 반항, 실험성을 드러내고 있다.",
      "1960년대 영국에서 시작된 청년 하위문화 기반의 스타일로, 미니멀하고 구조적인 실루엣과 대담한 컬러 조합이 특징이다. 대표 아이템으로는 미니스커트, 기하학 패턴, 페이턴트 부츠 등이 있으며, 트위기의 숏컷과 극적인 아이메이크업과 함께 유행했다.",
      "1960년대 프렌치 마린룩은 프랑스 해군 유니폼에서 유래한 클래식 스타일로, 이 시기 자유분방한 보헤미안 감성과 결합되며 파리지앵 시크의 상징으로 자리잡았다. 주로 단정하면서도 자유로운 해양 이미지를 전달한다.",
    ],
  },

  props: {
    image: [
      {
        src: "/prop/taeyeon/1.png",
        detailImage: "/prop/taeyeon/detail/1.png",
        detailTitle: "비비안 웨스트우드 목걸이",
        detailDescription:
          "2000년대 초반 비비안 웨스트우드의 볼드한 악세서리가 유행했다.",
      },
      {
        src: "/prop/taeyeon/2.png",
        detailImage: "/prop/taeyeon/detail/2.png",
        detailTitle: "iMAC G3",
        detailDescription: "1998년 출시 모델",
      },
      {
        src: "/prop/taeyeon/3.png",
        detailImage: "/prop/taeyeon/detail/3.png",
        detailTitle: "Eero Saarinen",
        detailDescription:
          "20세기 중반 건축가의 작품  종종 유기적 형태와 기하학적 형태의 융합을 선보인다.",
      },
      {
        src: "/prop/taeyeon/4.png",
        detailImage: "/prop/taeyeon/detail/4.png",
        detailTitle: "National f3 radio cassette recorder (1983)",
        detailDescription:
          "1980~90년대 사운드 기기 디자인\n80년대 말~90년대 일본산 오디오 브랜드에서 쓰이던 용어이다.",
      },
      {
        src: "/prop/taeyeon/5.png",
        detailImage: "/prop/taeyeon/detail/5.png",
        detailTitle: "본더치 가방 (1992)",
        detailDescription:
          "1992년 출시된 Von Dutch 레드 백은 미국 서브컬처의 시각 언어와 2000년대 초 셀럽 문화가 결합된 Y2K 시대의 상징적 아이템이다.",
      },
      {
        src: "/prop/taeyeon/6.png",
        detailImage: "/prop/taeyeon/detail/6.png",
        detailTitle: "Nodaleto Bulla",
        detailDescription:
          "하이틴 패션에서 자주 등장하는, 1940년대 유행 메리제인 슈즈이다.",
      },
      {
        src: "/prop/taeyeon/7.png",
        detailImage: "/prop/taeyeon/detail/7.png",
        detailTitle: "Miu Miu Crystal Rainbow Heels in Pink",
        detailDescription:
          "과장된 장식성과 핑크의 유희성을 결합해, 큐티즘과 글램이 교차하는 현대적 페미니니티를 극단적으로 표현한 아이코닉 슈즈이다.",
      },
    ],
  },
  setSpace: {
    title: [
      "1980년대 미주 사무실 풍경 차용",
      "몽환적이고 판타지적인 분위기를 구현",
    ],
    image: ["/set-space/taeyeon/1.png", "/set-space/taeyeon/2.png"],
    hoverImage: [
      "/set-space/taeyeon/1_hover.png",
      "/set-space/taeyeon/2_hover.png",
    ],
    description: [
      "1970~80년대 미국 사무실은 원색 가구와 개방형 책상 배치가 특징으로, 기능성과 집단 효율을 동시에 강조한 공간입니다. 아날로그 기기 중심의 수기 업무가 이루어졌으며, 컬러풀한 모더니즘 디자인이 사무 환경에도 반영되었습니다.",
      "이상화된 여행 감성, 분홍색 컬러를 바탕으로 비행기 내부 라운지를 구현했다.",
    ],
  },

  direction: {
    title: [
      "뮤지컬식 연출",
      "Mid-Century Modern Interior Color",
      "Dreamcore",
      "1980s Disco, 2000s Office Core",
    ],
    image: [
      ["/direction/taeyeon/1.png"],
      ["/direction/taeyeon/2_1.png", "/direction/taeyeon/2_2.png"],
      ["/direction/taeyeon/3_1.png", "/direction/taeyeon/3_2.png"],
      ["/direction/taeyeon/4_1.png", "/direction/taeyeon/4_2.png"],
    ],
    description: [
      "핑크빛 무대와 프렌치 마린룩, 브로드웨이 뮤지컬식 안무를 결합해 1960년대 쇼 댄스 영화의 감성을 현대적으로 재현한다. 플레어 스커트와 과장된 제스처, 구름 위에 떠 있는 듯한 무대는 현실을 벗어난 몽환적 무드를 자아내며, ‘기억 속에 있을 법한 무대’를 시청각적으로 구현한다.",
      "오렌지, 코발트 블루, 민트, 마젠타 등 고채도 색상이 벽·책상·의자·컴퓨터에 나누어 배치되어 있다. 미드센추리 모던 인테리어에서 자주 쓰이던 색의 대비를 통한 시각적 리듬감을 반영한 것으로, 공간을 단조롭지 않고 생동감있게 연출했다.",
      "‘바비(BARBIE)’에 등장하는 이상적인 환상의 색감을 차용. 색감과 공간 연출을 통해 현실과 환상의 경계를 흐릿하게 만든다. 파스텔 핑크와 보랏빛으로 물든 하늘, 솜사탕 같은 구름은 일상적 사물을 비현실적 톤으로 덮어 ‘실존하지 않는 꿈속의 풍경’처럼 보이게 한다. 이 과포화된 색상은 현실감각을 제거하고, 유년기의 환상, 게임 그래픽, 디지털 몽환성과 연결되며, 기억 속 어딘가 본 듯한데 실재하지 않는 공간이라는 dreamcore의 미학적 핵심을 강화한다.",
      "해당 장면은 일상과 파티의 경계를 무너뜨리는 과장된 감각의 노스텔지어를 연출한다. 컬러풀한 조명, 풍선, 파티 모자, 진주 장식, 형광 가랜드와 같은 디스코 연출 요소는 80년대 클럽 문화의 시각 언어를 재현하며, 동시에 iMac G3, 스트라이프 티셔츠, 사무실 책상 등의 요소는 2000년대식 테크노-오피스 감성을 유쾌하게 차용하고 있다. 사무실이라는 가장 일상적인 공간을 파티화된 무대로 변형시켜, 현실의 틀에서 벗어나고 싶은 욕망을 시각적으로 표출하는 신세대식 회상극으로 기능한다.",
    ],
  },
  typography: {
    image: ["/typography/taeyeon/1.png", "/typography/taeyeon/2.png"],
  },
  related: {
    image: [
      "/images/Hearts2Hearts.png",
      "/images/Lesserafim.png",
      "/images/BTS.png",
    ],
  },
  youtube: {
    url: "https://www.youtube.com/embed/IKlkZZv76Ho?si=ojqbpcd-mWiDTZ03",
    title: "그리운 과거의 학창시절, 순정만화 같은 사랑, 유년기의 여름날",
    subTitle: "그리운 과거의 학창시절, 순정만화 같은 사랑, 유년기의 여름날",
  },
};

export const taeyeonContentSlice = createSlice({
  name: "taeyeonContent",
  initialState,
  reducers: {},
});

export default taeyeonContentSlice.reducer;
