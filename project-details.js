export const details = {
  stm32: {
    eyebrow: 'PROJECT 02 / EMBEDDED VISION',
    title: '영상은 보이게, 성능은 읽히게.',
    tags: ['STM32', 'HMI', 'Performance Analysis'],
    image: 'assets/stm32-demo.webp',
    caption: 'STM32 기반 실물 시연 장치와 LCD 출력 · 원본 포트폴리오 p.4',
    html: `
      <section class="case-step"><div class="step-label">PROBLEM <small>문제 정의</small></div>
        <p>영상 인식·추적 장치의 동작 상태를 한 화면에서 확인하고, 처리율과 응답 지연을 구분해 설명해야 했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">DATA <small>계측과 역할</small></div>
        <table class="data-table"><tbody>
          <tr><th scope="row">수행 규모</th><td>2주 · 4인 팀</td></tr>
          <tr><th scope="row">담당</th><td>HMI 구현 · 성능 시험 설계·분석</td></tr>
          <tr><th scope="row">카메라 프레임 수집</th><td>DMA 140 ms</td></tr>
          <tr><th scope="row">CPU 처리</th><td>99 ms</td></tr>
          <tr><th scope="row">평균 대기</th><td>70 ms</td></tr>
        </tbody></table>
      </section>
      <section class="case-step"><div class="step-label">ANALYSIS &amp; MODELING <small>화면 구성과 지연 해석</small></div>
        <div class="flow" aria-label="HMI 표시 구조">
          <div class="flow-node">카메라 영상</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">검출 결과·동작 상태</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">LCD HMI·성능 지표</div>
        </div>
        <div class="bar-chart" aria-label="처리 구간: 카메라 수집 140 밀리초, CPU 처리 99 밀리초">
          <div class="bar-row"><span class="bar-label">카메라 수집</span><div class="bar-track"><span class="bar-fill" style="width:100%"></span></div><span class="bar-value">140 ms</span></div>
          <div class="bar-row"><span class="bar-label">CPU 처리</span><div class="bar-track"><span class="bar-fill" style="width:70.7%"></span></div><span class="bar-value">99 ms</span></div>
        </div>
        <p class="evidence-note">두 처리 구간의 비교입니다. 두 값을 단순 합산한 지연이나 전후 성능 개선을 뜻하지 않습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">INSIGHT <small>처리율과 지연의 구분</small></div>
        <div class="flow"><div class="flow-node">평균 대기 70 ms</div><span class="flow-arrow" aria-hidden="true">+</span><div class="flow-node">CPU 처리 99 ms</div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-node">평균 응답 지연 약 169 ms</div></div>
        <p>한 번의 처리 시간과 사용자가 반응을 받는 시간을 분리해, 시험 조건에 맞춰 결과를 해석했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">BUSINESS IMPACT <small>구현 결과</small></div>
        <p>영상·검출·상태·성능을 함께 보여주는 HMI를 구현하고, 계측·실물 PoC·팀 시뮬레이션을 비교할 판단 기준을 정리했습니다.</p>
        <p class="evidence-note">169 ms는 평균 응답 지연 추정값입니다. 실물 PoC는 전체 흐름의 동작 확인이며, 시뮬레이션 결과를 실기 개선 수치로 사용하지 않았습니다.</p>
      </section>`
  },
  plc: {
    eyebrow: 'PROJECT 03 / INDUSTRIAL AUTOMATION',
    title: '공급·판별·적재를 병렬로.',
    tags: ['Mitsubishi Q PLC', 'GX Works2', 'GT Designer3'],
    image: 'assets/plc-machine.webp',
    caption: '소재 공급·판별·적재를 수행하는 실제 MPS 장비 · 원본 포트폴리오 p.5',
    html: `
      <section class="case-step"><div class="step-label">PROBLEM <small>문제 정의</small></div>
        <p>소재 분류부터 창고 적재·선택 불출까지 자동화하고, 순차 동작에서 발생하는 대기 시간을 줄여야 했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">DATA <small>프로젝트 범위</small></div>
        <table class="data-table"><tbody>
          <tr><th scope="row">수행 규모</th><td>3일 · 단독 설계·구현</td></tr>
          <tr><th scope="row">보관 공간</th><td>6개 창고 슬롯</td></tr>
          <tr><th scope="row">설비 제어</th><td>3파트 시퀀스 · 인터록 · 서보</td></tr>
          <tr><th scope="row">운영 화면</th><td>고객 HMI · 관리자 HMI</td></tr>
        </tbody></table>
      </section>
      <section class="case-step"><div class="step-label">ANALYSIS &amp; MODELING <small>병렬 시퀀스 설계</small></div>
        <div class="flow" aria-label="인터록으로 연결되는 공급, 소재 판별, 창고 적재">
          <div class="flow-node">공급</div><span class="flow-arrow" aria-hidden="true">↔</span>
          <div class="flow-node">소재 판별</div><span class="flow-arrow" aria-hidden="true">↔</span>
          <div class="flow-node">창고 적재</div>
        </div>
        <p>파트별 시퀀스와 인터록을 구성하고, 서보 위치 결정·원점 복귀·JOG 및 선택 불출을 연결했습니다.</p>
        <figure class="detail-figure"><button class="zoom" data-zoom="assets/plc-hmi.webp" data-caption="슬롯 상태, 통계, 서보 상태가 표시된 PLC 관리자 HMI"><img src="assets/plc-hmi.webp" alt="슬롯 상태, 통계, 서보 상태가 표시된 PLC 관리자 HMI" loading="lazy"></button><figcaption>관리자 HMI · 슬롯 상태·통계·서보 모니터링</figcaption></figure>
      </section>
      <section class="case-step"><div class="step-label">INSIGHT <small>상태와 명령을 분리</small></div>
        <div class="flow"><div class="flow-node">RESET 입력 유지</div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-node">상승 펄스 1회 처리</div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-node">반복 초기화 방지</div></div>
      </section>
      <section class="case-step"><div class="step-label">BUSINESS IMPACT <small>6개 소재 적재 시간</small></div>
        <div class="bar-chart" aria-label="순차 처리 이론 86.8초, 병렬 처리 실측 53.7초">
          <div class="bar-row"><span class="bar-label">순차 · 이론</span><div class="bar-track"><span class="bar-fill" style="width:100%"></span></div><span class="bar-value">86.8 s</span></div>
          <div class="bar-row"><span class="bar-label">병렬 · 실측</span><div class="bar-track"><span class="bar-fill" style="width:61.9%"></span></div><span class="bar-value">53.7 s</span></div>
        </div>
        <p><strong>33.1초 · 약 38.1% 단축</strong></p>
        <p class="evidence-note">순차 86.8초는 층별 단위 시간의 합산값입니다. 두 방식 모두를 실측한 전후 비교는 아닙니다.</p>
      </section>`
  },
  safeeye: {
    eyebrow: 'PROJECT 04 / ON-DEVICE AI',
    title: '현장 조건에 맞는 안전 감지.',
    tags: ['PPE Detection', 'OD / MLC', 'System Architecture'],
    image: 'assets/safeeye-demo.webp',
    caption: '보호구 미착용 감지 시연 화면 · 원본 포트폴리오 p.6',
    html: `
      <section class="case-step"><div class="step-label">PROBLEM <small>문제 정의</small></div>
        <p>보호구 미착용과 위험구역 접근을 판별하는 현장 경고 시스템에서, 인원 수에 따른 정확도·속도 차이를 확인해야 했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">DATA <small>같은 입력으로 비교</small></div>
        <table class="data-table"><tbody>
          <tr><th scope="row">수행 규모</th><td>2주 · 4인 팀</td></tr>
          <tr><th scope="row">담당</th><td>아키텍처 설계 · PPE 모델 비교 평가</td></tr>
          <tr><th scope="row">비교 모델</th><td>OD · 객체 검출 / MLC · 다중 라벨 분류</td></tr>
          <tr><th scope="row">공통 조건</th><td>동일 이미지 · 동일 사람 박스</td></tr>
          <tr><th scope="row">평가 항목</th><td>미경고 · 오경고 · 정확도 · FPS</td></tr>
        </tbody></table>
      </section>
      <section class="case-step"><div class="step-label">ANALYSIS &amp; MODELING <small>감지에서 경고까지</small></div>
        <div class="flow" aria-label="안전 감지 시스템 처리 구조">
          <div class="flow-node">IR·영상 입력</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">사람 검출</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">보호구 판별</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">현장 경고</div>
        </div>
      </section>
      <section class="case-step"><div class="step-label">INSIGHT <small>인원 수에 따라 달라지는 선택</small></div>
        <p>소수 인원에서는 MLC의 조끼 판별 정확도가 높았고, 다인원 조건에서는 OD의 처리량이 높았습니다.</p>
        <table class="data-table"><thead><tr><th scope="col">평가 조건</th><th scope="col">OD</th><th scope="col">MLC</th></tr></thead><tbody>
          <tr><th scope="row">소수 인원 · 조끼 정확도</th><td>79.6%</td><td><strong>90.8%</strong></td></tr>
          <tr><th scope="row">다인원 · PC 처리량</th><td><strong>3.70 FPS</strong></td><td>1.92 FPS</td></tr>
        </tbody></table>
      </section>
      <section class="case-step"><div class="step-label">BUSINESS IMPACT <small>운영 조건별 선택 근거</small></div>
        <p><strong>조끼 판별 정확도 +11.2%p</strong>와 다인원 처리량 차이를 비교해, 현장 조건에 맞춰 모델을 선택할 근거를 정리했습니다.</p>
        <p class="evidence-note">FPS는 PC 평가값이며, Raspberry Pi 5 실측 성능과 구분합니다.</p>
      </section>`
  },
  unreal: {
    eyebrow: 'PROJECT 05 / REAL-TIME 3D',
    title: '공간과 기기를 연결하는 VR·MR.',
    tags: ['Unreal Engine', 'Blueprint', 'UMG', '3D Optimization'],
    image: 'assets/unreal-cpr.webp',
    caption: 'CPR MR 콘텐츠의 실물 마네킹·가상 환자 좌표 정합 · 원본 포트폴리오 p.7',
    html: `
      <section class="case-step"><div class="step-label">PROBLEM <small>실물과 가상환경의 정합</small></div>
        <p>실물 마네킹과 가상 환자의 위치·방향을 맞추고, 여러 콘텐츠와 VR 기기를 연결할 공통 개발·운영 기반이 필요했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">DATA <small>실무 프로젝트 범위</small></div>
        <table class="data-table"><tbody>
          <tr><th scope="row">경력 기간</th><td>2021.03–2025.08</td></tr>
          <tr><th scope="row">소속</th><td>쉐어박스 · 엠라인스튜디오</td></tr>
          <tr><th scope="row">주요 작업</th><td>CPR MR · VR 공통 프레임워크 · TMS · 도시맵</td></tr>
        </tbody></table>
      </section>
      <section class="case-step"><div class="step-label">ANALYSIS &amp; MODELING <small>좌표 보정과 공통 구조</small></div>
        <div class="flow" aria-label="실물과 가상 환자의 좌표 정합">
          <div class="flow-node">실물 마네킹</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">위치·방향 캘리브레이션</div><span class="flow-arrow" aria-hidden="true">→</span>
          <div class="flow-node">가상 환자 정렬</div>
        </div>
        <p>캘리브레이션 모듈을 재설계·구현하고, 반복 기능의 구조·프로토타입 및 기기 상태·수집·관리를 연결하는 TMS를 설계했습니다.</p>
      </section>
      <section class="case-step"><div class="step-label">INSIGHT <small>대형 데이터의 실시간 콘텐츠화</small></div>
        <figure class="detail-figure"><button class="zoom" data-zoom="assets/unreal-city.webp" data-caption="Unreal Engine으로 임포트한 대형 도시맵"><img src="assets/unreal-city.webp" alt="Unreal Engine으로 임포트한 대형 도시맵" loading="lazy"></button><figcaption>대형 도시맵 · 액터 병합·재질·라이팅 및 공간 구성</figcaption></figure>
        <div class="flow"><div class="flow-node">SketchUp 도시 데이터</div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-node">Unreal 임포트</div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-node">액터·재질·라이팅 최적화</div></div>
      </section>
      <section class="case-step"><div class="step-label">BUSINESS IMPACT <small>현재 프로젝트로 이어지는 경험</small></div>
        <p>좌표 변환·공간 정합·물리·충돌·3D 최적화 경험을 축적했습니다. 이 경험을 현재 로봇 시뮬레이션의 장치 배치와 시스템 통합에 활용합니다.</p>
      </section>`
  }
};
