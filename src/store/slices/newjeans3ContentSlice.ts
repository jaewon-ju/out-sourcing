import { createSlice } from "@reduxjs/toolkit";

export interface NewJeans3ContentState {
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

const initialState: NewJeans3ContentState = {
  fashion: {
    image: [
      {
        src: "/fashion/newjeans3/1_1.png",
        detailSrc: "/fashion/newjeans3/1_2.png",
        title: "Heaven by Marc Jacobs I FEEL ANGRY ZIP-UP",
        description: "헤븐바이 마크제이콥스 I FEEL ANGRY ZIP-UP 후드집업",
        detailDescription:
          "2020년 뉴욕에서 시작된 폴리섹슈얼 스트리트웨어 라인으로 박시한 핏과 프린팅 된 빈티지 스타일의 아트워크가 포인트인 제품. 90~2000년대 감성을 담은 그래픽 디자인, 폴리섹슈얼 스트리트웨어, 퀴어 유스의 자유로운 에너지를 특징으로 한다. 장난스럽고 포용적인 디자인을 통해 급진적인 개성과 자유로움을 표현한다.",
        time: "00:32 - 00:43",
      },
      {
        src: "/fashion/newjeans3/2_1.png",
        detailSrc: "/fashion/newjeans3/2_2.png",
        title: "Hair Bandana Styling",
        description: "헤븐바이 마크제이콥스 I FEEL ANGRY ZIP-UP 후드집업",
        detailDescription:
          "1990년대 힙합 패션 문화에서 사용되었던 헤드 스카프 스타일링을 연출했다. 해당 시기 'HOT', 'SES' 와 같은 가수들의 패션을 연상시키며 힙하고 레트로한 느낌을 더한다.",
        time: "01:29 - 01:35",
      },
      {
        src: "/fashion/newjeans3/3_1.png",
        detailSrc: "/fashion/newjeans3/3_2.png",
        title: "1990s old school fashion",
        description: "1990년대 올드스쿨 패션",
        detailDescription:
          "1990년대 힙합 패션 문화에서 사용되었던 헤드 스카프 스타일링과 올화이트 단체복. 90년대 힙합 패션의 시그니처인 루즈핏 티셔츠와 헤어밴드, 배기핏 바지, 통일된 색감의 옷들을 매치시켜 뉴잭스윙 곡에 맞는 힙합무드를 연출한다.",
        time: "01:02 - 01:14",
      },
    ],
  },
  props: {
    image: [
      {
        src: "/prop/newjeans3/1.png",
        detailSrc: "/prop/newjeans3/detail/1.png",
        title: "ANNTIAN Hand knit tank top",
        description: "앤디케이, 크리스찬 커트의 수공예 브랜드 제품",
        detailDescription:
          "ANNTIAN은 앤디케이, 크리스찬 커트가 2006년에 설립한 브랜드로, 각 제품이 지역 제조업체에서 만들어지며 장인 정신과 고품질 소재를 강조한다. 수공예적인 디테일과 독특한 디자인, 그리고 고품질의 소재를 특징으로 한다.",
      },
      {
        src: "/prop/newjeans3/2.png",
        detailSrc: "/prop/newjeans3/detail/2.png",
        title: "Brain Dead 우먼스 크로쉐 칼라 KASS 셔츠",
        description: "서브컬처에서 영감을 받은 독특한 미적 감각",
        detailDescription:
          "서브컬처에서 영감을 받은 Brain Dead의 제품은 스케이트보딩, 포스트 펑크, 만화 등의 영역을 넘나들며 독특한 미적 감각을 표현한다. 로고와 파스티치한 그래픽이 특징이다.",
      },
      {
        src: "/prop/newjeans3/3.png",
        detailSrc: "/prop/newjeans3/detail/3.png",
        title: "SCHISM INDUCING BANDANA HAT, BLACK",
        description: "페이즐리 패턴 반다나가 부착된 트러커캡",
        detailDescription:
          "페이즐리 패턴 반다나가 부착된 트러커캡 형태의 모자로, 큰 사이즈와 깊은 챙으로 트렌디한 스타일 연출이 가능하며, 후면에 금속 조절기(어저스터)가 있어 사이즈 조절이 용이하다.",
      },
      {
        src: "/prop/newjeans3/4.png",
        detailSrc: "/prop/newjeans3/detail/4.png",
        title: "유민 하 Sticker-Sheet Beanie",
        description: "그래피티 문화에서 영감을 받은 비니",
        detailDescription:
          "2021년 4월에 출시된 제품으로, 한국의 하유민 디자이너가 미국 뉴욕 차이나타운에서 전개하는 브랜드 '유민 하(Yumin Ha)'의 컬렉션 중 하나. 특히 그래피티 문화에서 영감을 받은 아트워크와 독특한 그래픽 디자인을 특징으로 하며, 하유민 작가와 뉴욕 및 Bay Area의 그래피티 라이터들과의 협업을 통해 탄생한 고유한 디자인이 돋보인다.",
      },
    ],
  },
  setSpace: {
    title: "장소",
    description: "",
    image: [
      {
        src: "/location/newjeans3/1.png",
        detailSrc: "/location/newjeans3/1_hover.png",
        title: "90~2000년대 힙합/R&B 뮤직비디오 공간",
        description: "도시를 발 아래 두고 서 있는 루프탑",
        detailDescription:
          "힙합, R&B 뮤직비디오에서 자주 보인 도시를 발 아래 두고 서 있는 루프탑 공간을 조성하여 젊음과 자유를 강조한다. 루프탑 뒤로 펼쳐지는 스카이라인과 네온 불빛, 직각형 빌딩 구조 그리는 시티팝에서 주로 보이는 도시적 느낌을 준다. 여기에 렌즈 플레어 질감과 보케효과 후보정을 통해  낭만적인 감성을 더한다. 루프탑은 90~00s 힙합 문화에서 스트리트 댄스 배틀과 자유로운 청춘의 장소적 상징성을 갖고 있으며 현실적인 리얼함보다 디지털 합성된 듯한 배경과 톤으로 90년도 시기의 비혀실적 CG배경을 연상시킨다.",
      },
      {
        src: "/location/newjeans3/2.png",
        detailSrc: "/location/newjeans3/2_hover.png",
        title: "거대한 유리벽과 과도기적 공간",
        description: "우주선의 관측창을 연상시키는 곡면 유리벽",
        detailDescription:
          "거대한 곡면 유리벽은 우주선의 관측창을,바깥의 거대한 비행선과 네온빛 구조물은 90년대 영화들이 상상하던 미래도시를 연상시킨다. 이러한 공간적 특징은 1990년대 다가올 세기말, 외계, 우주, 미래에 대한 집단적 상상과 불안이 대중문화 전반에 퍼져있던 시대상을 반영한다.",
      },
      {
        src: "/location/newjeans3/3.png",
        detailSrc: "/location/newjeans3/3_hover.png",
        title: "공사 중인 건물 내부",
        description: "힙합의 자유분방하고 반항적인 이미지",
        detailDescription:
          "높은 천장, 철제 파이프, 금속 구조물, 흩날리는 먼지와 스모그, 벽에 붙은 '안전' 문구로 보아 공사가 진행 중인 건물로 읽을 수 있다. 폐허가 주는 독특한 감성을 결합하여 힙합의 자유분방하고 반항적인 이미지를 극대화하고 곡의 분위기를 살리기 위해 자주 촬영 장소로 선정된다.",
      },
    ],
  },
  direction: {
    image: [
      {
        src: "/direction/newjeans3/1.png",
        detailSrc: "/direction/newjeans3/1_2.png",
        title: "밤의 도시전경",
        description: "1980~2000년대 애니메이션과 게임의 밤 도시 전경",
        detailDescription:
          "해당 장면은 1980~2000년대의 애니메이션, 게임, 뮤직비디오에서 반복적으로 등장했던 밤의 도시 전경을 연상시킨다. <아키라>(1988), <에반게리온>(1995)과 같은 일본 애니메이션에서 세기말 불안과 미래도시에 대한 디스토피아를 상징하는 이미지들을 생각할 수 있다. 블레이드 러너 혹은 매트릭스 같은 사이버펑크 영화나 90년대 MTV 뮤비, 게임 인트로 영상에서도 이와 같은 네오한 도시 전경을 차용한 연출을 찾아볼 수 있다.",
      },
      {
        src: "/direction/newjeans3/2.png",
        detailSrc: "/direction/newjeans3/2_2.png",
        title: "CRT 모니터의 비율과 색감 차용",
        description: "1990년대~2000년대 컬러TV 그래픽 재현",
        detailDescription:
          "CRT 브라운관 TV 모니터의 굴곡과 4:3화면비 양식을 취하고 있으며, 노이즈와 의도적으로 화질을 저화시켜 1990년대~2000년대 컬러TV속 그래픽을 재현하고 있다. 일본어 자막이 화이트 산세리프 폰트로 삽입되었는 것을 보아 해외 영화 혹은 애니메이션 영상물에 달린 자막을 차용한 것을 알 수 있다.",
      },
      {
        src: "/direction/newjeans3/3.png",
        detailSrc: "/direction/newjeans3/3_2.png",
        title: "원반형 UFO와 외계인 토끼 외형",
        description: "디스토피아와 세기말적 종말론",
        detailDescription:
          "원반형 UFO의 형상과 그레이 외계인을 닮은 토끼탈을 쓴 인물의 등장은 디스토피아와 세기말적 종말론을 연상시킨다. 우주탐사 경쟁의 고조와 로즈웰 사건 이후 꾸준히 언급된 외계인의 음모론은 세기말, 1990년~2000년대 전후로 인류 종말 담론에 꾸준히 등장하던 소재였다.  CRT 스크린 속 방송화면 뉴스 LIVE 자막 표식도 이러한 디스토피아적 노스텔지어를 연출하는 장치로써 작용한다.",
      },
    ],
  },
  typography: {
    title: "NewJeans (뉴진스) 'Supernatural' Official MV (Part.1)",
    description:
      "운명적인 만남과 재회를 주제로 두 사람 간의 깊어지는 감정과 미래에 대한 기대를 표현한 뉴잭스윙 곡.",
    font: "",
    youtube: "https://www.youtube.com/watch?v=m6pTbEz4w3o",
  },
};

const newjeans3ContentSlice = createSlice({
  name: "newjeans3Content",
  initialState,
  reducers: {},
});

export default newjeans3ContentSlice.reducer;
